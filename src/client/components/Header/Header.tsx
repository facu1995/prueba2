import logo from "../../assets/logo-infosis.png"
import style from "./header.module.css"
import User from "./components/User/User"
import { Nav } from ".."
import { ROUTES } from "../../utils/routes"

interface HeaderProps {
  nav?: boolean
}

const Header = ({nav=false} : HeaderProps) => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      {nav ? <Nav routes={ROUTES} direction="row" /> : <></>}
      <User />
    </header>
  )
}

export default Header
