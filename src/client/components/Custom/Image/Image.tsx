import { useState } from "react"

import style from "./Image.module.css"
import loaderImage from "./assets/image.png"

interface Props {
  src?: string
  alt?: string
  className?: string
}

const Image = ({ src, alt, className }: Props) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className={`${style.image} ${className}`}>
      {(loading || error) && (
        <img src={loaderImage} loading="lazy" draggable={false} className={style.loader} />
      )}
      <img
        src={src}
        alt={alt}
        draggable={false}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true)
          setLoading(false)
        }}
        className={loading || error ? style.hidden : style.loaded}
      />
    </div>
  )
}

export default Image
