import { version } from "../../../../package.json"
import { DefaultLayout } from "../../layouts"

import versionSVG from "./Assets/version.svg"
import style from "./Version.module.css"

const Version = () => {
  return (
      <section className={style.section}>
        <article className={style.article}>
          <div className={style.image}>
            <img loading="lazy" src={versionSVG} alt="version-svg" draggable={false} />
          </div>
          <div className={style.footer}>
            <h2 className={style.title}>Versión:</h2>
            <p className={style.text}>{version}</p>
          </div>
        </article>
      </section>
  )
}

export default Version
