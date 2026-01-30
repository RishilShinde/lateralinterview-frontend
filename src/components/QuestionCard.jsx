import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./QuestionCard.css";

const QuestionCard = ({ question, subCategory }) => {
  const [answer, setAnswer] = useState(null);

  const askAI = async () => {
    try {
      const res = await axios.post("http://localhost:7071/api/askAI", {
        question: question.question,
        subCategory: subCategory,
      });
      setAnswer(res.data.answer);
    } catch (err) {
      console.error("AI request failed", err);
    }
  };

  return (
    <div className="question-card">
      <p className="question-text">{question.question}</p>
      <button className="ask-ai-btn" onClick={askAI}>
        Ask AI
      </button>

      {answer && (
        <div className="ai-answer-window">
          <h4>AI Answer</h4>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

// import { useState } from "react";
// import axios from "axios";
// import "./QuestionCard.css";

// const QuestionCard = ({ question, subCategory }) => {
//   const [answer, setAnswer] = useState(null);

//   const askAI = async () => {
//   try {
//     const res = await axios.post("http://localhost:7071/api/askAI", {
//       question: question.question,   // ✅ string
//       subCategory: subCategory       // ✅ now passed correctly
//     });
//     setAnswer(res.data.answer);
//   } catch (err) {
//     console.error("AI request failed", err);
//   }
// };

//   return (
//     <div className="question-card">
//       <p className="question-text">{question.question}</p> {/* ✅ render string */}
//       <button className="ask-ai-btn" onClick={askAI}>
//         Ask AI
//       </button>

//       {answer && (
//         <div className="ai-answer-window">
//           <h4>AI Answer</h4>
//           <p>{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuestionCard;