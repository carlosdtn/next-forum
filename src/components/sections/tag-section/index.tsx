import Section from "../section"
import Image from "next/image"

type Props = {
  loading: boolean
  tag?: any
}

type TitleProps = {
  name?: string
  description?: string
  avatar: string
  loading?: boolean
}

const SectionHeader = ({ name, description, avatar, loading }: TitleProps) => {
  return (
    <div className="flex items-center w-full gap-2">
      <Image
        src={avatar}
        width={60}
        height={60}
        className="h-16 w-16 flex-shrink-0 rounded-full xs:h-[60px] xs:w-[60px]"
        alt={`${name} avatar`}
      />
      <div>
        <h2 className="text-xl prose line-clamp-1 text-ellipsis prose-invert xs:text-2xl">
          {name}
        </h2>
        <p className="text-sm leading-5 line-clamp-2 text-ellipsis text-zinc-400 xs:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
SectionHeader.defaultProps = {
  name: "Carabayllo",
  description:
    "El distrito de Carabayllo es uno de los cuarenta y tres distritos que conforman la provincia de Lima, ubicada en el departamento homónimo, en el Perú.",
  avatar: "/images/Carabayllo.jpg",
}

const TagSection: React.FC<Props> = ({ loading, tag }) => {
  return (
    <Section
      loading={loading}
      title={
        <SectionHeader
          name={tag?.name}
          description={tag?.description}
          avatar={tag?.avatar}
          loading={loading}
        />
      }
    />
  )
}

export default TagSection
