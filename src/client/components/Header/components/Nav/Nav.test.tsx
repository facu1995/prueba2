import "@testing-library/jest-dom"
import Nav from "./Nav"
import { RenderResult, fireEvent, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { RouteData } from "../../../../utils/routes"
import { ReactNode } from "react"

const MOCK_ROUTES : Array<RouteData> = [
    { path: "/", element:null as ReactNode, icon: ''},
    { path: "/2", element:null as ReactNode, icon: ''},
    { path: "/3", element:null as ReactNode, icon: ''}
  ]


describe("< Nav />", () => {

  let view : RenderResult;

  beforeEach(()=>{
    view = render(
      <BrowserRouter>
        <Nav routes={MOCK_ROUTES} />
      </BrowserRouter>
    )})

  test('The nav should render as much items as routes passed', () => {
    const items = document.querySelectorAll('li')
    expect(items.length).toBe(MOCK_ROUTES.length)
  })

  test('A nav with an empty rooute array should not break', () => {
    view.unmount()
    view = render(
      <BrowserRouter>
        <Nav routes={[]} />
      </BrowserRouter>
    )
    const nav = document.querySelector('nav')
    const navItems = document.querySelectorAll('li')
    expect(nav).toBeInTheDocument()
    expect(navItems.length).toBe(0)
    
  })


  test('When a link is clicked, it should gain the "active" class', async () => {
    const listItem = view.container.querySelectorAll("a")
    fireEvent.click(listItem[2])
    expect(listItem[2].className).include("active")
  })

})
