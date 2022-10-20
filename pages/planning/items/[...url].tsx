import { useRouter } from "next/router";
import Map from "../../../src/components/molecule/Map/Map";
import { useState } from "react";
import { getReverseGeo } from "../../../src/hooks/useSearchMap";
import { useAtom } from "jotai";
import { updateRandomPlace } from "../../../src/stores/item";

const ItemDetailPage = () => {
  const router = useRouter();
  const [coords, setCoords] = useState("");
  const [, setRandomPlace] = useAtom(updateRandomPlace);
  const submitCoords = () => {
    const category = router.query.url[0];
    getReverseGeo(coords, category).then((data) => {
      setRandomPlace(data.data);
      router.push("/");
    });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div
            className="btn btn-ghost normal-case text-xl"
            onClick={() => router.push("/")}
          >
            Back
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Map setCoords={setCoords} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "24px",
        }}
      >
        <button
          className="btn btn-outline"
          onClick={() => {
            if (confirm("이곳을 탐색기준으로 설정할까요?")) {
              submitCoords();
            }
          }}
        >
          결정하기
        </button>
      </div>
    </div>
  );
};

export default ItemDetailPage;
