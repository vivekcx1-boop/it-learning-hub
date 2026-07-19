import { useState } from "react";

function CompleteLesson() {

  const [completed, setCompleted] = useState(false);

  return (

    <div style={{ marginTop: "30px" }}>

      <button
        className="lesson-btn"
        onClick={() => setCompleted(true)}
      >
        ✅ Mark Lesson Complete
      </button>

      {completed && (

        <h2
          style={{
            color: "#22c55e",
            marginTop: "20px",
          }}
        >
          🎉 Lesson Completed
        </h2>

      )}

    </div>

  );

}

export default CompleteLesson;