import QuestionCard from "./QuestionCard";
function QuestionCard({
  question,
  selectedAnswer,
  setSelectedAnswer,
  showResult,
}) {
  return (
    <>
      <h2>{question.question}</h2>

      {question.options.map((option, index) => (
        <button
          key={index}
          disabled={showResult}
          onClick={() => setSelectedAnswer(option)}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "12px",
            width: "300px",
            cursor: showResult ? "not-allowed" : "pointer",
            opacity: showResult ? 0.9 : 1,
            border: "none",
            transition: "0.3s",

            backgroundColor: showResult
              ? option === question.answer
                ? "#22c55e"
                : option === selectedAnswer
                ? "#ef4444"
                : "#ffffff"
              : "#ffffff",

            color: showResult
              ? option === question.answer || option === selectedAnswer
                ? "white"
                : "black"
              : "black",
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default QuestionCard;