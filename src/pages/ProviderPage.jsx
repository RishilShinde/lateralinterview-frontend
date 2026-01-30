import { useEffect, useState } from "react";
import { getQuestions } from "../services/api";
import SubCategoryCard from "../components/SubCategoryCard";

const ProviderPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuestions();
        setItems(data.filter(item => item.cloud === "Azure")); // example: filter only Azure
      } catch (err) {
        console.error("Failed to load questions", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="domain-heading">Azure Topics</h2>
      <div className="sub-grid">
        {items.map((item) => (
          <SubCategoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProviderPage;