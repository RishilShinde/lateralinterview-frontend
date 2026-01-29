import { useEffect, useState } from "react";
import { getQuestions } from "../services/api";
import QuestionCard from "../components/QuestionCard";

const ProviderPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (err) {
        console.error("Failed to load questions", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="domain-heading">Questions</h2>
      <div className="question-list">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
};

export default ProviderPage;