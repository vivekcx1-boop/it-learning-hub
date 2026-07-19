import "../styles/Lesson.css";
import { useNavigate, useParams } from "react-router-dom";

function LessonCard({ lesson, index }) {

  const navigate = useNavigate();
  const { slug } = useParams();

  return (

    <div className="lesson-card">

      <div className="lesson-left">

        <div className="lesson-number">
          {index + 1}
        </div>

        <div>
          <h3>{lesson}</h3>
          <p>⏱ 15 Minutes</p>
        </div>

      </div>

      <button
        onClick={() =>
          navigate(`/course/${slug}/lesson/${index + 1}`)
        }
      >
        ▶ Start Lesson
      </button>

    </div>

  );

}

export default LessonCard;