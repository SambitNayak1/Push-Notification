// index.js

const express = require("express");
const {
  admin,
  getUserFCMTokenByName,
  sendPushNotification,
} = require("./firebaseAdmin");

const app = express();

app.use(express.json());

// Endpoint for your login API
app.post("/login", async (req, res) => {
  try {
    // Your login logic here...
    const { name } = req.body;

    // Assuming you have a way to get the user's FCM token dynamically
    const userFCMToken = await getUserFCMTokenByName(name);

    // Send a push notification
    await sendPushNotification(
      userFCMToken,
      "Login Successful",
      "Welcome back!"
    );

    // Send a response to the client
    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
