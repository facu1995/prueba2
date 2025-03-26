import { useAppDispatch } from "../../redux/hooks"
import { setUser } from "../../redux/slices/userSlice"
import { Button, Spinner } from "../../components"
import { useTranslation } from "react-i18next"
import useApi from "../../hooks/useApi"
import { DefaultLayout } from "../../layouts"
import style from "./FirstRouteContent.module.css"
import { TestContentResponse, TestParamSearch } from '../../@types/services/test.model';
import { ParamSearch, ResponseSearch } from "../../@types/services/BaseService.model"
import { testService } from "../../services/test.service"
import BasicService from "../../services/BasicService"

interface User {
  id: number;
  name: string;
}

interface CreateUserPayload {
  name: string;
}

const userService = new BasicService<User, CreateUserPayload,ParamSearch>("/users");
const json2: TestParamSearch = {
  page: 0,
  size: 100,
  servers: 10,
  tenants: 1,
  usersType: 8
}

const json: TestParamSearch = {
  page: 10,
  size: 50,
  servers: 10,
  tenants: 1,
  usersType: 8
}
const FirstRouteContent = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation("firstRoute")

  const { data, loading, call } = useApi( testService.get, {
    autoCall: false,
    initialParams: { params: { size: 2 } },
  });


  const { call: postExample,loading:loading1,data:data3 } = useApi<ResponseSearch<TestContentResponse>, TestParamSearch>(
    testService.post,
    {
      autoCall: false,
    }
  );

  const { call: postUser } = useApi(
    userService.post,
    {
      autoCall: false,
    }
  );

  const { call: getUser } = useApi(
    userService.get,
    {
      autoCall: false,
    }
  );

  const { call: callSearch, data: datasearch, loading:loading2 } = useApi<ResponseSearch<TestContentResponse>, TestParamSearch>(
    testService.getSearch,
    {
      autoCall: false,
    }
  );

  return (
/*     <DefaultLayout> */
      <section className={style.section}>
        <div>
        <Button value={"Post"} onClick={() => postUser({ name: "John Doe" })} />
        <Button value={"get"} onClick={() => getUser()} />

         {/*  <Button value={t('buttons.api')} onClick={() => call({ params: { size: 4 } })} />
          <Button value={"Post"} onClick={() => postExample(json, { params: { size: 6 } })} />
          <Button value={"callSearch"} onClick={() => callSearch(json2)} /> */}

          <p>{
          (loading||loading1||loading2) && <Spinner/>}</p>
          {/* <p>{datasearch && JSON.stringify(datasearch?.content)}</p> */}
          <p>{datasearch && JSON.stringify(datasearch?.content)}</p>
        </div>

      </section>
/*     </DefaultLayout> */
  )
}

export default FirstRouteContent
