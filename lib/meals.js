// import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { sha1 } from "js-sha1";
import PublitioAPI from "publitio_js_sdk";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Error fetching meals data");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}-${currentDataString()}.${extension}`;

  // saving image on the local file system
  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  // const bufferedImage = await meal.image.arrayBuffer();

  meal.image = `${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )  
  `
  ).run(meal);
}

function currentDataString() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}${month}${day}`;

  return formattedDate;
}

export async function saveImage(imageFile, fileName, extension) {
  // const api_create_url = process.env.PUB_API_CREATE_URL;
  // const api_bearer = process.env.PUB_API_BEARER;
  // const api_signature = sha1.hex(`${api_timestamp}${api_nonce}${api_secret}`);
  // const api_nonce = process.env.PUB_API_NONCE;
  // const api_timestamp = Date.now();
  const api_key = process.env.PUB_API_KEY;
  const api_secret = process.env.PUB_API_SECRET;

  // const data = {
  //   api_key,
  //   api_nonce,
  //   api_signature,
  //   api_timestamp,
  //   file: imageFile,
  //   folder: "FoodiesImages",
  //   title: fileName,
  // };

  // const headers = {
  //   Authorization: `Bearer ${api_bearer}`,
  //   "Content-Type": `image/${extension}`,
  // };

  // console.log(data);
  // console.log(headers);

  // const response = await fetch(`${api_create_url}?file=${imageFile}`, {
  //   method: "POST",
  //   headers,
  //   body: JSON.stringify(data),
  // });

  const publitio = new PublitioAPI(api_key, api_secret);
  console.log(imageFile);
  return publitio
    .uploadFile(imageFile, "file")
    .then((data) => console.log(data));
}
