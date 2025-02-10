import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import User from "./User"
import { Provider } from "react-redux"
import { store } from "../../../../redux/store"

describe("<User />", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <User />
      </Provider>
    )
  })

  test("User should be synched with the store", () => {
    const userName = store.getState().user.userName

    const spanWithName = screen.getByText(userName)

    expect(spanWithName).toBeInTheDocument()
  })
})
