import styles from "./Tag.module.css"

interface Props {
  ref?: React.Ref<HTMLDivElement>
  color?: string
  unfilled?: boolean
  fontColor?: string
  className?: string
  borderColor?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Tag = ({
  ref,
  color,
  onClick,
  children,
  className,
  fontColor,
  borderColor,
  unfilled = false
}: Props) => {
  const inlineStyles: Record<string, string> = {}

  if (color) {
    inlineStyles["--tag-color"] = color
  }
  if (borderColor) {
    inlineStyles["--border-color"] = borderColor
  }
  if (fontColor) {
    inlineStyles["--font-color"] = fontColor
  }
  return (
    children && (
      <div
        ref={ref}
        onClick={onClick}
        style={inlineStyles}
        className={`${styles.tag} ${className ?? ""} ${unfilled ? styles.unfilled : ""}`}
      >
        <div className={styles.bg}></div>
        <div className={styles.content}>{children}</div>
      </div>
    )
  )
}

export default Tag
