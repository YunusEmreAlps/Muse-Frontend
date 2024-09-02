"use client";

import { DataProvider } from "@refinedev/core";
import Cookies from "js-cookie";

const API_URL = process.env.API_URL || "http://localhost:8080/api";

export const dataProvider: DataProvider = {
  // required methods
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const auth = Cookies.get("auth");
    const token = auth ? JSON.parse(auth)?.accessToken.toString() : null;
    const { current, pageSize } = pagination ?? {};

    try {
      const response = await fetch(`${API_URL}/${resource}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      });

      const data = await response.json();
      const total = data?.length;

      return {
        data,
        total,
      };
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error after logging it
    }
  },
  create: async ({ resource, variables, meta }) => {
    const auth = Cookies.get("auth");
    const token = auth ? JSON.parse(auth)?.accessToken.toString() : null;

    try {
      const response = await fetch(`${API_URL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(variables),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      });

      return response;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error after logging it
    }
  },
  update: async ({ resource, id, variables, meta }) => {
    const auth = Cookies.get("auth");
    const token = auth ? JSON.parse(auth)?.accessToken.toString() : null;

    try {
      const response = await fetch(`${API_URL}/${resource}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(variables),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });

      return response;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error after logging it
    }
  },
  deleteOne: async ({ resource, id, meta }) => {
    const auth = Cookies.get("auth");
    const token = auth ? JSON.parse(auth)?.accessToken.toString() : null;

    try {
      const response = await fetch(`${API_URL}/${resource}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      });
  
      return response;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error after logging it
    }
  },
  getOne: async ({ resource, id, meta }) => {
    const auth = Cookies.get("auth");
    const token = auth ? JSON.parse(auth)?.accessToken.toString() : null;

    try {
      const response = await fetch(`${API_URL}/${resource}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      });

      return response;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error after logging it
    }
  },
  getApiUrl: () => API_URL,
};
