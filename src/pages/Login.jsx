import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email Login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      alert("Google Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthLayout title="Welcome Back 👋">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="password-box">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="eye-icon">👁</span>
      </div>

      <div className="login-options">
        <label>
          <input type="checkbox" />
          Remember me
        </label>

        <a href="#">Forgot Password?</a>
      </div>

      <button onClick={handleLogin}>
        Login
      </button>

      <div className="divider">
        <span>OR</span>
      </div>

      <button
        className="google-btn"
        onClick={handleGoogleLogin}
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
        />
        Continue with Google
      </button>

      <p className="register-link">
        Don't have an account?{" "}
        <span onClick={() => navigate("/register")}>
          Create Account
        </span>
      </p>
    </AuthLayout>
  );
}

export default Login;