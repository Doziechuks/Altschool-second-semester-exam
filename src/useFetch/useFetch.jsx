import { useEffect, useState } from "react";
import { axiosRequest } from "../helpers/axiosRequest";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosRequest.get(url);
        if (data) {
          setData(data);
        }
      } catch (error) {
        if (error.response.status === 404) {
          navigate("/*");
        } else {
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepo();
    return () => {};
  }, [navigate, url]);

  return { data, error, isLoading };
};

export default useFetch;
