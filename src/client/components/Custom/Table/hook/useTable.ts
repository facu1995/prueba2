import { useState, useEffect } from "react"

const useTable = (
  total: number,
  allIds: Array<string>,
  selectedIds: Set<string>,
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>
) => {
  const [allAreSelected, setAllAreSelected] = useState<boolean>(false)
  const [animate, setAnimate] = useState<boolean>(false)

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const newSelectedIds = new Set(prev)
      if (newSelectedIds.has(id)) {
        newSelectedIds.delete(id)
      } else {
        newSelectedIds.add(id)
      }
      return newSelectedIds
    })
  }

  const isSelected = (id: string) => selectedIds.has(id)

  const toggleSelectAll = (allIds: string[]) => {
    setSelectedIds((prev) => {
      const newSelectedIds = new Set<string>(allIds)
      const isAnyIdSelected = Array.from(prev).some((id) => newSelectedIds.has(id))
      const isAllIdSelected = Array.from(newSelectedIds).every((id) => prev.has(id))

      if (isAnyIdSelected) {
        if (isAllIdSelected) {
          const updatedSelectedIds = new Set<string>(prev)
          allIds.forEach((id) => updatedSelectedIds.delete(id))
          return updatedSelectedIds
        } else {
          const newSelection = new Set([...prev, ...allIds])
          return newSelection
        }
      } else {
        const newSelection = new Set([...prev, ...allIds])
        return newSelection
      }
    })
  }

  useEffect(() => {
    if (selectedIds.size > 0) {
      setAnimate(true)
      const timeout = setTimeout(() => setAnimate(false), 150)
      return () => clearTimeout(timeout)
    }
  }, [selectedIds.size])

  useEffect(() => {
    setAllAreSelected(allIds.length > 0 && allIds.every((item) => selectedIds.has(item)))
  }, [allIds, selectedIds])

  return {
    animate,
    isSelected,
    toggleSelect,
    allAreSelected,
    toggleSelectAll,
    totalCount: total,
    selectedCount: selectedIds.size
  }
}

export default useTable
