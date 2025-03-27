import { Button, Spinner } from "../../components";
import useApi from "../../hooks/base/useApi";
import { userService } from "../../services/basic/user.service";

const SecondRouteContent = () => {

  const { call: postUser, loading } = useApi(
    userService.getSearch,
    {
      autoCall: false,
    }
  );

  const { call: getUser, loading: loading2
  } = useApi(
    userService.get,
    {
      autoCall: false,
    }
  );

  return (
    <>
      <section className="buttons">
        {

          (loading || loading2) && <Spinner />}

        <Button value={"Post"} onClick={() => postUser({ size: 4, page: 2 })} />
        <Button value={"get"} onClick={() => getUser()} />
        <code>Second Route</code>
      </section>
    </>
  )
}

export default SecondRouteContent
