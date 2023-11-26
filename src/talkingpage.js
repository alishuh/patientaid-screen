// VoiceInteractionPage.js
import React, { useState, useEffect } from "react";

const TalkingPage = ({ onSummary }) => {
  const [painLevel, setPainLevel] = useState(0);
  const [symptom, setSymptom] = useState("");

  useEffect(() => {
    // Fetch the symptom from the backend and set it in the state
    fetchSymptom().then((response) => {
      setSymptom(response.symptom);
    });
  }, []);

  const fetchSymptom = () => {
    // Simulate fetching the symptom from the backend
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ symptom: "Example symptom" });
      }, 1000);
    });
  };

  const handleFinish = () => {
    onSummary(painLevel);
  };

  return (
    <div>
      <h1>Tell us your problem</h1>

      <div>
        {/* Display the symptom */}
        <p>Symptom: {symptom}</p>
      </div>

      <div>
        {/* Input for pain level */}
        <label htmlFor="painLevel">Enter your pain level (1-10):</label>
        <input
          type="number"
          id="painLevel"
          min="1"
          max="10"
          value={painLevel}
          onChange={(e) => setPainLevel(parseInt(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleFinish}>Finish</button>
      </div>
    </div>
  );
};


export default TalkingPage;
