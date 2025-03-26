import { ToastProvider } from "./components"
import { Navigation } from "./routes"

function App() {
  return (
    <ToastProvider>
      <Navigation />
    </ToastProvider>
  )
}

export default App
