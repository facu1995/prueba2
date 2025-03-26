import style from "./DefaultAside.module.css"
import { Card } from "../../components"

interface FooterProps {
  onSubmit: () => void
  onReset?: () => void
}

interface Props {
  isForm?: {
    onSubmit: () => void
    onReset?: () => void
  }
  loading?: boolean
  className?: string
  children?: React.ReactNode
  footer?: React.ReactNode | ((args: FooterProps) => React.ReactNode)
}

const DefaultAside = ({ isForm, loading, className, children, footer }: Props) => {
  const Tag = !isForm ? "aside" : "form"

  const renderFooter = () => {
    if (typeof footer === "function") {
      return footer({
        onSubmit: isForm!.onSubmit,
        onReset: isForm?.onReset
      })
    }
    return footer
  }

  return (
    <Tag
      className={`${style.aside} ${isForm ? style.form : ""} ${className}`}
      onReset={isForm?.onReset}
      onSubmit={(e) => {
        e.preventDefault()
        isForm?.onSubmit()
      }}
    >
      <div className={style.container}>
        <div className={style.content}>
          {loading ? (
            <Card className={style.card}>
              <div className={style.skeletonImage}></div>
              <div className={style.skeletonHeader}>
                <div className={style.title}></div>
                <div className={style.dots}></div>
              </div>
              <div className={style.skeletonText}></div>
              <div className={style.skeletonFooter}></div>
            </Card>
          ) : (
            children
          )}
        </div>
        <div className={style.footer}>
          {loading ? (
            isForm ? (
              <>
                <div className={style.button}></div>
                <div className={style.button}></div>
              </>
            ) : (
              <div className={style.button}></div>
            )
          ) : (
            renderFooter()
          )}
        </div>
      </div>
    </Tag>
  )
}

export default DefaultAside
