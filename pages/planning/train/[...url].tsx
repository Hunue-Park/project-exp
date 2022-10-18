import { useRouter } from "next/router";
import { trainResponse } from "../train.model";
const TrainDepTablePage = () => {
  const trains = trainResponse;
  const router = useRouter();
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
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>도착역</th>
              <th>출발 시간</th>
              <th>열차 종류</th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train, idx) => (
              <tr
                key={train.train_no}
                onClick={() => {
                  if (confirm("이 열차로 결정하시나요?")) {
                    router.push("/planning/items");
                  }
                }}
              >
                <th>{idx + 1}</th>
                <td>{train.arr_name}</td>
                <td>{train.dep_time}</td>
                <td>{train.train_type_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainDepTablePage;
