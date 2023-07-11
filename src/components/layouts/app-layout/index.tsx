import Header from "@/components/header"

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-w-full px-6 min-h-screen max-w-2xl gap-10 py-12 mx-auto bg-white dark:bg-slate-900">
      <Header />
      {children}
    </div>
  )
}

export default AppLayout
