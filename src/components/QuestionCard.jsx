import "./QuestionCard.css";

const QuestionCard = ({ question }) => (
  <div className="question-card">
    <h3 className="question-title">{question.question}</h3>

    {question.type === "mcq" ? (
      <ul className="option-list">
        {question.options.map((opt, i) => (
          <li key={i} className="option-item">{opt}</li>
        ))}
      </ul>
    ) : (
      <input
        type="text"
        className="answer-input"
        placeholder="Type your answer here..."
      />
    )}
  </div>
);

export default QuestionCard;