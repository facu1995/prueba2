import { Header, Router } from "./components"
import { constants } from "./config/constants"

function App() {

  console.log(constants)
  
  return (
    <>
      <Header nav/>
      <Router />
    </>
  )
}

export default App
