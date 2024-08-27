"use client";

import type { AuthProvider } from "@refinedev/core";
import Cookies from "js-cookie";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    // Suppose we actually send a request to the back end here.

    const user = fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });

    if (user) {
      Cookies.set("auth", JSON.stringify(user), {
        expires: 1 / 24, // 1 hour
        path: "/",
      });
      return {
        success: true,
        redirectTo: "/",
      };
    }
    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  register: async ({ username, email, password }) => {
    // Suppose we actually send a request to the back end here.
    const user = fetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });

    // If the user is successfully registered, redirect to the login page.
    if (user !== undefined) {
      return {
        success: true,
        redirectTo: "/login",
      };
    }
    return {
      success: false,
      error: {
        name: "RegisterError",
        message: "Invalid username or password",
      },
    };
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