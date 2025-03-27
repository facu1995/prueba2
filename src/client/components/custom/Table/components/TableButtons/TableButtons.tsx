import style from "./TableButtons.module.css"

import Cell from "../Cell/Cell"
import Assets from "./assets"

interface Props {
  // A logic has to be implemented to know in what order and what buttons to show.
  // A component like this is created to stop being dependent on the `filter`
  // tag to change the colors of the svg's
  trash?: () => void
  edit?: () => void
  className?: string
  children?: React.ReactNode
}

export const EditButton = ({ edit }: Pick<Props, "edit">) => {
  return edit ? (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        edit()
      }}
      className={style.button}
    >
      {Assets.edit}
    </button>
  ) : null
}

export const TrashButton = ({ trash }: Pick<Props, "trash">) => {
  return trash ? (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        trash()
      }}
      className={`${style.button} ${style.trash}`}
    >
      {Assets.trash}
    </button>
  ) : null
}

interface CustomButtonProp {
  icon?: JSX.Element
  className?: string
  onClick?: () => void
}

export const CustomButton = ({ className, icon, onClick }: CustomButtonProp) => {
  return (
    icon && (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onClick && onClick()
        }}
        className={`${style.button} ${className}`}
      >
        {icon}
      </button>
    )
  )
}

const TableButtons = ({ trash, edit, className, children }: Props) => {
  return (
    <Cell className={`${style.cell} ${className}`} withTooltip>
      {children ? (
        children
      ) : (
        <>
          <TrashButton trash={trash} />
          <EditButton edit={edit} />
        </>
      )}
    </Cell>
  )
}

export default TableButtons
