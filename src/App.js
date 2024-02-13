import "./App.css";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      //granted toeken
      const toeken = await getToken(messaging, {
        vapidKey:
          "BPg9JfpfhdOC1T1QiJqEaWHHRsZHcKeBPOfl7EislA9yy0K5d6O8AHhdl3I3yCKjI6QHMbRxk86i1zfKUDY5ce8",
      });
      console.log("Token Gen:-", toeken);
    } else if (permission === "denied") {
      alert("you denied the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <div className="App">
      <h1>Hello From Sambit</h1>
    </div>
  );
}

export default App;
