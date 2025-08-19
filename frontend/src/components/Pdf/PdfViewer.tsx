import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import HomeIcon from "@mui/icons-material/Home";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import useWindowWidth from "../widthDetec";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PdfViewer() {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [zoomScale, setzoomScale] = useState(1);
  const width = useWindowWidth();
  console.log(width, "width");
  const [pageViewStyle, setPageViewStyle] = useState("page");
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="relative w-full">
      <div className="flex w-[calc(100% - 20px)] md:w-[450px] justify-around p-4 fixed bg-black/50 z-2 bottom-4  rounded-3xl left-1/2 transform -translate-x-1/2">
        <button
          className="px-4 py-2  rounded-[8px] text-white cursor-pointer "
          onClick={() => setPageViewStyle("page")}
        >
          <HomeIcon />
        </button>
        <button
          className="px-4 py-2 rounded-[8px] text-white cursor-pointer "
          onClick={() => setPageViewStyle("scroll")}
        >
          <SwipeUpIcon />
        </button>
        <button
          className="px-4 py-2 rounded-[8px] text-white cursor-pointer"
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber((Pre) => Pre - 1);
            }
          }}
        >
          <ArrowBackIosIcon />
        </button>
        <span>
          {pageNumber}/{numPages}
        </span>
        <button
          className="px-4 py-2 rounded-[8px] text-white cursor-pointer"
          onClick={() => {
            if (pageNumber < numPages) {
              setPageNumber((Pre) => Pre + 1);
            }
          }}
        >
          <ArrowForwardIosIcon />
        </button>
        <button
          className="px-4 py-2 rounded-[8px] text-white cursor-pointer"
          onClick={() => {
            if (zoomScale < 2) {
              setzoomScale((Pre) => Pre + 0.2);
            }
          }}
        >
          <ZoomInIcon />
        </button>
        <button
          className="px-4 py-2 rounded-[8px] text-white cursor-pointer "
          onClick={() => {
            if (zoomScale > 0.5) {
              setzoomScale((Pre) => Pre - 0.2);
            }
          }}
        >
          <ZoomOutIcon />
        </button>
      </div>
      <div className="flex justify-center align-middle w-full ">
        <Document file="/guides/1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {pageViewStyle === "scroll" ? (
            Array.from(new Array(numPages), (_, index) => (
              <Page
                width={width > 500 ? width - 0.6 * width : width - 0.2 * width}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={zoomScale}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))
          ) : (
            <Page
              width={width > 500 ? width - 0.6 * width : width - 0.2 * width}
              pageNumber={pageNumber}
              scale={zoomScale}
              renderTextLayer={false}
            />
          )}
        </Document>
      </div>
    </div>
  );
}
export default PdfViewer;
