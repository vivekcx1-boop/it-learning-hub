import { Link } from "react-router-dom";

function CourseNavbar() {
  return (
    <header className="course-navbar">

      <div className="course-logo">
        🚀 <Link to="/">IT Learning HUB</Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/course">Courses</Link>

        
      </nav>

    </header>
  );
}

export default CourseNavbar;