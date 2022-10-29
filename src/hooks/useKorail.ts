import axios from "axios";
import { useQuery } from "react-query";
import { useEffect } from "react";

export const getKorails = async (depStation) => {
  const endPoint = `http://127.0.0.1:1111/korail/get?dep_station=${depStation}`;
  const data = await axios.get(endPoint);
  return data;
};

export const useKorail = (depStation) => {
  const result = useQuery(["getKorail"], async () => {
    const endPoint = `http://127.0.0.1:1111/korail/get?dep_station=${depStation}`;
    const data = await axios.get(endPoint);
    return data;
  });
  return result;
};
