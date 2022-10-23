import { useAtom } from "jotai";
import { updateRandomPlace } from "../../../src/stores/item";
import { useRouter } from "next/router";
import { useState } from "react";

const ResultDetailPage = () => {
  const router = useRouter();
  const [randomPlace] = useAtom(updateRandomPlace);
  const [imageSrc, setImageSrc] = useState("/images/treasure_static.jpg");
  const [cardType, setCardType] = useState("treasure");
  const delayedSelect = () => {
    setTimeout(() => {
      setCardType("place");
    }, 1500);
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
      {cardType === "treasure" ? (
        <div className="card w-96 glass">
          <figure>
            <img src={imageSrc} alt="treasure" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">결과 보기</h2>
            <p>어떤 곳을 가게 될까요?</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setImageSrc("/images/treasure_dynamic.gif");
                  delayedSelect();
                }}
              >
                확인해보세요!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">출발 하시죠!</h2>
            <p>{randomPlace.roadAddress}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  router.push("/planning/items");
                }}
              >
                Accept
              </button>
              <button className="btn btn-ghost">Deny</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultDetailPage;
