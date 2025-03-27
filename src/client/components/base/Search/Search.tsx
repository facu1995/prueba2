import { useDebounce } from "../../hooks"
import { Input } from ".."

import style from "./Search.module.css"
import Assets from "./assets"
import { useEffect, useState } from "react"

export interface Props {
  name: string
  query?: string
  className?: string
  placeholder?: string
  setQuery?: (value: string) => void
}

const Search = ({ name, query = "", placeholder, className, setQuery }: Props) => {
  const [queryValue, setQueryValue] = useState<string>(query || "")
  const debounce = useDebounce()

  const debouncedSearch = debounce(setQuery, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value)
    setQueryValue(e.target.value)
  }

  useEffect(() => {
    setQueryValue(query)
  }, [query])

  return (
    <div className={`${style.container} ${className}`}>
      <Input
        name={name}
        value={queryValue}
        icon={Assets.lupe}
        onChange={handleChange}
        className={style.input}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Search
