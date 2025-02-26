# 🎥 VideoX Backend Project Documentation

## 🚀 Introduction

**VideoX** is a full-fledged backend for a video hosting platform similar to YouTube. Built with **Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, and other modern technologies**, it provides all the essential features needed for a robust video streaming platform.

## 🌟 Features

- 🔐 User Authentication
  - Login, Signup, Logout
  - JWT & Refresh Tokens
  - Change Password
- 📹 Video Management
  - Upload Videos
  - Like & Dislike
  - Comment & Reply
- 📌 Subscription System
  - Subscribe & Unsubscribe to channels
- 📝 User Profile Management
  - Update Avatar & Cover Image
  - Edit Account Details
- ⏳ Watch History Tracking
- 📜 Secure API with JWT Authentication

## 🛠️ Technologies Used

- **Backend Framework:** ⚡ Node.js with Express.js
- **Database:** 🗄️ MongoDB with Mongoose
- **Authentication:** 🔑 JWT, bcrypt
- **File Uploads:** 📤 Multer
- **Middleware:** 🛡️ Express Middleware (CORS, Body-parser, Helmet, etc.)
- **Storage & Media Processing:** ☁️ Cloudinary
- **Real-time Updates:** 🔄 WebSockets
- **Deployment:** 🚢 Docker, ☁️ AWS EC2, or 🚀 Heroku

## 📚 Libraries Used

- **bcryptjs** – Encrypts and hashes passwords for secure authentication.
- **cloudinary** – Handles media storage and optimization in the cloud.
- **cookie-parser** – Parses cookies for better request handling.
- **cors** – Enables Cross-Origin Resource Sharing for secure API access.
- **dotenv** – Manages environment variables securely.
- **express** – A lightweight and powerful web framework for Node.js.
- **jsonwebtoken** – Implements JWT authentication for secure user sessions.
- **mongoose** – ODM (Object Data Modeling) for MongoDB with schema validation.
- **mongoose-aggregate-paginate-v2** – Enables pagination for MongoDB aggregation queries.
- **multer** – Handles file uploads efficiently.

---

## 📌 Installation & Setup

### 📂 Clone the Repository

```sh
git clone https://github.com/your-repo/videox.git
cd videox
```

### 📦 Install Dependencies

```sh
npm install
```

### ⚙️ Configure Environment Variables

Create a `.env` file in the root directory and add the required configuration:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REFRESH_SECRET=your_refresh_token_secret
CLOUDINARY_URL=your_cloudinary_url
```

### ▶️ Start the Server

```sh
npm run dev
```

---

## 📡 API Routes

### **🔐 Authentication Routes**

```js
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
```

### **🖼️ User Profile Routes**

```js
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);
router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
```

### **📜 Watch History Route**

```js
router.route("/history").get(verifyJWT, getWatchHistory);
```

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a new branch (`feature-branch`)
3. 💾 Commit your changes
4. 🚀 Push to the branch
5. 🔁 Open a Pull Request

---

## 📧 Contact

For any issues or suggestions, feel free to create an issue or reach out to the maintainers. 🚀
