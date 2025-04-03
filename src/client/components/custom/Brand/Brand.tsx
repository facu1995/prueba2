import style from "./Brand.module.css"
import ZeusIcon from "@pages/LoginPage/LoginForm/components/ZeusIcon/ZeusIcon"

interface Props {
  className?: string
  onClick?: () => void
}

const Brand = ({ className, onClick }: Props) => {
  return (
    <div className={`${className} ${onClick ? style.clickable : ""}`} onClick={onClick}>
      <ZeusIcon />
    </div>
  )
}

export default Brand
