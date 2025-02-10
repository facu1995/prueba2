import { Route, Routes } from "react-router-dom"
import { ROUTES } from "../../utils/routes"

const renderRoutes = (routes) => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      )
    } else {
      return <Route key={route.path} path={route.path} element={route.element} />
    }
  })
}

const Router = () => {
  return (
    <Routes>
      {renderRoutes(ROUTES)}
    </Routes>
  )
}

export default Router
