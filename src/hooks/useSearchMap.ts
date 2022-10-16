import axios from "axios";
export const getNaverMapSearch = async (keyword: string) => {
  const endPointUrl = `http://127.0.0.1:1111/naver/search?keyword=${encodeURIComponent(
    keyword
  )}`;
  const result = await axios.get(endPointUrl);
  return result;
};
