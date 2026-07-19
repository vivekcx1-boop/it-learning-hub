import { useState } from "react";

function Welcome({ onStart }) {

  const [name, setName] = useState("");

  return (
    <div className="quiz-container" style={{ textAlign: "center" }}>
      <h1>🚀 AZ-104 Mock Test</h1>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        Microsoft Azure Administrator Certification
      </p>

      <br />

      <h2>📘 30 Random Questions</h2>
      <h2>⏰ 60 Seconds Per Question</h2>
      <h2>🎯 Passing Score: 70%</h2>

      <br />

    <div
    
  style={{
    background: "#1e293b",
    padding: "25px",
    borderRadius: "18px",
    width: "420px",
    margin: "35px auto",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
    textAlign: "left",
    color: "white",
}}
    >
    <h2
    style={{
      marginBottom: "20px",
      color: "#3b82f6",
    }}
    >
    📊 Exam Information
    </h2>

    <div style={{ marginTop: "30px" }}>

  <input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "2px solid #334155",
    outline: "none",
    marginBottom: "20px",
    boxSizing: "border-box",
  }}
/>

</div>

    <p>📘 Questions <span style={{float:"right"}}>30</span></p>

    <p>⏰ Time <span style={{float:"right"}}>60 Seconds</span></p>

    <p>🎯 Passing <span style={{float:"right"}}>70%</span></p>

    <hr style={{margin:"18px 0",opacity:0.3}} />

    <p>🏆 Best Score <span style={{float:"right"}}>0%</span></p>

    <p>🔥 Attempts <span style={{float:"right"}}>0</span></p>

    <p>⭐ Highest Streak <span style={{float:"right"}}>0</span></p>
    </div>

      <button
  disabled={name.trim() === ""}
  onClick={() => onStart(name)}
  style={{
    marginTop: "30px",
    padding: "16px 45px",
    fontSize: "22px",
    borderRadius: "12px",
    border: "none",
    cursor: name ? "pointer" : "not-allowed",
    background: name ? "#2563eb" : "#64748b",
    color: "white",
    fontWeight: "bold",
  }}
>
  ▶ Start Quiz
</button>

      <p style={{ marginTop: "40px", opacity: 0.7 }}>
        Best of Luck 💙
      </p>
    </div>
  );
}

export default Welcome;