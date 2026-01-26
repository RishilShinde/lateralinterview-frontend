import { useParams } from "react-router-dom";
import data from "../data/questions.json";
import QuestionCard from "../components/QuestionCard";

const Questions = () => {
  const { domainId, topicId } = useParams();
  const domain = data.domains.find(d => d.id === domainId);
  const topic = domain?.topics.find(t => t.id === topicId);

  if (!topic) return <p>Topic not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{topic.name} Interview Questions</h2>
      {topic.questions.map(q => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  );
};

export default Questions;
