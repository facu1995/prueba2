import {
  FirstRouteContent,
  SecondRouteContent,
  Version,
// ROUTE IMPORTS
} from "@pages"
import { LazyExoticComponent } from "react"
import ROUTES from "./utils/constantes";
import LoginPage from "@pages/LoginPage/LoginPage";
import { Navigate } from "react-router-dom";
import AdminPage from "@pages/AdminPage/AdminPage";

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
    path: ROUTES.login,
    name: "Login",
    Component: LoginPage
  },
  {
    path: ROUTES.home,
    name: "Inicio",
    Component: () => <Navigate replace to={ROUTES.admin} />
  },
  {
    path: ROUTES.version,
    name: "Versión",
    Component: Version
  },

  {
    navOmit: true,
    path: ROUTES.admin,
    name: "Administrador",
    Component: AdminPage,
    children: [
      {
        navOmit: true,
        path: "",
        name: "",
        Component: () => <Navigate replace to={ROUTES.admin.concat(ROUTES.page1)} />
      },
      {
        path: ROUTES.page1,
        name: "Inicio",
        Component: FirstRouteContent
      },
      {
        path: ROUTES.page2,
        name: "Page2",
        Component: SecondRouteContent
      },
      // ADD GUARD
    ],
  },
// ADD ROUTER
])


