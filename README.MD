# Muse Frontend

Welcome to the **Muse** Banking Application project! This application is designed to guide users through their financial journey with inspiration, wisdom, and harmony. Our goal is to provide a seamless and insightful banking experience that helps users manage their finances efficiently and effectively.

> This project under development. Only login and register pages are ready. I will continue to develop the project.

## Table of Contents

- [Muse Frontend](#muse-frontend)
  - [Table of Contents](#table-of-contents)
  - [Key Features](#key-features)
    - [1. Financial Guidance](#1-financial-guidance)
    - [2. User-Friendly Interface](#2-user-friendly-interface)
    - [3. Insightful Analytics](#3-insightful-analytics)
    - [4. Secure and Reliable](#4-secure-and-reliable)
    - [5. Authentication & Security](#5-authentication--security)
    - [6. Developer Tools](#6-developer-tools)
  - [Name Explanation](#name-explanation)
  - [Development Guide](#development-guide)
    - [1. Prerequisites](#1-prerequisites)
    - [2. Installation](#2-installation)
    - [3. Project Setup](#3-project-setup)
  - [Architecture](#architecture)
  - [Development Workflow](#development-workflow)
  - [Code of Conduct](#code-of-conduct)
  - [Security Policy](#security-policy)
  - [My Refine Journey 🚀](#my-refine-journey-)
    - [First Problem: Customizing Login and Register Pages](#first-problem-customizing-login-and-register-pages)
  - [Contact Us](#contact-us)

## Key Features

### 1. **Financial Guidance**

- **Personalized Recommendations:** Receive tailored advice based on your financial behavior and goals.
- **Educational Resources:** Access articles, tips, and tutorials to enhance your financial literacy.

### 2. **User-Friendly Interface**

- **Intuitive Dashboard:** Easily navigate through your financial information with a clean and simple interface.
- **Easy Transactions:** Perform transactions quickly and securely with a user-friendly design.

### 3. **Insightful Analytics**

- **Spending Analysis:** Understand your spending patterns with detailed reports and visualizations.
- **Goal Tracking:** Set financial goals and track your progress with clear metrics.

### 4. **Secure and Reliable**

- **Robust Security Measures:** Protect your financial data with advanced encryption and security protocols.
- **Reliable Performance:** Enjoy a smooth and dependable banking experience with minimal downtime.

### 5. **Authentication & Security**

- **JWT Authentication**: Implement secure user login and registration flows using JSON Web Tokens (JWT).
- **Spring Boot Rest API**: Leverage Spring Boot with Spring Security to build a secure and efficient RESTful API.
- **Spring Security Configuration**: Configure Spring Security to integrate seamlessly with JWT for authentication and authorization.
- **Data Models & Associations**: Define and manage data models and associations effectively for secure authentication and authorization.
- **Database Interaction**: Utilize Spring Data JPA for smooth and efficient interaction with PostgreSQL.

### 6. **Developer Tools**

- **API Documentation**: Explore and interact with the API through Swagger UI.
- **Health Check & Metrics**: Monitor the application’s health and performance with Spring Boot Actuator
- **Logging & Exception Handling**: Implement logging and exception handling to ensure smooth operation and error tracking.

## Name Explanation

Inspired by the Greek Muses, goddesses of inspiration and wisdom, **Muse** represents our commitment to providing guidance and insight. Just as the Muses inspire creativity and knowledge, Muse aims to be a source of financial inspiration, helping users make informed decisions and achieve their financial goals.

## Development Guide

A React Framework for building internal tools, admin panels, dashboards & B2B apps with unmatched flexibility ✨

Refine's hooks and components simplifies the development process and eliminates the repetitive tasks by providing industry-standard solutions for crucial aspects of a project, including authentication, access control, routing, networking, state management, and i18n.

## Learn More

To learn more about **Refine**, please check out the [Documentation](https://refine.dev/docs)

- **REST Data Provider** [Docs](https://refine.dev/docs/core/providers/data-provider/#overview)
- **Material UI** [Docs](https://refine.dev/docs/ui-frameworks/mui/tutorial/)
- **Custom Auth Provider** [Docs](https://refine.dev/docs/core/providers/auth-provider/)

### 1. Prerequisites

- Node.js (v14.x or higher)
- NPM (v6.x or higher)
- Editor (VS Code, Notepad++, Sublime Text, etc.)
- Git

### 2. Installation

- Clone the repository:

```bash
git clone <repository-url>
```

- Navigate to the project directory:

```bash
cd muse-frontend
```

- Environment Variables:
  - Create a `.env` file in the config folder.
  - Add the following environment variables to the `.env` file
  - Refer to the `.env.example` file for the required environment variables.
  - Update the values of the environment variables as needed.
  - Save the `.env` file.

- After setting up the environment variables, you need to start backend server. You can find the backend server [Muse Backend](https://github.com/YunusEmreAlps/Muse-Backend)

### 3. Project Setup

- Install the dependencies:

```bash
npm install
```

- Open the project in your IDE.
- Configure the environment variables in the config file (`.env`).
- Run the application with the following command:

```bash
# Running the development server
npm run dev

# Building for production
npm run build

# Running the production server
npm run start
```

- Start developing!
- For more detailed instructions, refer to the [Development Workflow](docs/DEVELOPMENT_WORKFLOW.md) document.

## Architecture

If you're interested in contributing or learning more about the **Muse** codebase please refer to the [architecture document](docs/ARCHITECTURE.md) first for a high level overview of how the application is put together.

## Development Workflow

In the **Muse** project, we follow a structured development workflow to ensure efficient collaboration and code management. This workflow includes the following key components: branching strategy, versioning, and commit message conventions. By following these guidelines, we aim to maintain a clean and organized codebase that is easy to manage and contribute to. For more information, please refer to the [Development Workflow](docs/DEVELOPMENT_WORKFLOW.md) document.

## Code of Conduct

Please read the [Code of Conduct](docs/CODE_OF_CONDUCT.md) before contributing to the project.

## Security Policy

Please read the [Security Policy](docs/SECURITY.md) before contributing to the project.

## My Refine Journey 🚀

This is my journey with Refine. I will document my progress, challenges, and solutions as I explore the capabilities of Refine and build a project using the framework. I will share my insights, tips, and tricks to help others navigate the world of Refine and create amazing applications.

### First Problem: Customizing Login and Register Pages

When I designed Login and Register pages, I used Refine's hooks and components to simplify the development process and eliminate repetitive tasks. I was able to provide industry-standard solutions for crucial aspects of the project, including authentication, access control, routing, networking, state management, and i18n. But I can't modify the design of the pages as I want. I will try to learn more about Refine and see how I can customize the design to match my project's requirements. I solve the **Swizzle** to customize the design of the pages.

- [Problem Solution](https://stackoverflow.com/questions/78437103/refine-customize-login-page-use-user-id-instead-of-email)

## Contact Us

For any questions or support, please contact us at:

- Linkedin at [Yunus Emre Alpu](https://www.linkedin.com/in/yunus-emre-alpu-5b1496151/)

Thank you for choosing **Muse** as your financial guide!

---
