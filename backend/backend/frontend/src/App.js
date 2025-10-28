import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/message`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Failed to connect to backend."));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React Frontend on AWS</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
