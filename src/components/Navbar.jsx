import { Link, useNavigate } from "react-router-dom";
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
      <h2>🚀 IT Learning HUB</h2>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/course">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>

        <button className="nav-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;