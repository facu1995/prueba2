import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"

const AuthGuard = () => {
  const { userName } = useAppSelector((state) => state.user)

  return userName !== "" ? <Outlet /> : <Navigate replace to={"/"} />
}

export default AuthGuard
