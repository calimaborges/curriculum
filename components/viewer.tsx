"use client";

import { PDFViewer } from "@react-pdf/renderer";
import Curriculum from "../components/curriculum";
import CurriculumType from "../libs/types/curriculum-type";
import useWindowDimensions from "../libs/use-window-dimension";

type Props = {
  data: CurriculumType;
  language: "ptbr" | "enus";
};

export default function Viewer({ data, language }: Props) {
  const { height, width } = useWindowDimensions();
  return (
    <PDFViewer width={width} height={height}>
      <Curriculum data={data} language={language} />
    </PDFViewer>
  );
}
