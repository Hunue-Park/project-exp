import styled from "styled-components";
import useMap from "../../../hooks/useMap";
import { useQuery } from "react-query";
import { getNaverMapSearch } from "../../../hooks/useSearchMap";
import { useEffect } from "react";

const MapBox = styled.div`
  width: 100%;
  height: 400px;
`;

const Map = () => {
  useMap();
  // const { isLoading, isError, data, error } = useQuery("NaverMapSearch", () =>
  //   getNaverMapSearch("악어떡볶이")
  // );

  useEffect(() => {
    const result = getNaverMapSearch("왕십리역 맛집").then((data) => {
      console.log(data, "seeee");
    });
  }, []);
  return <MapBox id="map"></MapBox>;
};

export default Map;
