"use client";

import type { AuthProvider } from "@refinedev/core";
import Cookies from "js-cookie";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8080/api";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = axios.post(`${API_URL}/users/login`, {
        username,
        password,
      });

      const user = await response.then((res) => res.data);

      if (user && user?.accessToken && user?.tokenType) {
        Cookies.set("auth", JSON.stringify(user), {
          expires: 1 / 24, // 1 hour
          path: "/",
        });
        // Add user to the local storage
        localStorage.setItem("user", JSON.stringify(user));
        return {
          success: true,
          redirectTo: "/",
        };
      }
      return {
        success: false,
        error: {
          name: "Login Error",
          message: "Invalid username or password",
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: "Login Error",
          message: "Invalid username or password",
        },
      };
    }
  },
  register: async ({ username, email, password }) => {
    try {
      const response = axios.post(`${API_URL}/users/register`, {
        username,
        email,
        password,
      });

      const message = response.then((res) => res.data);

      // If the user is successfully registered, redirect to the login page.
      if ((await message)?.message === "User registered successfully!") {
        return {
          success: true,
          redirectTo: "/login",
        };
      }
      return {
        success: false,
        error: {
          name: "Register Error",
          message: "Invalid username, email, or password",
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: "Register Error",
          message: "Invalid username, email, or password",
        },
      };
    }
  },
  logout: async () => {
    Cookies.remove("auth", { path: "/" });
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser.roles;
    }
    return null;
  },
  getIdentity: async () => {
    const auth = Cookies.get("auth");
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser;
    }
    return null;
  },
  onError: async (error) => {
    if (error.response?.status === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
};
