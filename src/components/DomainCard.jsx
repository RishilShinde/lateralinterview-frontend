import { Link } from "react-router-dom";
import "./DomainCard.css";

const DomainCard = ({ domain }) => (
  <Link to={`/domain/${domain.id}`} className="domain-link">
    <div className="domain-card">
      <img src={domain.logo} alt={domain.name} className="domain-logo" />
      <h3 className="domain-title">{domain.name}</h3>
      <p className="domain-description">{domain.description}</p>
    </div>
  </Link>
);

export default DomainCard;