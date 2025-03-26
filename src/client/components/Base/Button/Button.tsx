import Loader from "../Loader/Loader"
import styles from "./Button.module.css"

interface Props {
  value?: string
  icon?: JSX.Element
  loading?: boolean
  unfilled?: boolean
  leftIcon?: boolean
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
  type?: "button" | "reset" | "submit"
  size?: "large" | "medium" | "small"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  icon,
  style,
  value,
  onClick,
  loading,
  className,
  unfilled = false,
  size = "medium",
  leftIcon = false,
  type = "button",
  disabled = false
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...style }}
      className={`${styles.button} ${unfilled ? styles.unfilled : ""} ${styles[size]} ${className}`}
    >
      {loading ? <Loader /> : null}
      {!leftIcon && icon ? <div className={styles["svg-icon-div"]}>{icon}</div> : null}
      {value || null}
      {leftIcon && icon ? <div className={styles["svg-icon-div"]}>{icon}</div> : null}
    </button>
  )
}

export default Button
