"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    invalidText(meal.title) ||
    invalidText(meal.summary) ||
    invalidText(meal.instructions) ||
    invalidText(meal.summary) ||
    invalidText(meal.creator) ||
    invalidText(meal.creator_email) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // first option to handle errors is to throw an error which will make error page appear
    // throw new Error("Could not save meal, some inputs are missing!");

    // second we could send response instead and use it inside our component
    return { message: "Invalid input." };
  }

  await saveMeal(meal);
  redirect("/meals");
}

function invalidText(text) {
  return text.trim() === "";
}
