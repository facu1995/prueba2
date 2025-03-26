import { BreadCrumbs, useToast, Toast } from "../"
import style from "./Header.module.css"

interface Props {
  className?: string
  children?: React.ReactNode
}

const HeaderComponent = ({ children, className }: Props) => {
  const { open, typeToast, properties } = useToast()

  return (
    <header className={style.header}>
      <div className={`${style.container} ${className ?? ""}`}>
        {!open && children}
        {open && (
          <Toast type={typeToast}>
            <div>
              <span className={style.text}>{properties.message}</span>
              {properties.extraMessage && <p>{properties.extraMessage}</p>}
            </div>
          </Toast>
        )}
      </div>
    </header>
  )
}

const DefaultHeader = () => {
  return <BreadCrumbs />
}

const Header = Object.assign(HeaderComponent, {
  default: DefaultHeader
})

export default Header
