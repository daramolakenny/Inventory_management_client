# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Inventory Management System

# 📦 Overview

The **Inventory Management System Frontend** is a web application that provides a user-friendly interface for managing products and inventory.

It allows users to interact with the inventory system through a responsive dashboard, communicate with the backend API, and perform everyday inventory management operations from a single interface.

## 🚀 Features

* User registration and login
* Secure authentication
* Inventory dashboard
* View available products
* Add new products
* Edit product information
* Delete products
* Track stock quantities
* Search and filter products
* Responsive user interface
* Real-time communication with the backend API
* Error and loading state handling

## 🛠️ Technologies Used

* **React.js** — Frontend library
* **JavaScript** — Programming language
* **HTML5** — Page structure
* **CSS3** — Styling
* **Tailwind CSS** — Styling
* **Axios / Fetch API** — Backend communication
* **React Router** — Application routing

## 📁 Project Structure

```text
client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   ├── hooks/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/daramolakenny/Inventory_management.git
```

### 2. Navigate to the frontend directory

```bash
cd client
```

> If your frontend folder has a different name, replace `client` with the correct folder name.

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the backend API

Create a `.env` file in the frontend root directory if your project requires environment variables.

### 5. Start the development server

```bash
npm run dev
```

For Create React App:

The application will normally be available at:

```text
http://localhost:5173
```

## 🖥️ Application Pages

### Authentication

Users can register and log in to access the inventory management system.

### Dashboard

The dashboard provides an overview of inventory information and gives users quick access to important sections of the application.

### Products

Users can:

* View products
* Add products
* Edit products
* Delete products
* View stock quantities
* Search for products

### Inventory Management

The inventory interface allows users to monitor available stock and keep product information up to date.

## 🔌 Backend Integration

The frontend communicates with the Inventory Management System backend through RESTful API endpoints.

Example:

```javascript
const response = await fetch(`${API_URL}/products`);
const products = await response.json();
```

The backend is responsible for data storage and business logic, while the frontend handles the user interface and user interactions.

## 🔐 Authentication

Authenticated users receive access to protected areas of the application.

Authentication tokens are stored and sent with requests to protected backend endpoints.

Example:

```http
Authorization: Bearer YOUR_TOKEN
```

## 📱 Responsive Design

The application is designed to provide a usable experience across different screen sizes, including:

* Desktop computers
* Laptops
* Tablets
* Mobile devices

## 🔗 Backend Repository

The frontend requires the backend API to be running for features such as authentication, product management, and inventory operations to work correctly.

## 🧪 Running the Application

To run the complete application locally:

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Once both applications are running, open the frontend URL in your browser.

## 📌 Future Improvements

* Advanced inventory analytics
* Low-stock notifications
* Product categories
* User roles and permissions
* Sales and purchase management
* Export inventory reports
* Improved dashboard statistics
* Dark mode
* Improved mobile experience

## 👨💻 Author

**Kenny Daramola**

GitHub: `daramolakenny`

## 📄 License

This project is available for educational and development purposes.