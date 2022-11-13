import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const useFetch = (strDrink) => {
  const [drink, setDrink] = useState({});
  const [drinky, setDrinky] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDat = async () => {
    try {
      const { data } = await axios(`${url}${strDrink}`);
      const { drinks } = data;
      if (!drinks) {
        setError(true);
        setLoading(false);
        return setDrinky([]);
      }
      setError(false);
      setLoading(false);
      setDrinky(drinks);
      setDrink(drinks[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDat();
  }, []);

  return { fetchDat, drink, drinky, error, loading };
};

export default useFetch;
