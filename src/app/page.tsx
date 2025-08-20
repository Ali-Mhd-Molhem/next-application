import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3>This is our blog</h3>
      <ul>
        <li>
          <Link href="/blog/">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
