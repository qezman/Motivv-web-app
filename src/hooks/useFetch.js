import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../constants";

const useFetch = (route, options) => {
  // const [error, setError] = useState(null)
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${URL}/${route}`);
        setResponse(res);
        setLoading(false);
      } catch (err) {
        // setError(err)
        setLoading(false);
      }
    };
    fetchData();
  }, [route]);

  return { response, loading };
};

export default useFetch;
