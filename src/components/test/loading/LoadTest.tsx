import React from "react";
import ChainData3 from "./ChainData3";
import RegisterProvider from "../../RegisterProvider";

React.lazy(() => import("./ChainData3"));
React.lazy(() => import("./../../RegisterProvider"));

export default function LoadTest() {
  return (
    <div>
      <p>beep beep boop</p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ChainData3 />
        <RegisterProvider />
      </React.Suspense>
    </div>
  );
}
