import React from "react";
import ChainData2 from "./ChainData2";

React.lazy(() => import("./ChainData2"));

export default function LoadTest() {
  return (
    <div>
      <p>beep beep boop</p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ChainData2/>
      </React.Suspense>
    </div>
  );
}
