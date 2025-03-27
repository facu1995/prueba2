import { useTranslation } from "react-i18next"
import { useEffect } from "react"

import styles from "./Toast.module.css"
import { Button } from "../../base/Button"
import { useToast } from "."

interface Props {
  children: React.ReactNode
  type?: "success" | "error"
}

const Toast = ({ children, type = "success" }: Props) => {
  const { isExiting, closeToast, undoToast, undoAction } = useToast()
  const { t } = useTranslation()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeToast()
      }
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <div className={`${styles.overlay} ${styles[type]}`}>
      <div
        className={`${styles.toast} ${isExiting ? styles.hide : styles.show}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        {undoAction && (
          <Button
            unfilled
            onClick={undoToast}
            value={t("common.toast.undo")}
            className={styles.undoButton}
          />
        )}
      </div>
    </div>
  )
}

export default Toast
