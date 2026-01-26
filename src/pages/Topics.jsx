import { useParams, Link } from "react-router-dom";
import data from "../data/questions.json";

const Topics = () => {
  const { domainId } = useParams();
  const domain = data.domains.find(d => d.id === domainId);

  if (!domain) return <p>Domain not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{domain.name} Topics</h2>
      <ul>
        {domain.topics.map(topic => (
          <li key={topic.id}>
            <Link to={`/domain/${domainId}/topic/${topic.id}`}>
              {topic.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
