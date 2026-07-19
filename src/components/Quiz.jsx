import Welcome from "./Welcome.jsx";

import { useState, useEffect } from "react";

import { az104Questions } from "../data";

import QuestionCard from "./QuestionCard";

import "../styles/Quiz.css";

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [showResult, setShowResult] = useState(false);

  const [score, setScore] = useState(0);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [quizCompleted, setQuizCompleted] = useState(false);

  const [timeLeft, setTimeLeft] = useState(60);

  const [questions, setQuestions] = useState([]);

  const [quizStarted, setQuizStarted] = useState(false);

  const [studentName, setStudentName] = useState("");


  useEffect(() => {
  const shuffled = [...az104Questions].sort(() => Math.random() - 0.5);
  setQuestions(shuffled.slice(0, 30));
  }, []);

  const question = questions[currentQuestion];

 

  useEffect(() => {
  if (showResult) return;

  if (timeLeft > 0) {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  } else {
    setShowResult(true);
    setIsSubmitted(true);

    if (selectedAnswer === question?.answer) {
      setScore((prev) => prev + 1);
    }
  }
}, [timeLeft, showResult]);
 
  
  

if (questions.length === 0) {
  return <h2>Loading...</h2>;
}

if (!quizStarted) {
  return (
    <Welcome
      onStart={(name) => {
        setStudentName(name);
        setQuizStarted(true);
      }}
    />
  );
}

const percentage = Math.round((score / questions.length) * 100);

let message = "";
let emoji = "";

if (percentage >= 90) {
  message = "Azure Champion";
  emoji = "🏆";
} else if (percentage >= 80) {
  message = "Excellent";
  emoji = "🚀";
} else if (percentage >= 70) {
  message = "Good Job";
  emoji = "💪";
} else if (percentage >= 50) {
  message = "Keep Practicing";
  emoji = "🙂";
} else {
  message = "Study Again";
  emoji = "📚";
}

  if (quizCompleted) {
  return (
    <div className="quiz-container">
      <h1>🎉 Congratulations!</h1>
      <h2>Quiz Completed</h2>
      <h2>Your Score: {score} / {questions.length}</h2>
      <h2>{percentage}%</h2>

      <h3>
      {emoji} {message}
      </h3>

      <h2>
      {percentage >= 70 ? "✅ PASS" : "❌ FAIL"}
      </h2>
      <button
  onClick={() => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setShowResult(false);
    setIsSubmitted(false);
    setQuizCompleted(false);
    setTimeLeft(60);
    setQuizStarted(false);
  }}
  style={{
    marginTop: "20px",
    padding: "12px 25px",
    cursor: "pointer",
    fontSize: "18px",
  }}
>
  🔄 Restart Quiz
  
</button>

<p
  style={{
    marginTop: "20px",
    opacity: 0.8,
    fontSize: "16px",
  }}
>
  Made with ❤️ by Vivek Chauhan
</p>

    </div>
  );
}
  const progress =
((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <h1>AZ-104 Mock Test</h1>
      <p className="quiz-subtitle">
      Microsoft Azure Administrator Certification Practice Test
      </p>
  
      <div className="top-dashboard">

  <span>👤 {studentName || "Student"}</span>

  <span>🏆 {score}</span>

  <span>⏰ {timeLeft}s</span>

  <span>
📝 {currentQuestion + 1}/{questions.length}
</span>

</div>
      
      <div className="question-header">
  <span className="question-badge">
    Question {currentQuestion + 1} / {questions.length}
  </span>
</div>
      <div
  style={{
    width: "300px",
    height: "12px",
    background: "#444",
    borderRadius: "10px",
    marginBottom: "15px",
  }}
>
  <div
    style={{
      width: `${progress}%`,
      height: "100%",
      background: "#22c55e",
      borderRadius: "10px",
    }}
  ></div>
</div>
      <QuestionCard
      question={question}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      showResult={showResult}
/>
<h3>Selected Answer: {selectedAnswer}</h3>
<button
  disabled={isSubmitted || selectedAnswer === ""}
  onClick={() => {
  if (!isSubmitted) {
    setShowResult(true);

    if (selectedAnswer === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsSubmitted(true);
  }
}}
  style={{
    marginTop: "20px",
    padding: "12px 25px",
    cursor: isSubmitted ? "not-allowed" : "pointer",
    opacity: isSubmitted ? 0.6 : 1,
  }}
>
  Submit Answer
</button>
{showResult && (
  <h2>
    {selectedAnswer === question.answer
      ? "✅ Correct Answer!"
      : "❌ Wrong Answer!"}
  </h2>
)}

{showResult && (
  <div
    style={{
      marginTop: "20px",
      padding: "15px",
      background: "#1e293b",
      borderRadius: "10px",
      maxWidth: "600px",
    }}
  >
      </div>
)}

{showResult && (
  <button
    onClick={() => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
    setShowResult(false);
    setIsSubmitted(false);
    setTimeLeft(60);
  }
  
  else {
    setQuizCompleted(true);
  }
}}
    style={{
      marginLeft: "15px",
      padding: "12px 25px",
      cursor: "pointer",
    }}
  >
    Next Question →
  </button>
)}
    </div>
  );
}

export default Quiz;