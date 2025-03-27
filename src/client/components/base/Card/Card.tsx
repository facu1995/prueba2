import style from "./Card.module.css"

export interface Props {
  loading?: boolean
  className?: string
  children?: React.ReactNode
  styles?: React.CSSProperties
  onClick?: () => void
  onTransitionEnd?: React.TransitionEventHandler<HTMLDivElement>
}

const Card = ({ children, className, styles, onClick, onTransitionEnd }: Props) => {
  return (
    children && (
      <div
        className={`${style.card} ${className}`}
        style={{ ...styles }}
        onClick={onClick}
        onTransitionEnd={onTransitionEnd}
      >
        {children}
      </div>
    )
  )
}

export default Card
