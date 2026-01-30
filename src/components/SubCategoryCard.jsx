import { Link } from "react-router-dom";
import "./SubCategoryCard.css";

const SubCategoryCard = ({ item }) => (
  <Link
    to={`/domain/${item.domain.toLowerCase()}/${item.cloud.toLowerCase()}/${item.subCategory.toLowerCase()}`}
    className="sub-link"
  >
    <div className="sub-card">
      <h3 className="sub-title">{item.subCategory}</h3>
      <p className="sub-description">{item.category}</p>
    </div>
  </Link>
);

export default SubCategoryCard;