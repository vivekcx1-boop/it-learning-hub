import { useParams } from "react-router-dom";
import LessonTabs from "../components/LessonTabs";
import CompleteLesson from "../components/CompleteLesson";

function Lesson() {

  const { slug, lessonId } = useParams();

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >

      <h1>
        📚 {slug.toUpperCase()}
      </h1>

      <h2>
        Lesson {lessonId}
      </h2>

      <br />

      <LessonTabs />
      <CompleteLesson />
    </div>

  );

}

export default Lesson;