import React from "react";
import dynamic from "next/dynamic";

const Viewer = dynamic(() => import("@/components/Pdf/PdfViewer"), {
  ssr: false,
});

const Pdf = () => {
  return (
    <div className=" bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-400">
      <Viewer />
    </div>
  );
};

export default Pdf;
