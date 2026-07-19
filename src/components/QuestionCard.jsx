function QuestionCard({
  question,
  selectedAnswer,
  setSelectedAnswer,
  showResult,
}) {
  return (
    <>

    <div
  style={{
    display: "flex",
    gap: "12px",
    marginBottom: "18px",
  }}
>
  <span
    style={{
      background: "#2563eb",
      color: "white",
      padding: "6px 14px",
      borderRadius: "20px",
      fontWeight: "bold",
      fontSize: "14px",
    }}
  >
    📘 {question.category}
  </span>

  <span
    style={{
      background:
        question.difficulty === "Easy"
          ? "#16a34a"
          : question.difficulty === "Medium"
          ? "#f59e0b"
          : "#dc2626",

      color: "white",
      padding: "6px 14px",
      borderRadius: "20px",
      fontWeight: "bold",
      fontSize: "14px",
    }}
  >
    {question.difficulty}
  </span>
</div>

    <h2 className="question-title">
    {question.question}
    </h2>

      {question.options.map((option, index) => (
        <button
          key={index}
          disabled={showResult}
          onClick={() => setSelectedAnswer(option)}
          className="option-btn"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "550px",
            margin: "12px auto",
            padding: "15px",
            cursor: showResult ? "not-allowed" : "pointer",
            opacity: showResult ? 0.9 : 1,
            border: "none",
            transition: "0.3s",

            backgroundColor: showResult
            ? option === question.answer
            ? "#22c55e"      // Green
             : option === selectedAnswer
            ? "#ef4444"      // Red
            : "#ffffff"
            : option === selectedAnswer
            ? "#3b82f6"        // Blue before submit
            : "#ffffff",

            color:
            showResult
            ? option === question.answer || option === selectedAnswer
            ? "white"
            : "black"
            : option === selectedAnswer
            ? "white"
            : "black",
          }}
        >
          {option}
        </button>
      ))}

      {showResult && (
  <div
    style={{
      marginTop: "25px",
      background: "#1f2937",
      borderRadius: "12px",
      padding: "20px",
      color: "white",
      textAlign: "left",
      border: "1px solid #374151",
    }}
  >
    <h3>📖 Explanation</h3>
    <p>{question.explanation}</p>

    <hr style={{ margin: "15px 0", borderColor: "#374151" }} />

    <h3>💡 Microsoft Tip</h3>
    <p>{question.microsoftTip}</p>

    <hr style={{ margin: "15px 0", borderColor: "#374151" }} />

    <h3>🎯 AZ-104 Exam Tip</h3>
    <p>{question.examTip}</p>
  </div>
)}
    </>
  );
}

export default QuestionCard;