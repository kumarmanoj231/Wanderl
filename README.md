# 🌍 Wanderl / Sight

### A full-stack travel and accommodation platform built with Node.js, Express, MongoDB, and EJS.

Wanderl is a travel-focused web application that allows users to discover accommodation listings, explore destinations, create and manage their own listings, and share reviews.

The project follows an **MVC architecture** and combines server-side rendered EJS views with MongoDB, Passport authentication, Cloudinary image storage, and location-based features.

<p align="center">
  <a href="https://wanderl.onrender.com/">
    <img src="https://img.shields.io/badge/Live%20Demo-Wanderl-00A86B?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/kumarmanoj231/Wanderl">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

## 📸 Project Preview

<p align="center">
  <img src="preview.png" alt="Wanderl project preview" width="900">
</p>

> A visual overview of the Wanderl interface and its main travel discovery features.

---

## ✨ What is Wanderl?

Wanderl is a full-stack web application designed around the idea of making travel accommodation discovery simple and accessible.

Users can browse available listings, search for destinations, explore categories, view detailed property information, and interact with listings through reviews.

Authenticated users can also create, edit, and delete their own listings.

The application is structured using the **Model-View-Controller (MVC)** pattern to keep database logic, application logic, routing, and presentation cleanly separated.

---

## 🚀 Key Features

### 🏡 Listing Management

- Browse available accommodation listings
- View detailed listing information
- Create new listings
- Edit existing listings
- Delete owned listings
- Upload listing images
- Store images using Cloudinary

### 🔎 Search & Discovery

- Search for travel listings
- Explore listings by category
- Browse destinations and locations
- Dedicated category filtering routes

Available categories include:

- Trending
- Rooms
- Cities
- Mountains
- Castles
- Pools
- Camping
- Farms
- Arctic
- Domes
- Boats

### 👤 Authentication

- User registration
- Secure login
- Logout functionality
- Session-based authentication
- Protected listing operations
- User profile page

Authentication is implemented using **Passport.js** and `passport-local-mongoose`.

### ⭐ Reviews

- Add reviews to listings
- Rate listings from 1–5
- Delete your own reviews
- Associate reviews with authenticated users

### ☁️ Image Uploads

Listing images are uploaded through **Multer** and stored using **Cloudinary**.

This keeps image storage separate from the application server and makes uploaded media easier to manage.

### 🛡️ Validation & Authorization

The application includes:

- Joi-based request validation
- Authentication middleware
- Listing ownership checks
- Review-author authorization
- Custom error handling
- Flash messages for user feedback

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Backend | Express.js |
| Frontend | EJS, HTML, CSS, JavaScript |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | Passport.js |
| Sessions | Express Session |
| Session Store | Connect Mongo |
| Image Storage | Cloudinary |
| File Uploads | Multer |
| Validation | Joi |
| Templates | EJS + EJS Mate |
| HTTP Method Support | Method Override |
| Deployment | Render |

The repository currently targets **Node.js 20.11.0** and uses the dependencies defined in `package.json`. :contentReference[oaicite:1]{index=1}

---

## 🏗️ Architecture

Wanderl follows an MVC architecture:

```text
                    ┌─────────────────┐
                    │     Browser     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Express     │
                    │     Routes      │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌────────────┐  ┌───────────┐
        │Controllers│  │ Middleware │  │   Utils   │
        └─────┬────┘  └────────────┘  └───────────┘
              │
              ▼
        ┌────────────┐
        │   Models   │
        │  Mongoose  │
        └─────┬──────┘
              │
              ▼
        ┌────────────┐
        │  MongoDB   │
        └────────────┘

              │
              ▼
        ┌────────────┐
        │    EJS     │
        │   Views    │
        └────────────┘
