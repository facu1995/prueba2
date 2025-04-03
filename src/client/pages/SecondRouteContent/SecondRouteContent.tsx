import { useGlobalToast } from "client/context/toastContext";
import { Button, Spinner, } from "../../components";
import useApi from "../../hooks/base/useApi";
import { userService } from "../../services/basic/user.service";
import { ToastType } from "@interface/index";

const SecondRouteContent = () => {
  const { showToast } = useGlobalToast()
  const { call: getsearch, loading } = useApi(
    userService.getSearch,
    {
      autoCall: false,
      onSuccess: () => {
        showToast({
          text: "Success", type: ToastType.SUCCESS
        })
      },
      onError: () => {
        showToast({ text: "Error", type: ToastType.ERROR })
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

  const { call: postUser, loading: loading3
  } = useApi(
    userService.postBatch,
    {
      autoCall: false,
    }
  );

  return (
    <section className="buttons">
      {
        (loading || loading2) && <Spinner />}
      <Button value={"getsearch"} onClick={() => getsearch({ size: 4, page: 2 })} />
      <Button value={"Post"} onClick={() => postUser([{name:"facu"},{name:"javi"}])} />
      <Button
        value={"get"}
        onClick={() => {
          console.log("ruta", userService.getEndpoint().concat("/2"))
          getUser({ url: `${userService.getEndpoint()}/2`, params: { hola: 7 } })
        }
        }
      />        <p>Second Route</p>
    </section>
  )
}

export default SecondRouteContent
