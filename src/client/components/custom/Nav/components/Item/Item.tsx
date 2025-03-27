import { NavLink } from "react-router-dom"
import style from "./Item.module.css"
import Assets from "./assets"
import { Route } from "../../../../../routes"

type RouteProps = Pick<Route, "path" | "icon" | "name" | "navOmit" | "children">

interface Props extends RouteProps {
  closeNav?: () => void
  isOpen?: boolean
  className?: string
  navOpen?: boolean
  onClick?: () => void
}

const Item = ({
  path,
  name,
  icon,
  navOmit,
  children,
  className,
  isOpen = false,
  navOpen = false,
  onClick,
  closeNav
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    return onClick && onClick()
  }

  return (
    !navOmit && (
      <li
        className={`${className ?? ""} ${style[navOpen ? "navOpen" : ""]} ${style.li}`}
        onClick={children && children.length !== 0 ? undefined : onClick}
      >
        <div className={style.container}>
          <NavLink
            to={path}
            className={({ isActive }) => `${style.item}  ${isActive ? style.active : ""}`}
            draggable={false}
          >
            <div
              className={style.icon}
              onClick={
                !navOpen &&
                children &&
                children.length !== 0 &&
                children.some((child) => child.navOmit !== true)
                  ? handleClick
                  : undefined
              }
            >
              {icon ?? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
                    fill="#292D32"
                  />
                </svg>
              )}
            </div>
            <span className={style.span}>{name}</span>

            {children &&
              children.length !== 0 &&
              children.some((child) => child.navOmit !== true) && (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onClick && onClick()
                  }}
                  className={`${style.arrow} ${style[isOpen ? "open" : ""]}`}
                >
                  {Assets.arrow}
                </button>
              )}
          </NavLink>
        </div>
        {children && children.length !== 0 && children.some((child) => child.navOmit !== true) && (
          <ul className={`${style.content} ${style[isOpen ? "open" : ""]}`}>
            {children.map((route) => (
              <Item {...route} onClick={() => closeNav && closeNav()} key={route.path} />
            ))}
          </ul>
        )}
      </li>
    )
  )
}

export default Item
