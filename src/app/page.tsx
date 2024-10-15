
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>

        <h2>Linking by Anchor Tag</h2>

        <a href="/about">About</a> &nbsp;  &nbsp; | &nbsp;  &nbsp;
        <a href="/contact">Contact</a>

        <h2>Linking by Link Component</h2>
        <Link href="/about">About</Link>  &nbsp;  &nbsp; | &nbsp;  &nbsp;
        <Link href="/contact">Contact</Link>
    </div>
  );
}
