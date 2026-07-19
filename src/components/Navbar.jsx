import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
  <nav className="navbar">

    <Link to="/" className="logo">
  🚀 IT Learning HUB
</Link>

    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/course">Courses</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>

    <div className="actions">

      <button className="icon-btn">
        🌙
      </button>

      <button className="icon-btn">
        🔔
      </button>

      <div className="avatar">
        V
      </div>

      <button
        className="nav-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

  </nav>
);
}

export default Navbar;