import { useState } from "react"
import { Main, Nav } from "../../components"
import style from "./DefaultLayout.module.css"
import AuthGuard from "@routes/guard/auth.guard"
import { Outlet } from "react-router-dom"

interface Props {
  className?: string
  children?: React.ReactNode
}

const DefaultLayout = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem("navIsOpen") === "true"
  })

  return (
    <AuthGuard>
    <div className={style["default-layout"]}>
      <div className={`${style["default-content"]} ${className ?? ""}`}>
        <Nav setIsOpen={setIsOpen} />
        <Main className={style[isOpen ? "content-open" : "content-closed"]}>
          <Outlet/>
        </Main>
      </div>
    </div>
    </AuthGuard>
  )
}

export default DefaultLayout
