"use client";

import PublitioAPI from "publitio_js_sdk";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit({ imageData }) {
  const { pending } = useFormStatus();
  const api_key = process.env.NEXT_PUBLIC_PUB_API_KEY;
  const api_secret = process.env.NEXT_PUBLIC_PUB_API_SECRET;

  const publitio = new PublitioAPI(api_key, api_secret);

  const uploadImageData = async () => {
    console.log(api_key, api_secret);
    console.log(imageData);

    publitio
      .uploadFile(imageData, "file", {
        folder: "FoodiesImages",
        title: "noodles.png",
      })
      .then((data) => console.log(data));
  };

  return (
    <button type="submit" disabled={pending} onClick={uploadImageData}>
      {pending ? "Submiting..." : "Share Meal"}
    </button>
  );
}
