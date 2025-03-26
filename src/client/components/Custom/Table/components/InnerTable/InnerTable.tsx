import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

import style from "./InnerTable.module.css"
import { Row, TableLoader } from ".."

interface Props {
  itemOpen: boolean
  colSpan: number
  name: string
  columns?: string[]
  loading?: boolean
  children: React.ReactNode
}

const InnerTable = ({ itemOpen, colSpan, name, columns = [], children, loading }: Props) => {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const { t } = useTranslation("viewPromo")

  useEffect(() => {
    if (itemOpen === false) {
      setIsLeaving(true)
      setTimeout(() => {
        setIsLeaving(false)
        setIsOpen(false)
      }, 300)
    } else {
      setIsLeaving(false)
      setIsOpen(true)
    }
  }, [itemOpen])

  if (!isOpen) {
    return null
  }

  return (
    <tr className={style["row-container"]}>
      <td colSpan={colSpan}>
        <div className={`${style["inner-table-container"]} ${isLeaving ? style.isLeaving : ""}`}>
          {loading ? (
            <TableLoader />
          ) : (
            <table className={style.table}>
              {columns.length !== 0 && (
                <thead>
                  <Row className={style.row}>
                    {columns.map((col, idx) => (
                      <th key={idx}>
                        <span>{t(`${name}.innerTable.${col}`)}</span>
                      </th>
                    ))}
                  </Row>
                </thead>
              )}
              <tbody className={style.body}>{children}</tbody>
            </table>
          )}
        </div>
      </td>
    </tr>
  )
}

export default InnerTable
