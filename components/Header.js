import Link from 'next/link'

function Header() {
  return (
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/profile"><a>Profile</a></Link></li>
    </ul>
  )
}

export default Header
