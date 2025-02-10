import style from "./user.module.css"
import { useAppSelector } from "../../../../redux/hooks"

const DEFAULT =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"

const User = () => {
  const { userName, userMail, userPic } = useAppSelector((state) => state.user)

  return (
    <div className={style.user} data-testid="user">
      <>
        <div>
          <img src={userPic ? userPic : DEFAULT} alt="user-pic" />
        </div>
        <div className={style.text}>
          <h3>{userMail}</h3>
          <span>{userName}</span>
        </div>
      </>
    </div>
  )
}

export default User
