import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="hero min-h-screen" style={{ backgroundColor: "#AAC4FF" }}>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">어디 갈까?</h1>
          <p className="mb-5">
            극 P 인 당신을 위해, 어디갈지 모르겠을땐 어디갈까 물어보세요. 랜덤
            갓챠 여행계획 짜드립니다.
          </p>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "#EEF1FF", color: "black" }}
            onClick={() => router.push("/planning/train")}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
