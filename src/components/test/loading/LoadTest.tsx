import React from "react";
import ChainData3 from "./ChainData3";
import RegisterProvider from "../../RegisterProvider";
import LoadAllProviders from "../../illi/LoadAllProviders";


React.lazy(() => import("./ChainData3"));
React.lazy(() => import("./../../RegisterProvider"));
React.lazy(() => import("./../../illi/LoadAllProviders"));

export default function LoadTest() {
  return (
    <div>
      <p>beep beep boop</p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ChainData3 />
        <RegisterProvider />
        <LoadAllProviders />
      </React.Suspense>
    </div>
  );
}
