import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">

      <div className="course-top">

        <div
          className="course-icon"
          style={{ background: course.color }}
        >
          {course.icon}
        </div>

        <span className="course-level">
          {course.level}
        </span>

      </div>

      <h3>{course.title}</h3>

      <div className="course-info">

        <span>📖 {course.lessons} Lessons</span>

        <span>⏱ {course.duration}</span>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${course.progress}%`,
            background: course.color,
          }}
        ></div>

      </div>

      <p>{course.progress}% Completed</p>

      <Link
        to={`/courses/${course.slug}`}
        className="start-btn"
      >
        Continue Learning →
      </Link>

    </div>
  );
}
<button onClick={() => navigate(`/course/${course.slug}`)}>
  Start Learning →
</button>

export default CourseCard;