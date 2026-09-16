# 🦷 Sakthi Dental Clinic — Frontend Web Application

The frontend client for Sakthi Dental Clinic built with **React 19**, **Vite**, and **React Router 7**.

---

## 🚀 Features

* **Interactive Appointment Booking Modal:** Date picker, time slot selection, treatment selector, and patient form validation.
* **Celebration Animation:** Particle burst confetti upon booking powered by `canvas-confetti`.
* **Responsive Navigation & Layouts:** Desktop & mobile responsive headers, footers, hero banners, and cards.
* **Treatments Showcase:** Deep dives into specialized treatments (Orthodontics, Laser Surgery, Root Canal, Dentures, Implants).
* **Doctor Profiles:** Credential cards with experience badges for senior dental surgeons and specialists.
* **Vercel SPA Deployment Ready:** Configured with [`vercel.json`](file:///c:/Users/ankit/Documents/ShadowFox/project/Frontend/vercel.json) to rewrite paths for client-side routing.

---

## 🛠️ Technology Stack

* **Library:** React 19
* **Build Tool:** Vite 8
* **Routing:** React Router 7 (`BrowserRouter`, `Routes`, `Route`, `Link`)
* **Icons:** `lucide-react`
* **Animations:** `canvas-confetti`
* **Styling:** Custom Vanilla CSS & CSS modules with responsive breakpoints

---

## 📦 Directory Structure

```text
Frontend/
├── public/               # Public static assets & favicon
├── src/
│   ├── assets/           # Images & media assets
│   ├── components/       # Reusable components (Header, Footer, AppointmentModal)
│   ├── pages/            # Route views (HomePage, AboutPage, ContactPage, TreatmentsPage)
│   ├── App.jsx           # Main Router layout
│   ├── index.css         # Global CSS styles & variables
│   └── main.jsx          # React app DOM entry point
├── index.html            # Primary HTML template
├── package.json          # Frontend dependencies & npm scripts
├── vercel.json           # Vercel deployment rewrite rules
└── vite.config.js        # Vite configuration & proxy setup
```

---

## ⚙️ Available Scripts

In the `Frontend` directory, you can run:

### `npm run dev`
Runs the app in development mode using Vite at `http://localhost:5173`.  
API requests to `/api` are proxied to `http://localhost:5000` via `vite.config.js`.

### `npm run build`
Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Locally previews the production build created in `dist`.

---

## 🌐 Deploying on Vercel

1. Push code to GitHub.
2. Import repository in **Vercel**.
3. Set **Root Directory** to `Frontend` (or `project/Frontend`).
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.
