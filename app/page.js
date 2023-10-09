import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next.js</h1>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/about/team'>Team</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
