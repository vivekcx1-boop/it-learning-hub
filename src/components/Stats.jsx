import "../styles/Stats.css";
function Stats() {
  const stats = [
    {
      number: "35+",
      title: "Courses",
      icon: "📚",
    },
    {
      number: "1200+",
      title: "Students",
      icon: "👨‍🎓",
    },
    {
      number: "3000+",
      title: "Quiz Questions",
      icon: "📝",
    },
    {
      number: "95%",
      title: "Interview Success",
      icon: "💼",
    },
  ];

  return (
    <section className="stats-section">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <span className="icon">{item.icon}</span>

          <h2>{item.number}</h2>

          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;