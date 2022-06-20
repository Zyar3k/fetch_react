import { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      setData(res.data.message);
    });
  }, []);

  return (
    <section>
      <img src={data} width={500} alt="" />
    </section>
  );
};

export default Axios;
