import data from "../data/questions.json";
import DomainCard from "../components/DomainCard";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Choose a Domain</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {data.domains.map(domain => (
          <DomainCard key={domain.id} domain={domain} />
        ))}
      </div>
    </div>
  );
};

export default Home;
