import style from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={style.preloader}>
      <div className={style.loader}></div>
    </div>
  )
}

export default Loader
