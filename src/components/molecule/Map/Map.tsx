import styled from "styled-components";
import useMap from "../../../hooks/useMap";

const MapBox = styled.div`
  width: 400px;
  height: 400px;
`;

const Map = () => {
  useMap();
  return <MapBox id="map"></MapBox>;
};

export default Map;
