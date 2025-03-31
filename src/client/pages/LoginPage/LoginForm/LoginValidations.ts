import * as Yup from "yup"

export const loginValidationSchema = Yup.object({
  username: Yup.string().typeError("Ingrese un nombre de usuario válido"),
  password: Yup.string().typeError("Ingrese su contraseña")
})
