import Link from "next/link";

export default function Meals() {
  return (
    <>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/meals/m1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/m2">Meal 2</Link>
      </p>
    </>
  );
}
