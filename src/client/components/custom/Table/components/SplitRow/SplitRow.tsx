import { Children } from "react"

import style from "./SplitRow.module.css"
import Assets from "./assets"

interface Props {
  children: React.ReactNode
  splitedChildren?: React.ReactNode
  id?: string
  value?: boolean
  mathed?: boolean
  className?: string
  onClickRow?: () => void
  onClickMatching?: () => void
}

const SplitRow = ({
  children,
  splitedChildren,
  id,
  className,
  value = false,
  mathed = false,
  onClickRow,
  onClickMatching
}: Props) => {
  return (
    <tr className={style["first-row"]} id={id} onClick={onClickRow} data-id={id}>
      <td colSpan={2 + Children.count(children) + Children.count(splitedChildren)}>
        <div className={style.container}>
          <table className={style["inner-table"]}>
            <tbody>
              <tr className={className}>
                <td colSpan={Children.count(children) + 1}>
                  <div className={style.container}>
                    <table className={style["inner-table"]}>
                      <tbody className={`${style.body} ${style[mathed ? "mathed" : ""]}`}>
                        <tr className={`${style["row-1"]} ${value ? style.selected : ""}`}>
                          {children}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
                <td colSpan={Children.count(splitedChildren) + 1}>
                  <div className={style.container}>
                    {mathed && (
                      <div
                        className={style.matching}
                        role="button"
                        tabIndex={0}
                        onClick={onClickMatching}
                      >
                        <button className={style.button}>{Assets.match}</button>
                      </div>
                    )}
                    <table className={style["inner-table"]}>
                      <tbody className={`${style["body-2"]} ${style[mathed ? "mathed" : ""]}`}>
                        <tr className={`${style["row-2"]} ${value ? style.selected : ""}`}>
                          {splitedChildren}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  )
}

export default SplitRow
