import { useContext } from "react"
import { ToastContext } from "."

const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast debe usarse dentro de ToastProvider")
  }
  return context
}

export default useToast
