import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { setTokenInterceptor } from "@services/utils/API"
import Cookies from "js-cookie"

interface User {
  username: string | null
  token: string | null
}

const EmptyState: User = {
  username: null,
  token: null
}

const handleInitialState = (): User => {
  const cookieData = Cookies.get("user")
  if (!cookieData) {
    return EmptyState
  }
  try {
    const sessionData = JSON.parse(cookieData)
    setTokenInterceptor(sessionData?.token)
    return { username: sessionData?.username || null, token: sessionData?.token || null }
  } catch (error) {
    console.error("Failed to parse user cookie:", error)
    return EmptyState
  }
}

const initialState: User = Cookies.get("user") ? handleInitialState() : EmptyState

const persistSession = async (session: User) => {
  Cookies.set("user", JSON.stringify(session));
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<User>) {
      const { username, token } = action.payload
      state.username = username
      state.token = token
      persistSession(action.payload)
      setTokenInterceptor(token!)
    },
    resetUserData: () => {
      persistSession(EmptyState) 
      return EmptyState
    }
  }
})

export const { setUserData, resetUserData } = userSlice.actions

export default userSlice.reducer
