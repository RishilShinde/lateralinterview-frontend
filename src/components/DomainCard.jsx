import { Link } from "react-router-dom";

const DomainCard = ({ domain }) => (
  <Link to={`/domain/${domain.id}`} style={{ textDecoration: "none" }}>
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      width: "200px",
      cursor: "pointer"
    }}>
      <h3>{domain.name}</h3>
    </div>
  </Link>
);

export default DomainCard;
