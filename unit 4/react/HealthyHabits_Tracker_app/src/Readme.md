# 🧘 HealthyHabits Tracker App

## 📉 Introduction

**HealthyHabits Tracker** is a wellness-focused habit tracking app that empowers users to build and maintain healthy lifestyle habits. With features like customizable habit creation, wellness score tracking, AI-driven recommendations, progress analytics, and reminders, it helps users stay accountable and motivated.

## 📆 Project Type

**Fullstack**

* Frontend: React + Firebase Authentication + Chart.js
* Backend: Firebase Firestore (No dedicated backend server)

---

## 🌐 Deployed App

* **Frontend**: [https://healthyhabits-tracker.web.app](https://healthyhabits-tracker.web.app)
* **Backend**: Firebase Firestore
* **Database**: [Firebase Console](https://console.firebase.google.com/project/healthy-habits-tracker-app/firestore)

---

## 🎥 Video Walkthrough of the Project

> \[  ]

## 🎥 Video Walkthrough of the Codebase

> \[ ]

---

## ✨ Features

* 🔒 Authentication with Signup/Login
* 🎯 Create and Track Custom Habits (daily/weekly)
* 📈 Wellness Score Calculation
* 💡 AI-based Habit Recommendations
* 🔥 Habit Streak Tracking
* ⏰ Reminder Notifications (hourly)
* 📊 Doughnut Charts for Habit Progress (Chart.js)
* 🌙 Dark/Light Mode Toggle

---

## ⚙️ Design Decisions & Assumptions

* Firebase used for both Auth and Firestore for scalability & real-time sync
* Data is scoped per user under `users/{uid}/habits`
* Assumed habits need daily/weekly tracking with goal thresholds
* Chart.js is used for simple and fast habit analytics visualization
* Simple reminder logic via `setInterval` alerts (can be upgraded to browser notifications or cron)

---

## 🛠️ Installation & Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/healthyhabits_tracker.git
cd healthyhabits_tracker
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Set up Firebase (optional if not already configured):

* Copy your Firebase config to `src/firebase.js`
* Enable **Authentication (Email/Password)** and **Firestore**

### 4. Start the app:

```bash
npm run dev
```

---

## 🚀 Usage

After logging in, you can:

* Add a new habit
* Log progress each day/week
* View your streak, score, and performance
* Get AI tips for improvement



## 🔐 Credentials

You can test with these credentials:

```
Email: testuser@example.com
Password: 123456
```

> *(or create your own account)*

---

## 🌍 APIs Used

* [Firebase Authentication](https://firebase.google.com/docs/auth)
* [Firebase Firestore](https://firebase.google.com/docs/firestore)
* [Chart.js](https://www.chartjs.org/)

---

## 📚 API Endpoints (Firestore Structure)

No traditional REST endpoints, but Firestore structure:

* `users/{uid}/habits`
  Each document includes:

  * `name`, `goal`, `category`, `frequency`, `completed`, `streak`, `lastLogged`

---

## 🧰 Technology Stack

* **Frontend**: React.js (Vite), React Router, Context API
* **Styling**: CSS
* **Auth & DB**: Firebase Authentication + Firestore
* **Charts**: Chart.js
* **Deployment**: Firebase Hosting / Vercel
