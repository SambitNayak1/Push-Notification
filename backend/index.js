const express = require("express");
const admin = require("firebase-admin");

const app = express();

app.use(express.json());

// Initialize Firebase Admin SDK
const serviceAccount = require("/home/dell/Projects/notify-app/backend/fir-cfeee-firebase-adminsdk-61o48-371a82afd7.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

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

// Function to get the user's FCM token based on their name (dummy function, replace with your actual logic)
async function getUserFCMTokenByName(name) {
  // Replace this with your actual logic to retrieve the user's FCM token from a database or other source
  // For demonstration purposes, we are returning a hardcoded FCM token
  return "dYjqmErgPlXk0WuOxH-tIe:APA91bHc4EC3mmyv9_Uh5Qk_lqDhXk0paJydGC0tAiJEbtydI3yr5qmSb2kOaMsj6XPQnsu81msR4WtIx9f4suUb3RZx0QdrUTTiY1M0TrzB2DQQH7vfIWB5K__bLq8toP2FEtVdBT-w";
}

// Function to send push notification
async function sendPushNotification(token, title, body) {
  const message = {
    token: token,
    notification: {
      title: title,
      body: body,
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Successfully sent message:", response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

// Start the Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
