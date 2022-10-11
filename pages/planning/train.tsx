import { useRouter } from "next/router";

const Train = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          height: "calc(100vh - 64px)",
        }}
      >
        <div style={{ marginBottom: "12px" }}>지금 있는 역이 어디신가요?</div>
        <select className="select select-info w-full max-w-xs">
          <option>서울역</option>
          <option>강릉역</option>
          <option>부산역</option>
          <option>광주 송정역</option>
        </select>
      </div>
    </div>
  );
};

export default Train;
