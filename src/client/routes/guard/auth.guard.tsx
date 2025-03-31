import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"
import ROUTES from "@routes/utils/constantes"

interface Props {
  children: React.ReactNode
}
const AuthGuard = ({ children }: Props) => {
  const { username, token } = useAppSelector((state) => state.user)

  return username && token
    ? <>{children}</>
    : <Navigate replace to={ROUTES.login} />
}

export default AuthGuard
