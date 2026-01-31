import axios from "axios";

// const API_BASE = "http://127.0.0.1:7071/api";

// const API_BASE = "https://lateralinterview-backend-edbghsewhghgbvay.centralindia-01.azurewebsites.net/api/getQuestions";
                             
export const getQuestions = async () => {
  const response = await axios.get("https://lateralinterview-backend-edbghsewhghgbvay.centralindia-01.azurewebsites.net/api/getQuestions");
  return response.data;
};



