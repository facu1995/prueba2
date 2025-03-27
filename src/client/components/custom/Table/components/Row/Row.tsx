import { TableCheckbox } from ".."
import style from "./Row.module.css"

interface Props {
  children: React.ReactNode
  head?: boolean
  withCheckboxes?: boolean
  withArrow?: boolean
  id?: string
  value?: boolean
  className?: string
  styles?: React.CSSProperties
  onChange?: () => void
  onClickRow?: () => void
  onClickArrow?: () => void
}

const Row = ({
  id,
  value,
  styles,
  children,
  withArrow,
  className,
  head = false,
  withCheckboxes,
  onChange,
  onClickRow,
  onClickArrow
}: Props) => {
  return (
    <tr
      className={`${style.row} ${className || ""} ${!head && value ? style.selected : ""}`}
      style={styles}
      onClick={onClickRow}
      data-id={id}
    >
      {withCheckboxes ? (
        <td
          className={style.container}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
          }}
        >
          <TableCheckbox
            value={value!}
            onChange={onChange!}
            id={`${
              !withArrow ? "table-head-row-checkbox-" + id! : "table-body-row-checkbox-" + id!
            }`}
          />
        </td>
      ) : null}
      {children}
      {withArrow ? (
        <td>
          <div className={style.arrowContainer}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                if (onClickArrow) {
                  onClickArrow()
                }
              }}
              id={`table-head-row-button-arrow-${id!}`}
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.59L4.94467 6L0 1.41L1.52227 0L8 6L1.52227 12L0 10.59Z"
                  fill="#989EBA"
                />
              </svg>
            </button>
          </div>
        </td>
      ) : (
        <td className={style.withoutArrow}></td>
      )}
    </tr>
  )
}

export default Row
