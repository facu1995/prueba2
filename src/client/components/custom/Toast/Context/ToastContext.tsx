import { createContext, useState, ReactNode } from "react"

interface ToastProperties {
  message: string
  extraMessage?: string
}

interface ToastContextType {
  open: boolean
  isExiting: boolean
  properties: ToastProperties
  typeToast: "success" | "error"
  closeToast: () => void
  showToast: (
    properties: ToastProperties,
    type?: "success" | "error",
    undoAction?: () => void
  ) => void
  undoToast: () => void
  undoAction?: () => void
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [typeToast, setTypeToast] = useState<"success" | "error">("success")
  const [isExiting, setIsExiting] = useState(false)
  const [open, setOpen] = useState(false)
  const [undoAction, setUndoAction] = useState<(() => void) | undefined>(undefined)

  const [properties, setMessage] = useState<ToastProperties>({
    message: "",
    extraMessage: ""
  })

  const closeToast = () => {
    setIsExiting(true)
    setTimeout(() => {
      setOpen(false)
      setIsExiting(false)
      setUndoAction(undefined)
    }, 350)
  }

  const showToast = (msg: ToastProperties, type?: "success" | "error", undoAction?: () => void) => {
    setMessage(msg)
    setTypeToast(type ?? "success")
    setUndoAction(() => undoAction)
    setOpen(true)
    setTimeout(() => closeToast(), 1500)
  }

  const undoToast = () => {
    if (undoAction) {
      undoAction()
      closeToast()
    }
  }

  return (
    <ToastContext.Provider
      value={{
        isExiting,
        typeToast,
        properties,
        open,
        showToast,
        closeToast,
        undoToast,
        undoAction
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}
