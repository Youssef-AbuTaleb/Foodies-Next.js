# Foodies Meals website

## Description:
- This blog is created to help users explore shared meals. 
- Users Could also share thier own meanls.
- The blog contains a form where users could add thier information.
- Additionally in that form users could add the meals data.
- No authentication or payment required, so users should pay in cash.
- Finally, users should be taken to the order page to confirm the order.
- Order are made by sending a POST request with the order data (user data + selected pizzas) to the API.
- After ordering, users receive a unique ID for their order.
- Users can follow their order status using the given ID.
- The products in the menu can be changed, so we need to fetch menu data from an API.
- Users can also mark thier order as priority for and additional 20% of the cart price.
- Users can mark thier order as priority even after it has been placed.

## Necessary Pages:
1. HomePage "/"
2. Community Page  "/community"
3. Meals Page "/meals"
4. Meal Page "/meals/:mealID"
5. Share Meal Page "/meals/share"

## Used Technologies:
- Server side rendering using Next.js.
- Client components and server components.
- Styling: css modules.
- better-sqlite3 ,js-sha1 to store data.


