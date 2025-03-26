import { DataGridEmptyState } from "./components"
import { Loader } from "../.."

import style from "./DataGrid.module.css"
import useDataGrid from "./hook/useDataGrid"

interface DataGridHandlers {
  toggleSelect: (id: string) => void
  isSelected: (id: string) => boolean
  toggleSelectAll: () => void
  allAreSelected: boolean
}

interface Props {
  allIds: Array<string>
  page: string | Array<string>
  selectedIds: Set<string>
  children: (args: DataGridHandlers) => React.ReactNode
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>

  loading?: boolean
  className?: string
  searchQuery?: string

  extraEmpty?: {
    button?: boolean
    text?: boolean
    callback?: () => void
  }
}

const DataGrid = (props: Props) => {
  const { allIds, className, loading = false, selectedIds, children, setSelectedIds } = props

  const { allAreSelected, isSelected, toggleSelect, toggleSelectAll } = useDataGrid(
    allIds,
    selectedIds,
    setSelectedIds
  )

  const handlers: DataGridHandlers = {
    allAreSelected,
    isSelected,
    toggleSelect,
    toggleSelectAll: () => toggleSelectAll(allIds)
  }

  return (
    <div className={`${style.container} ${className}`}>
      {loading ? (
        <Loader />
      ) : allIds.length !== 0 ? (
        <div className={style.grid}>{children(handlers)}</div>
      ) : (
        <DataGridEmptyState {...props} />
      )}
    </div>
  )
}

export default DataGrid
