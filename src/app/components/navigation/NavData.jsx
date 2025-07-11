import Image from "next/image"
import Link from "next/link"

export default function NavData() {
  return (
    <>
    <li>
      <Link href="/">
    <Image src="/logo.jpg" alt="Logo" width={50} height={50} className="rounded-full" />
  </Link>
</li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/jobs">Jobs</Link></li>
    <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/blog">Blog</Link></li>
    <li><Link href="/dashboard">Dashboard</Link></li>
    </>
  )
}
