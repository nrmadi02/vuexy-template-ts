import {api} from "../../utils/api";

const ExamplePage = () => {
  const { data } = api.example.hello.useQuery({
    text: "Ahmadi"
  })

  return (
    <div>
      <p>{data?.greeting}</p>
    </div>
  )
}

export  default  ExamplePage
