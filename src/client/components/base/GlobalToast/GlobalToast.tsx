import checkIcon from "@assets/check.svg"
import errorIcon from "@assets/error.svg"
import clsx from "clsx"
import styles from "./GlobalToast.module.css"
import { IToast, ToastType } from "@interface/index"

enum toastBackground {
  ERROR = "#f8d7da",
  SUCCESS = "#e1fff7",
  DEFAULT = "#2196f3"
}

const getBackgroundColor = (type: IToast["type"]): string => {
  switch (type) {
    case ToastType.ERROR:
      return toastBackground.ERROR
    case ToastType.SUCCESS:
      return toastBackground.SUCCESS
    default:
      return toastBackground.DEFAULT
  }
}

const getIcon = (type: IToast["type"]): React.ReactNode => {
  switch (type) {
    case ToastType.ERROR:
      return <img src={errorIcon} className={styles.toastIcon} alt="error" />
    case ToastType.SUCCESS:
      return <img src={checkIcon} className={styles.toastIcon} alt="check" />
    default:
      return <img src={checkIcon} className={styles.toastIcon} alt="check" />
  }
}

const GlobalToast = ({ toast, hideToast }: { toast: IToast; hideToast: () => void }) => {
  return (
    <div
      onClick={() => {
        if (toast.touchToClose) {
          hideToast()
        }
      }}
      className={clsx(styles.globalToast, toast ? styles.ToastFlipEnter : styles.ToastFlipExit)}
      style={{
        backgroundColor: toast.background || getBackgroundColor(toast.type)
      }}
    >
      <div className={styles.globalToastContent}>
        {getIcon(toast.type)}
        <span className={styles.toastText}>{toast.text} </span>
      </div>
      {toast.actionButton && (
        <button
          className={styles.globalToastButton}
          onClick={() => {
            if (toast.actionButtonCallback) {
              toast.actionButtonCallback()
            }
            hideToast()
          }}
        >
          {toast.actionButtonText || "Aceptar"}
        </button>
      )}
    </div>
  )
}
export default GlobalToast
