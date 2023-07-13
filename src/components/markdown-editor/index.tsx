import { Controller } from "react-hook-form"
import dynamic from "next/dynamic"
import type { FieldType } from "@/utils/types"
import { useCallback } from "react"
import { marked } from "marked"
import * as DOMPurify from "dompurify"
import hljs from "highlight.js"

type Variants = "condensed" | "regular"

type Props = {
  name: string
  control: any
  variant?: Variants
  defaultValue?: string
  placeholder?: string
  imageUploadTip?: boolean
  uploadingState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

const enabledPlugins = [
  "header",
  "font-bold",
  "font-italic",
  "font-strikethrough",
  "image",
  "list-unordered",
  "list-ordered",
  "block-quote",
  "block-wrap",
  "block-code-inline",
  "block-code-block",
  "table",
  "link",
  "clear",
  "logger",
  "mode-toggle",
  // "full-screen",
]

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
})

const MarkdownEditor: React.FC<Props> = ({
  name,
  control,
  variant = "regular",
  placeholder,
  defaultValue,
  imageUploadTip,
  uploadingState,
}) => {
  const mdParser = marked.setOptions({
    smartypants: true,
    langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
    renderer: new marked.Renderer(),
    // purify html
    sanitizer(html) {
      return DOMPurify.sanitize(html)
    },
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext"
      return hljs.highlight(code, { language }).value
    },
  })

  const handleChange = useCallback(
    (field: FieldType) =>
      ({ text }: { text: string; html: string }) => {
        if (typeof text === "string") {
          return field.onChange(text)
        }
      },
    []
  )
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div className="relative">
          <MdEditor
            plugins={enabledPlugins}
            style={
              variant === "regular" ? { height: "500px" } : { height: "200px" }
            }
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="dark:md-dark-mode"
            shortcuts
            htmlClass="html-section"
            renderHTML={(text) => mdParser.parse(text)}
            view={{
              menu: true,
              md: true,
              html: false,
            }}
            {...field}
            onChange={handleChange(field)}
          />
        </div>
      )}
    />
  )
}

export default MarkdownEditor
