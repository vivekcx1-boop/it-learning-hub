import courses from "../data/courses";
import CourseCard from "../components/courses/CourseCard";
import "../styles/Courses.css";

function Courses() {
  return (
    <div className="courses-page">

      <div className="courses-header">

        <h1>📚 All Courses</h1>

        <p>
          Learn Azure, AWS, Terraform, Docker, Kubernetes, Linux & CCNA
        </p>

      </div>

      <div className="courses-grid">

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>

    </div>
  );
}

export default Courses;