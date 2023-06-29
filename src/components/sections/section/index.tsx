import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SectionProps {
  title?: React.ReactNode
  className?: string
  loading?: boolean
}

const Section: React.FC<SectionProps> = ({ className, title, loading }) => {
  return (
    <section className="w-full px-5 py-5 border-2 rounded-xl shadow-4xl border-zinc-700/90 bg-zinc-800/70 sm:px-10">
      <div className="flex justify-center w-full">
        <div>
          <h2 className="text-xl prose line-clamp-1 text-ellipsis prose-invert xs:text-2xl">
            {title}
          </h2>
        </div>
        <Link href="/" className="flex items-center">
          <Button variant="primary" size="sm" type="button">
            Ver más...
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Section
