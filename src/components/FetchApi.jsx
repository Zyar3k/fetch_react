import { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((apiData) => {
        console.log(apiData);
        setData(apiData.message);
      });
  }, []);

  return (
    <section>
      <img src={data} width={500} alt="" />
    </section>
  );
};

export default FetchApi;
