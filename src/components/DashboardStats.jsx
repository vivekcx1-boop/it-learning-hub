import "../styles/Dashboard.css";

function DashboardStats() {

  const stats = [
    {
      icon: "📚",
      value: "12",
      title: "Courses"
    },
    {
      icon: "🏆",
      value: "05",
      title: "Certificates"
    },
    {
      icon: "📝",
      value: "245",
      title: "Mock Tests"
    },
    {
      icon: "🔥",
      value: "21",
      title: "Day Streak"
    }
  ];

  return (

    <div className="stats-container">

      {stats.map((item, index) => (

        <div
          className="stat-card"
          key={index}
        >

          <div className="stat-icon">
            {item.icon}
          </div>

          <h2>{item.value}</h2>

          <p>{item.title}</p>

        </div>

      ))}

    </div>

  );

}

export default DashboardStats;