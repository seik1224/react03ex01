import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingProgressState } from "../store";

const Loading = () => {
  const [progress, setProgress] = useRecoilState(loadingProgressState);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          // 권장사항 interval 종료 : setInterval을 사용하면 주기적으로 어떤 실행값이 실행되니깐 이전의 실행값들을 없애줌으로써 메모리누수를 방지
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + 5, 100);
      });
    }, 100);

    return () => {
      // interval 종료 : setInterval을 사용하면 주기적으로 어떤 실행값이 실행되니깐 이전의 실행값들을 없애줌으로써 메모리누수를 방지
      clearInterval(timer);
    };
  }, [setProgress]);

  return (
    <div className="relative h-screen w-full">
      {/* 프로그레스 바 */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
        <div className="h-full bg-red-500 transition-all duration-200 ease-out" style={{ width: `${progress}%` }}></div>
      </div>

      {/* 로딩 텍스트 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl font-bold text-red-500">{progress}%</div>
      </div>
    </div>
  );
};

export default Loading;
