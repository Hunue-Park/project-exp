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
  return <MapBox id="map"></MapBox>;
};

export default Map;
