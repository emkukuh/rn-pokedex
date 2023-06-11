import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    pokemons(first: 4) {
      image
      classification
    }
  }
`;

const useFetch = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    try {
      const { data, loading } = useQuery(QUERY);
      setPokemons(data);
    } catch (error) {
      console.log("error ======");
      console.log(error);
    }
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { pokemons };
};

export default useFetch;
