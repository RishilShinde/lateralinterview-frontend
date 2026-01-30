import axios from "axios";

// const API_BASE = "http://localhost:7071/api";

export const getQuestions = async () => {
  const response = await axios.get("https://lateralinterview-backend-edbghsewhghgbvay.centralindia-01.azurewebsites.net/api/getQuestions");
  return response.data;
};


