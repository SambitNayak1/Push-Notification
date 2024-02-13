importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBjPkG2sr08byc2oZlz9SbXb5JcglLp8SA",
  authDomain: "fir-cfeee.firebaseapp.com",
  projectId: "fir-cfeee",
  storageBucket: "fir-cfeee.appspot.com",
  messagingSenderId: "826356252031",
  appId: "1:826356252031:web:c2bd7a65f72f6b63822e4a",
  measurementId: "G-5XWNEHC0R4",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
