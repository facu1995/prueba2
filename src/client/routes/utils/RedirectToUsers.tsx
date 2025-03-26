import { Navigate } from "react-router-dom"

const RedirectToUsers = () => {
  return <Navigate replace to="/admin/configuration/users" />
}

export default RedirectToUsers
