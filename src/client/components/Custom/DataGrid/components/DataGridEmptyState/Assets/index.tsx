import collections from "./collections.svg"
import customers from "./customers.svg"
import catalogs from "./catalogs.svg"
import visits from "./visits.svg"
import orders from "./orders.svg"
import search from "./search.svg"
import users from "./users.svg"

const svg = {
  orders,
  catalogs,
  customers,
  visits,
  collections,
  search,
  users
}

export const plus = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 7.75H1C0.59 7.75 0.25 7.41 0.25 7C0.25 6.59 0.59 6.25 1 6.25H13C13.41 6.25 13.75 6.59 13.75 7C13.75 7.41 13.41 7.75 13 7.75Z"
      fill="#292D32"
    />
    <path
      d="M7 13.75C6.59 13.75 6.25 13.41 6.25 13V1C6.25 0.59 6.59 0.25 7 0.25C7.41 0.25 7.75 0.59 7.75 1V13C7.75 13.41 7.41 13.75 7 13.75Z"
      fill="#292D32"
    />
  </svg>
)

export default svg as { [key: string]: string }
