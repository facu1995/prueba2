import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

import style from "./DataGridEmptyState.module.css"
import { Button } from "../../../../base/Button"
import svg, { plus } from "./Assets"

interface Props {
  page: string | Array<string>
  searchQuery?: string
  extraEmpty?: {
    button?: boolean
    text?: boolean
    callback?: () => void
  }
}

const DataGridEmptyState = ({ page, searchQuery, extraEmpty }: Props) => {
  const [formatedPage, setFormatedPage] = useState<string>("")
  const { t } = useTranslation()

  useEffect(() => {
    setFormatedPage(Array.isArray(page) ? page.join("-") : page)
  }, [page])

  return (
    <div className={`${style.container}`}>
      <div className={style.content}>
        <div className={style.svg}>
          <img draggable={false} src={svg[formatedPage] ?? svg["search"]} />
        </div>
        {extraEmpty && (
          <>
            {extraEmpty && (
              <>
                {extraEmpty.text && (
                  <p className={style.text}>
                    {t(
                      `${Array.isArray(page) ? page.join(".") : page}.table.empty.${
                        searchQuery !== "" ? "search" : "text"
                      }`
                    )}
                  </p>
                )}
                {extraEmpty.button && (
                  <Button
                    icon={plus}
                    value={t(`${formatedPage}.table.empty.button`)}
                    onClick={(e) => {
                      e.stopPropagation()
                      extraEmpty.callback?.()
                    }}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default DataGridEmptyState
