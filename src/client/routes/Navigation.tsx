import { BrowserRouter, Route } from "react-router-dom"
import { Suspense } from "react"

import { RoutesWithNotFound } from "./utils"
import { DefaultLayout } from "../layouts"
import { Loader } from "../components"
import { routes, Route as IRoute } from "./routes"

const Navigation = () => {
  const renderRoutes = (routes: Array<IRoute>) => {
    return routes.map(({ path, children, Component }) => (
      <Route key={path} path={path} element={<Component />}>
        {children && children.length > 0 ? renderRoutes(children) : null}
      </Route>
    ))
  }

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <DefaultLayout>
            <Loader />
          </DefaultLayout>
        }
      >
        <RoutesWithNotFound>{renderRoutes(routes)}</RoutesWithNotFound>
      </Suspense>
    </BrowserRouter>
  )
}

export default Navigation
