<div align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/heart.svg" width="80" height="80" alt="Sakthi Dental Clinic Logo" />
  <h1>Sakthi Dental Clinic</h1>
  <p><strong>Specialized Dental Care for Women, Children & Families in Hosur, Tamil Nadu.</strong></p>

  <p>
    <a href="#overview">Overview</a> •
    <a href="#features">Features</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#technologies-used">Technologies Used</a> •
    <a href="#repository-structure">Repository Structure</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#environment-variables">Environment Variables</a> •
    <a href="#documentation">Documentation</a>
  </p>
</div>

---

## Overview

**Sakthi Dental Clinic** is a full-stack modern web platform designed to streamline dental care access for patients in Hosur, Tamil Nadu. Over 20 years of expert dental practice is combined with a seamless digital interface for booking appointments, exploring specialized treatments, connecting with doctors, and submitting patient inquiries.

The codebase is structured as a two-service architecture with an independent React SPA frontend and a Node.js Express REST API backend:

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | React 19, Vite, React Router 7 | Single Page Application (SPA) with appointment booking modal, treatments showcase, doctor directory, responsive layouts, and celebration micro-animations. |
| **Backend** | Node.js, Express 5, MongoDB | RESTful API server handling appointment requests, contact form submissions, health checks, and database persistence via Mongoose. |

---

## Features

### 🦷 Patient Care & Services
* **Appointment Scheduling System:** Interactive modal with real-time slot selection (`09:00 AM - 11:00 AM`, `11:00 AM - 01:00 PM`, `04:00 PM - 06:00 PM`, `06:00 PM - 08:00 PM`), date picker, and treatment dropdown.
* **Confetti Micro-Interactions:** Instant celebratory feedback upon successful appointment booking powered by `canvas-confetti`.
* **Dental Treatments Showcase:** Dedicated treatment modules covering Laser Dentistry, Root Canal Therapy, Orthodontic Braces, Dental Implants, Teeth Whitening, and Child Dental Care.
* **Doctor Roster & Specialists:** Interactive directory showcasing senior surgeons, prosthodontists, endodontists, and orthodontists with experience metrics.

### ✉️ Contact & Inquiries
* **Patient Query Handling:** Direct contact form allowing patients to send custom queries connected directly to the backend database.
* **Clinic Details & Location:** Dynamic map integration, operating hours, phone numbers, and emergency booking options.

### 🔒 Security & Performance
* **CORS Hardening:** Configured cross-origin resource sharing for secure communication between Vercel (Frontend) and Render (Backend).
* **Database Resilience:** MongoDB Atlas cloud cluster with fallback parameters and automated connection retry logic.

---

## Technologies Used

### Frontend Stack
* **React 19:** Building fast, declarative, and component-based user interfaces.
* **Vite (v8):** Next-generation frontend tooling providing instant HMR and optimized production bundles.
* **React Router 7:** Seamless client-side routing across multi-page layouts (`/`, `/about`, `/treatments`, `/contact`).
* **Lucide React:** Modern, lightweight SVG icon library for crisp UI design.
* **Canvas Confetti:** Triggering particle celebrations on successful user actions.
* **Vanilla CSS / Custom Styling:** Tailored modern aesthetics with glassmorphism, responsive flex/grid layouts, and vibrant color palettes (`#e8397a` primary pink).

### Backend Stack
* **Node.js (v18+):** JavaScript runtime environment executing backend server logic.
* **Express 5:** High-performance web framework providing modular routing and API endpoints.
* **MongoDB & Mongoose (v8):** Cloud NoSQL document database storing appointment records and contact queries.
* **Dotenv:** Managing secret environment variables securely across environments.
* **CORS:** Middleware enabling safe cross-origin request policies between Vercel and Render.

---

## Architecture

```
[ Patient Browser ] 
        │
        ├── (HTTP Requests / SPA Routing) ──► [ Frontend: Vercel (Vite + React 19) ]
        │                                                    │
        │                                                    ▼
        └── (REST API Calls / JSON Payload) ────────► [ Backend: Render (Express 5) ]
                                                             │
                                                             ▼
                                                    [ MongoDB Atlas Database ]
```

---

## Repository Structure

```text
project/
├── README.md                 # Full project documentation
├── Backend/                  # Express REST API Server
│   ├── config/
│   │   └── db.js             # Mongoose MongoDB connection config
│   ├── models/
│   │   ├── Appointment.js    # Appointment database schema
│   │   └── Contact.js        # Contact inquiry database schema
│   ├── routes/
│   │   ├── appointmentRoutes.js
│   │   └── contactRoutes.js
│   ├── .env                  # Local backend secrets (Ignored in Git)
│   ├── .gitignore            # Git ignore rules for Backend
│   ├── package.json          # Node dependencies & scripts
│   └── server.js             # Express application entry point
└── Frontend/                 # React 19 + Vite Web Application
    ├── public/               # Favicon and static assets
    ├── src/
    │   ├── assets/           # Images & graphics
    │   ├── components/       # Header, Footer, AppointmentModal, Navbar
    │   ├── pages/            # HomePage, AboutPage, ContactPage, TreatmentsPage
    │   ├── App.jsx           # Master route layout router
    │   ├── main.jsx          # React app entry mounting point
    │   └── index.css         # Global styling & CSS variables
    ├── .gitignore            # Git ignore rules for Frontend
    ├── index.html            # Entry HTML document
    ├── package.json          # Frontend dependencies & scripts
    ├── vercel.json           # Vercel SPA rewrite & proxy rules
    └── vite.config.js        # Vite configuration & dev server proxy
```

---

## Getting Started

### Prerequisites
* **Node.js** 18.x or higher installed on your system.
* **MongoDB Atlas** database URI (or local MongoDB server).
* **Git** for version control.

---

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd project
```

---

### 2. Backend Setup & Run

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `Backend/` with your credentials:
   ```env
   PORT=
   MONGODB_URI=
   NODE_ENV=
   ```
4. Start the backend server:
   ```bash
   npm run dev
   # or
   npm start
   ```
   The backend API will run on `http://localhost:5000`.

---

### 3. Frontend Setup & Run

1. Open a new terminal and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173`.

---

## Environment Variables

### Backend (`Backend/.env`)
| Variable | Description | Example Value |
| :--- | :--- | :--- |
| `PORT` | Listening port for Express API | `5000` |
| `MONGODB_URI` | MongoDB Atlas Connection String | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `NODE_ENV` | Application running environment | `development` or `production` |

### Frontend (`Frontend/vercel.json` / Environment)
| Variable | Description | Purpose |
| :--- | :--- | :--- |
| `VITE_API_URL` | Base API Endpoint for Backend | Points client requests to Render production URL |

---

## Deployment Summary

- **Frontend (Vercel):** Root directory set to `Frontend`. Uses `vercel.json` to handle client-side routing.
- **Backend (Render):** Root directory set to `Backend`. Start command `npm start` running `node server.js`.

---

## Documentation

* [Frontend README.md](file:///c:/Users/ankit/Documents/ShadowFox/project/Frontend/README.md) – Component guidelines, Vite config, and React architecture.
* [Backend README.md](file:///c:/Users/ankit/Documents/ShadowFox/project/Backend/README.md) – REST API specification, Mongoose schemas, and endpoints.

---

<div align="center">
  <sub>Built with ❤️ for Sakthi Dental Clinic, Hosur.</sub>
</div>
