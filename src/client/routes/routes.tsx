import { FirstRouteContent,
   SecondRouteContent,
   Version,
   // ROUTE IMPORTS
   } from "@pages"
import { LazyExoticComponent } from "react"

type JSXComponent = () => JSX.Element

export interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  icon?: JSX.Element
  desc?: string
  roles?: Array<string>
  children?: Array<Route>
  navOmit?: boolean
}

const normalizeRoutes = (routes: Array<Route>, basePath = ""): Array<Route> => {
  return routes.map((route) => {
    const fullPath = `${basePath}/${route.path}`.replace(/\/+/g, "/")
    return {
      ...route,
      path: fullPath,
      children: route.children ? normalizeRoutes(route.children, fullPath) : undefined
    }
  })
}

export const routes: Array<Route> = normalizeRoutes([
  {
    path: "/",
    name: "Inicio",
    Component: FirstRouteContent
  },
  {
    path: "/2",
    name: "Page2",
    Component: SecondRouteContent
  },
  {
    path: "/version",
    name: "Versión",
    Component: Version
  },
  // ADD ROUTER
])
 