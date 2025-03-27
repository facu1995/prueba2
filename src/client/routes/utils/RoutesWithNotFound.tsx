import { Navigate, Route, Routes } from "react-router-dom"

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      <Route path={"*"} element={<Navigate replace to={"/"} />} />
      {children}
    </Routes>
  )
}

export default RoutesWithNotFound
