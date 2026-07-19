import "../styles/Dashboard.css";

function ContinueLearning() {

  const courses = [

    {
      title: "Microsoft Azure",
      icon: "☁️",
      progress: 85
    },

    {
      title: "Amazon AWS",
      icon: "🌩️",
      progress: 60
    },

    {
      title: "Terraform",
      icon: "⚙️",
      progress: 45
    },

    {
      title: "Docker",
      icon: "🐳",
      progress: 70
    },

    {
      title: "Kubernetes",
      icon: "☸️",
      progress: 35
    },

    {
      title: "Linux",
      icon: "🐧",
      progress: 80
    }

  ];

  return (

    <div className="continue-learning">

      <h2>📚 Continue Learning</h2>

      <div className="course-grid">

        {courses.map((course,index)=>(

          <div
            className="course-card"
            key={index}
          >

            <div className="course-header">

              <h3>
                {course.icon} {course.title}
              </h3>

              <span>
                {course.progress}%
              </span>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width:`${course.progress}%`
                }}
              ></div>

            </div>

            <button className="resume-btn">

              Continue →

            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default ContinueLearning;