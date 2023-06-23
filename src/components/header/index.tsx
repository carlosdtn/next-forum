import Link from "next/link"

const Header = () => {
  return (
    <header className="relative flex items-center justify-between w-full h-10 gap-2 bg-amber-400">
      <Link href="/">
        <div className="w-6 h-6 bg-black"></div>
      </Link>
    </header>
  )
}

export default Header
