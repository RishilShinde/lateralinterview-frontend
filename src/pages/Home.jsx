import data from "../data/questions.json";
import DomainCard from "../components/DomainCard";

const Home = () => {
  return (
    <div className="container">
      <h2>Choose a Domain</h2>
      <div className="domain-grid">
        {data.domains.map((domain) => (
          <DomainCard key={domain.id} domain={domain} />
        ))}
      </div>
    </div>
  );
};

export default Home;