import { useState, useEffect } from "react"
import style from "./Toggle.module.css"

interface Props {
  name: string
  id?: string
  value?: boolean
  className?: string
  onChange?: (checked: boolean) => void
}

const Toggle = ({ id, name, value, className, onChange }: Props) => {
  const [active, setActive] = useState(value ?? false)

  useEffect(() => {
    setActive(value ?? false)
  }, [value])

  const toggleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(e.target.checked)
    onChange?.(e.target.checked)
  }

  return (
    <div className={`${style.checkbox} ${className}`}>
      <input
        type="checkbox"
        className={style.check}
        id={id ?? name}
        name={name}
        checked={active}
        onChange={toggleValue}
      />
      <label htmlFor={id ?? name} className={style.toggle} aria-checked={active}>
        <span className={style.span}></span>
      </label>
    </div>
  )
}

export default Toggle
