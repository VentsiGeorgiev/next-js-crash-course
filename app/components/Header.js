import Link from "next/link"

function Header() {
  return (
    <header>
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
    </header>
  )
}

export default Header