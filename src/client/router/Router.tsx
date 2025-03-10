import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./routerConfig"
import { RouteData } from "@sentry/react/types/types"

const renderRoutes = (routes: RouteData[]) => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ))
}

const Router = () => {
  return <Routes>{renderRoutes(ROUTES)}</Routes>
}

export default Router
