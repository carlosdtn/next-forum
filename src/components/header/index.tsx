import Link from "next/link"
import { Search, Menu } from "lucide-react"
import Logo from "@/components/logo"
import { useState } from "react"

type Props = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const Header: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between w-full h-10 gap-2">
      <div>
        <Menu
          color="gray"
          width={38}
          height={38}
          stroke="currentColor"
          strokeWidth="3"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        />
      </div>
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center justify-center w-10 h-10 border rounded-full border-gray-500/60">
        <Search color="gray" width={18} size={18} />
      </div>
    </header>
  )
}

export default Header
