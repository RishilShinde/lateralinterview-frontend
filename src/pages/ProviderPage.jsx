import { useEffect, useState } from "react";
import { getQuestions } from "../services/api";
import SubCategoryCard from "../components/SubCategoryCard";

const ProviderPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
  try {
    const data = await getQuestions();
    
    // Ensure data exists and is an array to avoid the .filter error
    if (data && Array.isArray(data)) {
      setItems(data.filter(item => item.cloud === "Azure"));
    } else {
      console.warn("Received data is not an array:", data);
      // If the array is nested (e.g., data.questions), use that instead
      // setItems(data.questions.filter(...)); 
    }
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
