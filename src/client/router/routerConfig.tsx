import { ReactNode } from "react"
import { FirstRouteContent, SecondRouteContent, ThirdRouteContent } from "../pages"
import { icon1, icon2, icon3 } from "./assets"

export interface RouteData {
  path: string
  element: ReactNode
  icon: any
  children?:RouteData[]
}

export const ROUTES: Array<RouteData> = [
  { path: "/", element: <FirstRouteContent />, icon: icon1 },
  { path: "/2", element: <SecondRouteContent />, icon: icon2 },
  { path: "/3", element: <ThirdRouteContent />, icon: icon3 }
]
