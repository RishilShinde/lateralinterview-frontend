import { useParams, Link } from "react-router-dom";
import data from "../data/questions.json";
import "./DomainPage.css";

const DomainPage = () => {
  const { id } = useParams();
  const domain = data.domains.find((d) => d.id === id);

  return (
    <div className="container">
      <h2 className="domain-heading">{domain?.name}</h2>
      <p className="domain-subtext">{domain?.description}</p>

      <div className="domain-grid">
        {domain.providers.map((provider) => (
          <Link
            key={provider.id}
            to={`/domain/${id}/${provider.id}`}
            className="domain-link"
          >
            <div className="domain-card">
              <h3 className="domain-title">{provider.name}</h3>
              <p className="domain-description">
                {provider.description || `Explore ${provider.name} topics`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DomainPage;