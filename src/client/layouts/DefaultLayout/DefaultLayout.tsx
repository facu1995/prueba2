import { useState } from "react"

import { Main, Nav } from "../../components"
import style from "./DefaultLayout.module.css"
import { Header } from "../../components/custom/Header"

interface Props {
  className?: string
  children?: React.ReactNode
  HeaderChild?: React.ReactNode
}

const DefaultLayout = ({ children, className, HeaderChild }: Props) => {
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem("navIsOpen") === "true"
  })

  return (
    <div className={style["default-layout"]}>
      <div className={`${style["default-content"]} ${className ?? ""}`}>
        <Nav setIsOpen={setIsOpen} />
        {children && (
          <Main className={style[isOpen ? "content-open" : "content-closed"]}>{children}</Main>
        )}
      </div>
    </div>
  )
}

export default DefaultLayout
