import { LazyExoticComponent, Suspense } from "react"
import Spinner from "../../custom/Spinner/Spinner"

interface Props {
  component: LazyExoticComponent<() => JSX.Element>
}

const LazyLoader = ({ component: Component }: Props) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Component />
    </Suspense>
  )
}

export default LazyLoader
