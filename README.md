# 🎟️ Ticket Management App (React)

A modern, responsive ticket management system built with **React (Vite)** and styled with **Tailwind CSS**.  
It provides an intuitive interface for users to log, track, edit, and manage support tickets efficiently.

---

## 🌐 Live Demo

🔗 [ticket-app-react-wine.vercel.app](https://ticket-app-react-wine.vercel.app/)

---

## ⚙️ Frameworks & Libraries Used

- **React** – Component-based UI framework
- **Vite** – Fast development server and build tool
- **React Router DOM** – For page routing and navigation
- **Tailwind CSS** – Utility-first styling
- **Zustand** – For lightweight global state management

---

## ✨ Features

- 🔐 **User Authentication:** Register, login, and logout functionality
- 🎫 **Ticket Management:** Create, edit, and delete tickets
- 📊 **Dashboard:** Track ticket progress (open, in-progress, closed)
- 🧭 **Routing:** Seamless navigation between pages
- 💾 **Persistent State:** Auth and ticket data saved locally
- 📱 **Responsive UI:** Works across all screen sizes

---

## 🛠️ Setup & Execution

### Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone repository
git clone https://github.com/stephany247/ticket-app-react.git

# Navigate to project folder
cd ticket-app-react

# Install dependencies
npm install

# Run Development Server
npm run dev
```

---

### Switching Between Framework Versions

This project was implemented in React, Vue 3, and Twig to demonstrate cross-framework consistency.

---

## 🔄 Instructions for Switching Between React, Vue, and Twig Versions

This project has **three separate implementations** — one each for **React**, **Vue 3**, and **Twig (PHP)** — all following the same design and logic.  
You can switch between them depending on which framework you want to explore.

Each version is stored in its own repository or folder.  
Follow these steps:

**Clone the version you want to use:**

```bash
# React version
git clone https://github.com/stephany247/ticket-app-react.git

# Vue version
git clone https://github.com/stephany247/ticket-app-vue.git

# Twig version
git clone https://github.com/stephany247/ticket-app-twig.git

# Once the server starts, the app will be available at:
http://localhost:5173
```

| Version | Framework                   | Live Link                                                   |
| ------- | --------------------------- | ----------------------------------------------------------- |
| React   | React (Vite + React Router) | [View React App](https://ticket-app-react-wine.vercel.app/) |
| Vue     | Vue 3 (Vite + Vue Router)   | [View Vue App](https://ticket-app-vue-three.vercel.app/)    |
| Twig    | PHP + Twig Templates        | [View Twig App](https://ticket-app-twig-fbfg.onrender.com/) |

### UI Structure

- **Landing Page** – Overview and access to login/register

- **Auth Pages** – Login, Register, and Logout logic

- **Dashboard** – Ticket tracking with visual statuses

- **Ticket Manager** – Create, edit, and delete tickets

### State Management

- **Auth State**: Handled using localStorage to persist sessions.

- **Tickets State**: Stored in local state and synced to user context/store.

- **Routing State**: Controlled via React Router for navigation and protection.

### Example Test User

Email: demo@ticketapp.com  
Password: demo123
