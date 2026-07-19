function MyCourses() {
  const courses = [
  { name: "AZ-104 Azure", progress: 70 },
  { name: "AWS Cloud", progress: 45 },
  { name: "CCNA", progress: 20 },
  { name: "Terraform", progress: 60 },
  { name: "Docker", progress: 85 },
  { name: "Kubernetes", progress: 35 },
];

  return (
    <section className="my-courses">
      <h2>📚 My Courses</h2>

      {courses.map((course, index) => (
        <div className="course-item" key={index}>
          <div className="course-header">
            <span>{course.name}</span>
            <span>{course.progress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>

          <button>Continue Learning</button>
        </div>
      ))}
    </section>
  );
}

export default MyCourses;