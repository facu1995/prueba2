import { useLocation, Link } from "react-router-dom"

import style from "./BreadCrumbs.module.css"
import arrowSvg from "./assets/arrow.svg"
import { Route, routes } from "../../../routes"

const findRoute = (path: string, routes: Array<Route>): Route | undefined => {
  for (const route of routes) {
    if (route.path === path) {
      return route
    }
    if (route.children) {
      const childRoute = findRoute(path, route.children)
      if (childRoute) {
        return childRoute
      }
    }
  }
  return undefined
}

const getBreadcrumbs = (pathname: string, routes: Array<Route>) => {
  const segments = pathname.split("/").filter(Boolean)
  const breadcrumbs: Array<{ name: string; path: string }> = []
  let currentPath = ""

  for (const segment of segments) {
    currentPath += `/${segment}`
    const route = findRoute(currentPath, routes)
    if (route) {
      breadcrumbs.push({ name: route.name, path: currentPath })
    }
  }

  return breadcrumbs
}

const Breadcrumbs = () => {
  const location = useLocation()
  const breadcrumbs = getBreadcrumbs(
    location.pathname,
    routes.find(({ path }) => path === "/admin")?.children || []
  )

  return (
    <div className={style.container} aria-label="breadcrumbs">
      <ul className={style.ul}>
        {breadcrumbs.map((crumb, index) => (
          <li className={style.li} key={crumb.path}>
            {index < breadcrumbs.length - 1 ? (
              <Link to={crumb.path} className={style.link}>
                {crumb.name}
              </Link>
            ) : (
              <span className={style.span}>{crumb.name}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <img src={arrowSvg} alt="arrow-breadcrumbs" draggable={false} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
