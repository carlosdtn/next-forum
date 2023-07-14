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
        width={120}
        height={120}
        className="flex-shrink-0 w-20 h-20 rounded-full sm:h-24 sm:w-24"
        alt={`${name} avatar`}
      />
      <div className="px-4">
        <h2 className="text-xl font-semibold prose line-clamp-1 text-ellipsis prose-invert xs:text-2xl">
          {name}
        </h2>
        <p className="text-sm leading-5 line-clamp-2 text-ellipsis xs:text-base">
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
      content={
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
