import axios from "axios";

// const API_BASE = "http://127.0.0.1:7071/api";

const API_BASE = "lateralinterview-backend-edbghsewhghgbvay.centralindia-01.azurewebsites.net/api";
                             
export const getQuestions = async () => {
  const response = await axios.get(`${API_BASE}/getQuestions`);
  return response.data;
};

