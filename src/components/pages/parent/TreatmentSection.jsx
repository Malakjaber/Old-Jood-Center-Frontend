import { PDFDownloadLink } from "@react-pdf/renderer";
import SectionNav from "../../global/SectionNav";
import MyDocument from "../../pdf/MyDocument";
import MyPdfViewer from "../../pdf/MyPdfViewer";

export default function TreatmentSection() {
  return (
    <div id="treatment">
      <SectionNav title={"Read Treatment Plans"}>
        <PDFDownloadLink document={<MyDocument />}>
          <img src="/assets/icons/download.png" alt="" />
        </PDFDownloadLink>
      </SectionNav>
      <div className="report flex justify-around py-20">
        <MyPdfViewer>
          <MyDocument />
        </MyPdfViewer>
      </div>
    </div>
  );
}
