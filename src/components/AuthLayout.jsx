import { Link } from "react-router-dom";
import "../styles/Auth.css";

function AuthLayout({ title, children }) {
  return (
    <div className="auth-page">

      <div className="hero-content">

  <Link
  to="/"
  className="logo-link"
>
  IT Learning Hub
</Link>

  <p className="tagline">
    Learn • Practice • Get Hired
  </p>

  <div className="azure-graphic">

    <div className="circle">☁️</div>

    <div className="line"></div>

    <div className="nodes">

      <div>🖥 VM</div>

      <div>🌐 VNet</div>

      <div>💾 Storage</div>

      <div>🔐 Entra ID</div>

    </div>

  </div>

  <div className="info-box">

    <p>📚 500+ AZ-104 Questions</p>

    <p>🏆 Real Exam Simulation</p>

    <p>👨‍🎓 12,00+ Students</p>

  </div>

</div>
      
      <div className="auth-card">
        <h2>{title}</h2>
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;