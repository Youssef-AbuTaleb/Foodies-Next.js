export default function Meal({ params }) {
  return (
    <>
      <h1>Meal Page</h1>
      <p>Meal ID: {params.meal}</p>
    </>
  );
}
