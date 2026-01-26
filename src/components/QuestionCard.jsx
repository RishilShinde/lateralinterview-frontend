import { useState } from "react";

const QuestionCard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", marginBottom: "15px" }}>
      <h4>{question.question}</h4>
      <ul>
        {question.options.map((opt, index) => (
          <li key={index}>{opt}</li>
        ))}
      </ul>

      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <div style={{ marginTop: "10px" }}>
          <strong>Correct Answer:</strong> {question.options[question.correctAnswer]}
          <p>{question.explanation}</p>
          <small>
            Difficulty: {question.difficulty} | Experience: {question.experience}
          </small>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
