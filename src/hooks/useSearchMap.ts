import axios from "axios";
export const getNaverMapSearch = async (keyword: string) => {
  const endPointUrl = `http://127.0.0.1:1111/naver/search?keyword=${encodeURIComponent(
    keyword
  )}`;
  const result = await axios.get(endPointUrl);
  return result;
};

export const getReverseGeo = async (coords: string, category: string) => {
  const endPointUrl = `http://127.0.0.1:1111/naver/reverse_geo?coords=${coords}&category=${category}`;
  const result = await axios.get(endPointUrl);
  return result;
};
