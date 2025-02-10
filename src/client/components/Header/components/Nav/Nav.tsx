import style from "./Nav.module.css"
import Link from "./components/Link/Link"
import { RouteData } from "../../../../utils/routes"

export interface NavProps {
  routes: RouteData[]
  shadow?: boolean
  button?: boolean
  direction?: "row" | "column"
}

const Nav = ({ routes = [], shadow = false, button = false, direction = "column" }: NavProps) => {
  return (
    <nav
      className={`${style.Nav} ${shadow ? style.shadow : "0"}${button ? style.button : ""} ${
        direction === "row" && style.horizontal
      }`}
    >
      <ul className={direction === "row" ? style.horizontal : ""}>
        {Object.entries(routes).length >= 1 &&
          routes.map((link) => <Link route={link.path} icon={link.icon} key={link.path} />)}
      </ul>
    </nav>
  )
}

export default Nav
