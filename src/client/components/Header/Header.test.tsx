import "@testing-library/jest-dom"
import Header from "./Header"
import { RenderResult, render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../redux/store"
import { BrowserRouter } from "react-router-dom"

describe("< Header />", () => {
  let component: RenderResult

  test("should render", () => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>  
      </Provider>
    )
    expect(component.container).toBeInTheDocument()
  })
})
