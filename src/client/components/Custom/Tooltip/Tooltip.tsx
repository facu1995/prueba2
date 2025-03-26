import style from "./tooltip.module.css"
import { CSSProperties, ReactNode, RefObject, useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"

interface Props {
  children: ReactNode
  targetRef: RefObject<HTMLElement>
  isTooltipVisible: boolean
  styles?: CSSProperties
  className?: string
  positionCallback?: (tooltipRect: DOMRect, targetRect: DOMRect) => { top: number; left: number }
  id?: string
}

export const Tooltip = ({
  children,
  targetRef,
  isTooltipVisible,
  styles = {},
  className = "",
  positionCallback,
  id
}: Props) => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const defaultId = useId()
  const portalTarget = document.getElementById("tooltip-root")

  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect()
      const tooltipRect = tooltipRef.current?.getBoundingClientRect()

      if (tooltipRect?.height && tooltipRect.width) {
        setPosition(
          positionCallback
            ? positionCallback(tooltipRect, rect)
            : {
                top: rect.top + window.scrollY - tooltipRect.height - 10,
                left: rect.left + rect.width / 2 - tooltipRect.width / 2
              }
        )
      }
    }
  }, [targetRef, isTooltipVisible])

  return createPortal(
    <div
      ref={tooltipRef}
      className={`${style.dynamicTooltip} ${className} ${isTooltipVisible ? style.visible : ""}`}
      style={{
        ...styles,
        top: styles.top ?? `${position.top || "-9999"}px`,
        left: styles.left ??`${position.left || "-9999"}px`,
        transform: styles.transform ??`translate(0, 0)`
      }}
      id={id || defaultId}
      onClick={(e) => {e.stopPropagation()}}>
      {children}
    </div>,
    portalTarget!
  )
}

export default Tooltip
