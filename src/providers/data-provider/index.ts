"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";

const API_URL = process.env.API_URL || "http://localhost:8080/api";

export const dataProvider = dataProviderSimpleRest(API_URL);

