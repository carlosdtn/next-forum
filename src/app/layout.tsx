import "./globals.css"
import { Inter } from "next/font/google"
import AppLayout from "@/components/layouts/app-layout/index"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next Forum",
  description: "Foro de discusión sobre quejas y sugerencias ciudadanas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
