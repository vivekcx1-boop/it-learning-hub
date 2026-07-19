import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );

     await setDoc(doc(db, "users", userCredential.user.uid), {
  uid: userCredential.user.uid,
  name: user.name,
  email: user.email,
  role: "Student",
  streak: 0,
  completedCourses: [],
  certificates: [],
  createdAt: new Date(),
});

      alert("Registration Successful 🎉");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthLayout title="Create Account 🚀">

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={user.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />

      <button onClick={handleRegister}>
        Create Account
      </button>

    </AuthLayout>
  );
}

export default Register;