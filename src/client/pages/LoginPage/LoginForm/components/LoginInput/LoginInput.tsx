import { ChangeEvent } from "react"
import style from "./LoginInput.module.css"

interface Props {
  id?: string
  label?: string
  type?: "email" | "text" | "password"
  change?: (e: ChangeEvent<HTMLInputElement>) => any
  blur?: (e: ChangeEvent<HTMLInputElement>) => any
  value: string
}

const Input = ({ id, label, type = "text", change, blur, value }: Props) => {
  return (
    <div className={style.group}>
      <input
        type={type}
        id={id}
        onChange={change}
        onBlur={blur}
        value={value}
        className={`${value ? style.used : ""} ${style.input}`}
        onInput={change}
      />
      <span className={`${style.highlight}`}></span>
      <span className={style.bar}></span>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
    </div>
  )
}

export default Input
