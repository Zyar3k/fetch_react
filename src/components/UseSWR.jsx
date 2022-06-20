import { Suspense } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UseSWR = () => {
  const { data, error } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetcher,
    {
      suspense: true,
    }
  );

  if (error) {
    return <h1>There was an error</h1>;
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <section>
        <img src={data?.message} width={500} alt="" />
      </section>
    </Suspense>
  );
};

export default UseSWR;
