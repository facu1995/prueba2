import { useTranslation } from "react-i18next"

import { TableEmptyState } from "./components"
import useTable from "./hook/useTable"
import style from "./table.module.css"
import { Loader } from "../"
import { useEffect, useState } from "react"

interface TableCardHandlers {
  toggleSelect: (id: string) => void
  isSelected: (id: string) => boolean
  toggleSelectAll: () => void
  selectedCount: number
  totalCount: number
  allAreSelected: boolean
}

interface TableProps {
  page: string | Array<string>
  allIds: string[]
  selectedIds: Set<string>
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>
  children: (args: TableCardHandlers) => React.ReactNode
  total?: number
  loading?: boolean
  className?: string
  haveHeader?: boolean
  searchQuery?: string
  headerChild?: React.ReactNode
  extraEmpty?: {
    text?: boolean
    button?: boolean
    className?: string
    callback?: () => void
  }
}

const Table = (props: TableProps) => {
  const [formatedPage, setFormatedPage] = useState<string>("")

  const {
    page,
    total = 0,
    allIds,
    className,
    selectedIds,
    headerChild,
    loading = false,
    haveHeader = true,
    children,
    setSelectedIds
  } = props
  const { t } = useTranslation()

  const { totalCount, isSelected, toggleSelect, selectedCount, allAreSelected, toggleSelectAll } =
    useTable(total, allIds, selectedIds, setSelectedIds)

  const handlers: TableCardHandlers = {
    totalCount,
    isSelected,
    toggleSelect,
    selectedCount,
    allAreSelected,
    toggleSelectAll: () => toggleSelectAll(allIds)
  }

  useEffect(() => {
    setFormatedPage(Array.isArray(page) ? page.join(`-`) : page)
  }, [page])

  return (
    <div className={`${style.container} ${className}`}>
      {haveHeader && (
        <div className={style.content}>
          {total !== 0 && (
            <h3>
              {t(`${formatedPage}.table.head.quantity`)} ({loading ? " ... " : total})
            </h3>
          )}
          {/* <div className={`${style.selectedContainer} ${selectedCount > 1 ? style.reveal : ""}`}>
            <p>{t(`${formatedPage}.table.head.selected`)}</p>
            <div className={`${style.counter} ${animate ? style.animate : ""}`}>
              <span>{selectedCount}</span>
            </div>
          </div> */}
          {headerChild ? headerChild : null}
        </div>
      )}
      {loading ? (
        <Loader />
      ) : allIds.length !== 0 ? (
        <table className={style.table}>{children(handlers)}</table>
      ) : (
        <TableEmptyState {...props} />
      )}
    </div>
  )
}

export default Table
