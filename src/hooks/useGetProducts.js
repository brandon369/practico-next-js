import {useEffect, useState} from "react";
import axios from "axios";

const useGetProducts = (API) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    const response = await axios(API)
    setProducts(response.data)
    setIsLoading(false)
  };

  useEffect( () => {
    fetchApi()

  }, [API]);

  return [products, isLoading]

}

export default useGetProducts
