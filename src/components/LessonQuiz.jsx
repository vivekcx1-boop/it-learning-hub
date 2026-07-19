import { useState } from "react";
import { useParams } from "react-router-dom";
import quizzes from "../data/quizzes";

function LessonQuiz() {

  const { slug, lessonId } = useParams();

  const quiz = quizzes[slug]?.[lessonId] || [];

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const checkAnswer = (option, answer) => {

    if (submitted) return;

    if (option === answer) {
      setScore((prev) => prev + 1);
    }

  };

  return (

    <div>

      <h2>Lesson Quiz</h2>

      {quiz.map((q, index) => (

        <div
          key={index}
          className="lesson-card"
        >

          <h3>
            {index + 1}. {q.question}
          </h3>

          {q.options.map((option) => (

            <button
              key={option}
              className="lesson-btn"
              onClick={() =>
                checkAnswer(option, q.answer)
              }
            >
              {option}
            </button>

          ))}

        </div>

      ))}

      <button
        className="lesson-btn"
        onClick={() => setSubmitted(true)}
      >
        Submit Quiz
      </button>

      {submitted && (

        <h2>

          🎯 Score : {score} / {quiz.length}

        </h2>

      )}

    </div>

  );

}

export default LessonQuiz;