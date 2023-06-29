import Header from "@/components/header"

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="background-color: #201c1c; flex flex-col items-center w-11/12 max-w-2xl gap-10 py-12 mx-auto">
      <Header />
      {children}
    </div>
  )
}

export default AppLayout
