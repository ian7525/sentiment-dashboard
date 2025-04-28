import axios from "axios";
import {
  AnalysisRequest,
  AnalysisResult,
  ApiStats,
  SupportedLanguage,
} from "../types/api";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  analyzeText: async (request: AnalysisRequest): Promise<AnalysisResult> => {
    try {
      const response = await apiClient.post<AnalysisResult>(
        "/analyze",
        request
      );
      return response.data;
    } catch (error) {
      console.error("Error analyzing text:", error);
      throw error;
    }
  },
  getApiStats: async (): Promise<ApiStats> => {
    try {
      const response = await apiClient.get<any>("/stats");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching API stats:", error);
      throw error;
    }
  },
  getSupportedLanguages: async (): Promise<SupportedLanguage[]> => {
    try {
      const response = await apiClient.get<SupportedLanguage[]>("/languages");
      return response.data;
    } catch (error) {
      console.error("Error fetching supported languages:", error);
      throw error;
    }
  },
};
