import { useState, MouseEvent } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { setUserData } from "../../redux/slices/userSlice"
import { Button, Logo, Spinner } from "../../components"
import apiService from "../../config/API"
import { useTranslation } from "react-i18next"

const OTHER_USER = {
  userName: "Michi Miau",
  userMail: "meowmeow@gmail.com",
  userPic: "https://gifdb.com/images/high/cute-cat-typing-computer-working-tr4yvonsldac7mtz.gif"
}

const FirstRouteContent = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [apiResponse, setApiResponse] = useState<string>("")
  const dispatch = useAppDispatch()
  const {t} = useTranslation("firstRoute")

  const tryApi = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await apiService.get<any>("", {})
      setApiResponse(res)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const tryRedux = () => {
    dispatch(setUserData(OTHER_USER))
  }

  return (
    <>
      <Logo />
      <section className="buttons">
        <div>
        <Button label={t('buttons.api')} onClick={tryApi} />
          <Button label={t('buttons.redux')} onClick={tryRedux} />
        </div>
        <>{loading ? <Spinner /> : apiResponse ? <code> {apiResponse} </code> : <></>}</>
      </section>
    </>
  )
}

export default FirstRouteContent
