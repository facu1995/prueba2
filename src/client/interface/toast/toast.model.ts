export enum ToastType {
  SUCCESS = "success",
  ERROR = "error"
}

export interface IToast {
  type?: ToastType
  text: string
  background?: string
  styles?: React.CSSProperties
  actionButton?: boolean
  actionButtonText?: string
  actionButtonCallback?: () => void
  touchToClose?: boolean
}