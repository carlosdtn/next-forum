import Link from "next/link"
import { Search, Menu } from "lucide-react"

const Header = () => {
  return (
    <header className="relative flex items-center justify-between w-full h-10 gap-2">
      <div>
        <Menu
          color="gray"
          width={38}
          height={38}
          stroke="currentColor"
          strokeWidth="3"
        />
      </div>
      <Link href="/">
        <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          FOCUS
        </span>
      </Link>
      <div className="flex items-center justify-center w-10 h-10 bg-black border rounded-full border-gray-500/60">
        <Search color="gray" width={18} size={18} />
      </div>
    </header>
  )
}

export default Header
