import courses from "../data/courses";
import { useNavigate } from "react-router-dom";

function CourseCard() {

  const navigate = useNavigate();

  return (

    <section className="courses">

      <h2>📚 Popular Courses</h2>

      <div className="course-grid">

        {courses.map((course) => (

          <div className="course-card" key={course.id}>

            <h1>{course.icon}</h1>

            <h3>{course.title}</h3>

            <p>
              {course.level} • {course.duration}
            </p>

            <button onClick={() => navigate(`/course/${course.slug}`)}>
              Start Course →
            </button>

          </div>

        ))}

      </div>

    </section>

  );
}

export default CourseCard;