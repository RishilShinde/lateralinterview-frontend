import axios from "axios";

const API_BASE = "https://lateralinterview-backend-edbghsewhghgbvay.centralindia-01.azurewebsites.net/api";

export const getQuestions = async () => {
  const response = await axios.get(`${API_BASE}/getQuestions`);
  return response.data;
};

// const API_BASE = "http://localhost:7071/api";
