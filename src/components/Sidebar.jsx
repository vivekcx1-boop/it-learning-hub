import { Link, useLocation } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import "../styles/Dashboard.css";

function Sidebar() {

const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/login");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Courses", path: "/courses", icon: "📚" },
    { name: "Mock Tests", path: "/quiz", icon: "📝" },
    { name: "Certificates", path: "/certificates", icon: "🏆" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="sidebar">

      <div className="logo">
        🚀
        <span>IT Learning Hub</span>
      </div>

      <nav>

        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={
              location.pathname === item.path
                ? "menu active"
                : "menu"
            }
          >
            <span>{item.icon}</span>
            {item.name}
          </Link>
        ))}

      </nav>

      <button onClick={handleLogout}>
  Logout
</button>
    </aside>
  );
}

export default Sidebar;