import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuestions } from "../services/api";
import QuestionCard from "../components/QuestionCard";
import "./SubCategoryPage.css";

const SubCategoryPage = () => {
  const { subCategory } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestions();
      const item = data.find(
        (i) => i.subCategory.toLowerCase() === subCategory.toLowerCase()
      );
      if (item) setQuestions(item.questions);
    };
    fetchData();
  }, [subCategory]);

  return (
    <div className="container">
      <h2 className="domain-heading">{subCategory}</h2>
      {questions.map((q, i) => (
        <QuestionCard key={i} question={{ type: "theory", question: q }} />
      ))}
    </div>
  );
};

export default SubCategoryPage;