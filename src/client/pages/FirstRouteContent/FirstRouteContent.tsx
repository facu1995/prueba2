
import style from "./FirstRouteContent.module.css"
import { useTranslation } from "react-i18next"
import { Button, Spinner } from "@components/index"
import { ResponseSearch, TestContentResponse, TestParamSearch } from "@interface/index"
import { useApi } from "@hooks/index"
import { testService } from "@services/index"
import { DefaultLayout } from "@layouts/DefaultLayout"


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
  const { t } = useTranslation("firstRoute")

  const { data, loading,call } = useApi( testService.get, {
    initialParams: { params: { size: 2 } },
  });


  const { call: postExample,loading:loading1 } = useApi<ResponseSearch<TestContentResponse>, TestParamSearch>(
    testService.post,
    {
      autoCall: false,
    }
  );


  const { call: callSearch, data: ASD, loading:loading2 } = useApi<ResponseSearch<TestContentResponse>, TestParamSearch>(
    testService.getSearch,
    {
      autoCall: false,
    }
  );

  return (
  <DefaultLayout> 
      <section className={style.section}>
        <div>
        <Button value={t('buttons.api')} onClick={() => call({ params: { size: 4 } })} />
          <Button value={"Post"} onClick={() => postExample(json, { params: { size: 6 } })} />
          <Button value={"callSearch"} onClick={() => callSearch(json2)} /> 
          <p>{
          (loading||loading1||loading2) && <Spinner/>}</p>
          {/* <p>{datasearch && JSON.stringify(datasearch?.content)}</p> */}
        </div>

      </section>
    </DefaultLayout> 
  )
}

export default FirstRouteContent
