import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Item } from "./components"
import style from "./Nav.module.css"
import Assets from "./assets"
import { Brand } from "../Brand"
import { resetUser } from "../../../redux/slices/userSlice"
import { routes } from "../../../routes"

const Nav = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  const [linkOpen, setLinkOpen] = useState<string | undefined>()
  const [isOpen, setLocalIsOpen] = useState(() => {
    return sessionStorage.getItem("navIsOpen") === "true"
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const adminRoutes = routes.find(({ path }) => path === "/admin")?.children || []

  useEffect(() => {
    sessionStorage.setItem("navIsOpen", String(isOpen))
    setIsOpen(isOpen)
  }, [isOpen, setIsOpen])

  const logOut = () => {
    dispatch(resetUser())
  }

  const goToHome = () => {
    navigate("/admin", { replace: true })
  }

  const handleArrowClick = () => {
    const newState = !isOpen
    if (linkOpen !== undefined) {
      setLinkOpen(undefined)
      setTimeout(() => {
        setLocalIsOpen(newState)
      }, 350)
    } else {
      setLocalIsOpen(newState)
    }
  }

  const closeNav = () => {
    if (isOpen) {
      handleArrowClick()
    }

    setLinkOpen(undefined)
  }

  const handleClick = (path: string) => {
    setLinkOpen(linkOpen === path ? "" : path)
  }

  return (
    <nav className={`${style.nav} ${style[isOpen ? "openNav" : "closeNav"]}`}>
      <div className={style.navHeader}>
        <div className={style.brandContainer}>
          <Brand
            className={style.brand}
            logo="isologotipo"
            text={false}
            onClick={goToHome}
            customColor="#943489"
          />
        </div>
        <div
          className={`${style.svgContainer} ${isOpen ? style.svgRotated : ""}`}
          onClick={handleArrowClick}
        >
          {Assets.arrow}
        </div>
      </div>

      <ul className={style.list}>
        {adminRoutes.map((route) => (
          <Item
            {...route}
            key={route.path}
            navOpen={isOpen}
            isOpen={linkOpen === route.path}
            onClick={() => handleClick(route.path)}
            closeNav={closeNav}
          />
        ))}
        <Item
          path={"/"}
          name={"Salir"}
          onClick={logOut}
          className={style.logOut}
          isOpen={isOpen}
          icon={Assets.logOut}
        />
      </ul>
    </nav>
  )
}

export default Nav
