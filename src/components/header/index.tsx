import Link from "next/link"
import { Search } from "lucide-react"

const Header = () => {
  return (
    <header className="relative flex items-center justify-between w-full h-10 gap-2 bg-amber-400">
      <Link href="/">
        <div className="w-6 h-6 bg-black"></div>
      </Link>
      {/* <div>
        <Menu color="gray" width={20} height={20} />
      </div> */}

      <div className="flex items-center justify-center w-8 h-8 bg-white border rounded-full border-gray-500/60">
        <Search color="gray" width={16} size={16} />
      </div>
    </header>
  )
}

export default Header
