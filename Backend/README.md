# ⚡ Sakthi Dental Clinic — Backend API Server

The Node.js Express REST API backend for Sakthi Dental Clinic connected to MongoDB Atlas.

---

## 🛠️ Technology Stack

* **Runtime:** Node.js (v18+)
* **Framework:** Express 5
* **Database:** MongoDB Atlas
* **ODM:** Mongoose 8
* **Middleware:** CORS, Express JSON Parser, Dotenv

---

## 📡 API Endpoints

### Health Check
* **`GET /`** — Checks server status and response timestamp.
* **`GET /api/health`** — Detailed system health metrics and clinic metadata.

### Appointments API (`/api/appointments`)
* **`POST /api/appointments`** — Book a new dental appointment.
  * **Payload:**
    ```json
    {
      "name": "Jane Doe",
      "phone": "9876543210",
      "email": "jane@example.com",
      "date": "2026-10-01",
      "time": "09:00 AM - 11:00 AM",
      "treatment": "General Consultation",
      "notes": "First time visit"
    }
    ```
  * **Response:**
    ```json
    {
      "success": true,
      "message": "Appointment requested successfully!",
      "data": { "id": "APT-4829", "name": "Jane Doe", ... }
    }
    ```
* **`GET /api/appointments`** — Fetch list of requested appointments.

### Contact API (`/api/contact`)
* **`POST /api/contact`** — Submit a patient query or message.
  * **Payload:**
    ```json
    {
      "name": "John Smith",
      "email": "john@example.com",
      "phone": "9876543210",
      "message": "Inquiring about invisible aligners options."
    }
    ```
  * **Response:**
    ```json
    {
      "success": true,
      "message": "Your message has been received."
    }
    ```

---

## 📦 Directory Structure

```text
Backend/
├── config/
│   └── db.js             # MongoDB Atlas Mongoose connection setup
├── models/
│   ├── Appointment.js    # Mongoose Appointment Schema & Model
│   └── Contact.js        # Mongoose Contact Message Schema & Model
├── routes/
│   ├── appointmentRoutes.js # Express router for appointment endpoints
│   └── contactRoutes.js     # Express router for contact endpoints
├── .env                  # Backend environment secrets (Ignored in Git)
├── package.json          # Server dependencies & scripts
└── server.js             # Entry point initializing Express server
```

---

## 🔑 Environment Variables (`.env`)

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.exs9xuu.mongodb.net/sakthi_dental?retryWrites=true&w=majority
NODE_ENV=development
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

---

## ☁️ Deploying on Render

1. Sign in to **[Render](https://render.com/)**.
2. Create a new **Web Service** from your GitHub repository.
3. Set **Root Directory** to `Backend` (exact capital **`B`**).
4. Set **Build Command** to `npm install`.
5. Set **Start Command** to `npm start`.
6. Add environment variable `MONGODB_URI` under Environment settings.
7. Click **Create Web Service**.
