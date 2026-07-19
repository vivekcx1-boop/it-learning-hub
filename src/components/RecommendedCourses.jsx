function RecommendedCourses() {
  const courses = [
    {
      title: "AZ-104 Azure Administrator",
      progress: 70,
      icon: "☁️",
      color: "#3b82f6",
    },
    {
      title: "AWS Solutions Architect",
      progress: 35,
      icon: "🟧",
      color: "#f59e0b",
    },
    {
      title: "Docker",
      progress: 55,
      icon: "🐳",
      color: "#06b6d4",
    },
    {
      title: "Kubernetes",
      progress: 20,
      icon: "☸️",
      color: "#2563eb",
    },
    {
      title: "Terraform",
      progress: 40,
      icon: "🏗️",
      color: "#7c3aed",
    },
    {
      title: "Linux",
      progress: 85,
      icon: "🐧",
      color: "#22c55e",
    },
  ];

  return (
    <div className="recommended-section">

      <h2>🚀 Recommended Courses</h2>

      <div className="recommended-grid">

        {courses.map((course, index) => (

          <div className="course-card" key={index}>

            <div className="course-icon">
              {course.icon}
            </div>

            <h3>{course.title}</h3>

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

            <button>
              Continue →
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecommendedCourses;