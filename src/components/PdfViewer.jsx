import { useParams } from "react-router-dom";
import pdfs from "../data/pdfs";

function PdfViewer() {

  const { slug, lessonId } = useParams();

  const pdf = pdfs[slug]?.[lessonId];

  if (!pdf)
    return <h2>No PDF Available</h2>;

  return (

    <iframe
      src={pdf}
      width="100%"
      height="700"
      title="PDF"
      style={{
        border: "none",
        borderRadius: "15px",
      }}
    />

  );

}

export default PdfViewer;