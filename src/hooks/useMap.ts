import { useEffect, useRef, useState } from "react";
import { getReverseGeo } from "./useSearchMap";

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");
  const markerRef = useRef<any | null>(null);

  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재 위치를 알 수 없어 기본 위치로 지정합니다.");
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: false,
      });
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map: mapRef.current,
      });
    }
  }, [myLocation]);

  useEffect(() => {
    mapRef.current?.addListener("click", (e) => {
      markerRef.current.setPosition(e.latlng);
      console.log(e.latlng);
      const coords = `${e.latlng.x},${e.latlng.y}`;
      getReverseGeo(coords).then((data) => {
        console.log(data.data[0], " seeee data");
      });
    });
  }, [myLocation]);

  return {
    myLocation,
  };
}

export default useMap;
