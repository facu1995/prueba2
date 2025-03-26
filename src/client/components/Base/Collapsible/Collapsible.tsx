import style from "./collapsible.module.css"

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  className?: string
}

const Collapsible = ({ children, isOpen, className }: Props) => {
  return (
    <div className={`${style.collapsibleContainer} ${isOpen ? style.isOpen : ""} `}>
      <div className={`${style.collapsibleContent} ${className}`}>{children}</div>
    </div>
  )
}

export default Collapsible
