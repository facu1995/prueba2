export const constantsENV = {
  API_BASE_URL: import.meta.env.VITE_EXPRESS || "http://localhost:8080/api",
  ENDPOINT: {
    login: import.meta.env.VITE_ENDPOINT_LOGIN || "login",
    auth: import.meta.env.VITE_ENDPOINT_AUTH || 'auth',
    // ADD CONSTANTS
  }
}
