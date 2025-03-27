import style from "./Body.module.css"

interface Props {
  className?: string
  children?: React.ReactNode
}

const Body = ({ className, children }: Props) => {
  return (
    <div className={`${style.body} ${className}`}>
      <div className={style.children}>{children}</div>
    </div>
  )
}

export default Body
