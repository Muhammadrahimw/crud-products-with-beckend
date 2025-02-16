import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = {
	get: async (endpoint = "") => {
		try {
			const response = await axios.get(`${BASE_URL}/${endpoint}`);
			return response.data;
		} catch (error) {
			console.error("GET error:", error);
			return null;
		}
	},

	post: async (endpoint = "", data: any) => {
		try {
			const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
			return response.data;
		} catch (error) {
			console.error("POST error:", error);
			return null;
		}
	},

	put: async (endpoint = "", data: any) => {
		try {
			const response = await axios.put(`${BASE_URL}/${endpoint}`, data);
			return response.data;
		} catch (error) {
			console.error("PUT error:", error);
			return null;
		}
	},

	delete: async (endpoint = "") => {
		try {
			const response = await axios.delete(`${BASE_URL}/${endpoint}`);
			return response.data;
		} catch (error) {
			console.error("DELETE error:", error);
			return null;
		}
	},
};
