function RecentActivity() {

  const activities = [
    {
      icon:"✅",
      title:"Completed AZ-104 Networking Quiz",
      time:"10 min ago",
    },
    {
      icon:"📚",
      title:"Started Docker Course",
      time:"1 hour ago",
    },
    {
      icon:"🏆",
      title:"Earned Azure Fundamentals Certificate",
      time:"Yesterday",
    },
    {
      icon:"📝",
      title:"Mock Test Score: 82%",
      time:"2 days ago",
    },
    {
      icon:"🔥",
      title:"Maintained 21 Day Learning Streak",
      time:"3 days ago",
    },
  ];

  return (

    <div className="activity-section">

      <h2>🕒 Recent Activity</h2>

      <div className="activity-wrapper">

        {activities.map((item,index)=>(

          <div className="activity-item-card" key={index}>

            <div className="activity-icon">
              {item.icon}
            </div>

            <div className="activity-content">
              <h4>{item.title}</h4>
              <p>{item.time}</p>
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RecentActivity;