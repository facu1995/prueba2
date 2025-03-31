import style from "./LoginForm.module.css"
import { Formik } from "formik"
import { loginValidationSchema } from "./LoginValidations"
import { Button, Spinner } from "../../../components"
import Input from "./components/LoginInput/LoginInput"
import { useTranslation } from "react-i18next"
import { Login } from "@interface/index"
import ZeusIcon from "./components/ZeusIcon/ZeusIcon"

interface Props {
  submit: (values: Login) => void
  loading: boolean
}

const initialValues = {
  username: "",
  password: ""
}

const LoginForm = ({ submit, loading }: Props) => {
  const { t } = useTranslation()

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={loginValidationSchema}
      validateOnBlur
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formBody}>
            <div className={style.logoContainer}>
              {loading ? <Spinner /> : <ZeusIcon className={style.logo} />}
            </div>
            <Input
              id="username"
              change={handleChange}
              blur={handleBlur}
              label={t("loginPage.label.username")}
              type="text"
              value={values.username}
            />

            <Input
              id="password"
              change={handleChange}
              blur={handleBlur}
              label={t("loginPage.label.password")}
              type="password"
              value={values.password}
            />
          </div>
          <Button  value="Log in" type="submit" />
        </form>
      )}
    </Formik>
  )
}

export default LoginForm
