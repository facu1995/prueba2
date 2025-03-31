import { useGlobalToast } from "client/context/toastContext";
import { Button, Spinner, } from "../../components";
import useApi from "../../hooks/base/useApi";
import { userService } from "../../services/basic/user.service";
import { ToastType } from "@interface/index";

const SecondRouteContent = () => {
  const { showToast } = useGlobalToast()
  const { call: postUser, loading } = useApi(
    userService.getSearch,
    {
      autoCall: false,
      onSuccess: () => {
        showToast({
          text: "Success", type: ToastType.ERROR
        })
      },
      onError: () => {
        showToast({ text: "Success", type: ToastType.ERROR })
      }
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
      <section className="buttons">
        {
          (loading || loading2) && <Spinner />}
        <Button value={"Post"} onClick={() => postUser({ size: 4, page: 2 })} />
        <Button value={"get"} onClick={() => getUser()} />
        <p>Second Route</p>
      </section>
  )
}

export default SecondRouteContent
