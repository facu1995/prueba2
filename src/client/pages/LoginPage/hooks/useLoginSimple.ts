import { useNavigate } from "react-router-dom"
import { setUserData, useAppDispatch } from "client/redux"
import { useApi } from "@hooks/index"
import { authService, loginService } from "@services/index"
import { Auth, Login, ToastType } from "@interface/index"
import { ROUTES } from "@routes/index"
import { useGlobalToast } from "@context/index"

const useLoginSimple = () => {
  const { showToast } = useGlobalToast()


  const {
    call, loading, error: loginError,
  } = useApi<Login, Login>(loginService.post,
    { autoCall: false, onSuccess: handleLoginSuccess, onError: handleLoginError })

  const {
    call: requestToken,
    error: tokenError,
    loading: tokenLoading
  } = useApi(authService.post
    , {
      autoCall: false,
      onSuccess: handleTokenSuccess,
      onError: handleTokenError
    })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleLoginSuccess(data: Login) {
    requestToken({} as any)
  }

  function handleTokenSuccess(data: Auth) {
    console.log('response', data);
    dispatch(setUserData({ username: "zues", token: data.access_token }))
    navigate(ROUTES.admin)
  }

  function handleLoginError(/* error: string */) {
    showToast({
      text: "Login incorrecto. Verifique que su usuario y contraseña sean correctos", type: ToastType.ERROR
    })
  }

  function handleTokenError(/* error: string */) {
    showToast({
      text: "Error en el servicio de autenticación. Intente nuevamente", type: ToastType.ERROR
    })

  }

  function tryLogin(values: Login) {
    console.log('values', values);
    call(
      { username: values.username, password: values.password }, { url: '/login' }
    )
  }

  return {
    error: loginError || tokenError,
    loading: loading || tokenLoading,
    tryLogin
  }
}

export default useLoginSimple
