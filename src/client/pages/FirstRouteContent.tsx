import { useAppDispatch } from "../redux/hooks"
import { setUserData } from "../redux/slices/userSlice"
import { Button, Logo, Spinner } from "../components"
import { useTranslation } from "react-i18next"
import useApi from "../hooks/useApi"
import { getTest, PostTest } from "../services/test.service"

const OTHER_USER = {
  userName: "Michi Miau",
  userMail: "meowmeow@gmail.com",
  userPic: "https://gifdb.com/images/high/cute-cat-typing-computer-working-tr4yvonsldac7mtz.gif"
}

export interface Example {
  id: number;
  person: number;
}

const FirstRouteContent = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation("firstRoute")
  const { data, loading, call } = useApi(getTest)

  const tryRedux = () => {
    dispatch(setUserData(OTHER_USER))
  }

  const { call: postExample } = useApi(PostTest, {
    autoCall: false,
    onSuccess: onSucess
  })

  function onSucess(data: string) {
    console.log("Success", data)
  }
  const json = {
    id: 1,
    person: 2
  }

  return (
    <>
      <Logo />
      <section className="buttons">
        <div>
          <Button label={t('buttons.api')} onClick={() => call()} />
          <Button label={"Post"} onClick={() => postExample(json)} />
          <Button label={t('buttons.redux')} onClick={tryRedux} />
        </div>
        <>{loading ? <Spinner /> : data ? <code> {data} </code> : null}</>
      </section>
    </>
  )
}

export default FirstRouteContent
