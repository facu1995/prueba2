import { NavLink } from "react-router-dom"
import style from "../../Nav.module.css"

interface LinkProps {
  route: string
  icon: string
}

const Link = ({ route, icon }: LinkProps) => {
  return (
    <li>
      <NavLink to={route} className={({ isActive }) => (isActive ? style.active : "")}>
        <img src={icon} alt="" />
      </NavLink>
    </li>
  )
}

export default Link
