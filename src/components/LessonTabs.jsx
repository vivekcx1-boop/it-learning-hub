import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import PdfViewer from "./PdfViewer";
import LessonQuiz from "./LessonQuiz";

function LessonTabs() {

  const [tab, setTab] = useState("video");

  return (

    <>

      <div
        style={{
          display: "flex",
          gap: "15px",
          margin: "30px 0",
        }}
      >

        <button onClick={() => setTab("video")}>🎥 Video</button>

        <button onClick={() => setTab("notes")}>📄 Notes</button>

        <button onClick={() => setTab("pdf")}>📕 PDF</button>

        <button onClick={() => setTab("quiz")}>📝 Quiz</button>

      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "15px",
          minHeight: "350px",
        }}
      >

        {tab === "video" && (
          <VideoPlayer />
        )}

        {tab === "notes" && (
          <h2>📄 Notes Coming Soon</h2>
        )}

        {tab === "pdf" && (
          <PdfViewer />
        )}

        {tab === "quiz" && (
         <LessonQuiz />
        )}

      </div>

    </>

  );

}

export default LessonTabs;