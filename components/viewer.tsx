"use client";

import { PDFViewer } from "@react-pdf/renderer";
import Curriculum from "../components/curriculum";
import CurriculumType from "../libs/types/curriculum-type";
import useWindowDimensions from "../libs/use-window-dimension";

type Props = {
  data: CurriculumType;
};

function hasWindow() {
  return typeof window === "object";
}

export default function Viewer({ data }: Props) {
  const { height, width } = useWindowDimensions();
  return (
    <PDFViewer width={width} height={height}>
      <Curriculum data={data} />
    </PDFViewer>
  );
}
