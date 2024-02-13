// firebaseAdmin.js

const admin = require("firebase-admin");
const path = require("path");

// Construct the path to the service account key
const serviceAccountPath = path.join(
  __dirname,
  "fir-cfeee-firebase-adminsdk-61o48-371a82afd7.json"
);

// Initialize Firebase Admin SDK
const serviceAccount = require(serviceAccountPath);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const getUserFCMTokenByName = async (name) => {
  // Replace this with your actual logic to retrieve the user's FCM token
  return "dYjqmErgPlXk0WuOxH-tIe:APA91bHc4EC3mmyv9_Uh5Qk_lqDhXk0paJydGC0tAiJEbtydI3yr5qmSb2kOaMsj6XPQnsu81msR4WtIx9f4suUb3RZx0QdrUTTiY1M0TrzB2DQQH7vfIWB5K__bLq8toP2FEtVdBT-w";
};

const sendPushNotification = async (token, title, body) => {
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
};

module.exports = {
  admin,
  getUserFCMTokenByName,
  sendPushNotification,
};
