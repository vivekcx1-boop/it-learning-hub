import { useParams } from "react-router-dom";
import CourseNavbar from "../components/CourseNavbar";
import lessons from "../data/lessons";
import LessonCard from "../components/LessonCard";


function CourseDetails() {

  const { slug } = useParams();

  const courseLessons = lessons[slug] || [];

  return (
    

  <div
    style={{
      background:"#0f172a",
      color:"white",
      minHeight:"100vh",
      padding:"40px"
    }}
  >
    <>
  <CourseNavbar />

  <div className="course-container">

    <div className="course-header">

      <button
        className="back-btn"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      <h1>📚 {slug.toUpperCase()}</h1>

      <p>{courseLessons.length} Lessons Available</p>

    </div>

    {courseLessons.map((lesson,index)=>(
      <LessonCard
        key={index}
        lesson={lesson}
        index={index}
      />
    ))}

  </div>
</>
  </div>
  

);

}

export default CourseDetails;