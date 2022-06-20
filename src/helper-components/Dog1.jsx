import { useQuery } from "react-query";
import { getDog } from "../components/Fetchers";

const Dog1 = () => {
  const { data } = useQuery("dog", getDog());

  return <img src={data?.url} width={200} alt="" />;
};

export default Dog1;
