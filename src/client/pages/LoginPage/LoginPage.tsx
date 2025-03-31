import style from "./LoginPage.module.css"
import useLoginSimple from "./hooks/useLoginSimple"
import LoginForm from "./LoginForm/LoginForm"
import { useEffect } from "react"
import { useAppSelector } from "../../redux/hooks"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

export const LoginPage = () => {
  const { tryLogin, loading } = useLoginSimple()
  const token = useAppSelector((state) => state.user.token)
  const session = JSON.parse(Cookies.get("user") as string)
  const navigate = useNavigate()

  useEffect(() => {
    if (token || session?.token) {
      navigate("/")
    }
  }, [token, session])

  return (
    <>
      <div className={style.container}>
        <div className={style.form}>
          <LoginForm submit={tryLogin} loading={loading} />
        </div>
      </div>
    </>
  )
}

export default LoginPage
