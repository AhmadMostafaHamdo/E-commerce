import React, { Suspense } from "react";
import LottieHandler from "../lottieHandler/lottieHandler";

const SuspenseFallback = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Suspense
        fallback={
          <LottieHandler type="pageLoading" message="Loading Please Wait..." />
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default SuspenseFallback;
