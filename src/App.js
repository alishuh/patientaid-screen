import React, { useState } from "react";
import EntryPage from "./entrypage";
import TalkingPage from "./talkingpage";
import SummaryPage from "./summarypage";
import Logo from "./images/patientaidlogo.png";
import "./App.css";

const App = () => {
    const [currentPage, setCurrentPage] = useState("entry");
    const [painLevel, setPainLevel] = useState([]);
    const [waitTime, setWaitTime] = useState(0);

    const handleNext = () => {
        if (currentPage === "entry") {
            setCurrentPage("talking");
        } else if (currentPage === "talking") {
            // Simulate backend calculation of wait time
            setWaitTime(Math.floor(Math.random() * 30) + 1);
            setCurrentPage("summary");
        }
    };

    const handleReset = () => {
        setCurrentPage("entry");
        setPainLevel([]);
        setWaitTime(0);
    };

    return (
        <div>
            <img src={Logo} alt="PatientAid Logo" className="logo" />
            {currentPage === "entry" && <EntryPage onNext={handleNext} />}
            {currentPage === "talking" && (
                <TalkingPage
                    onSummary={(painLevel) => {
                        setPainLevel(painLevel);
                        handleNext();
                    }}
                />
            )}
            {currentPage === "summary" && (
                <SummaryPage
                    painLevel={painLevel}
                    waitTime={waitTime}
                    onReset={handleReset}
                />
            )}
        </div>
    );
};

export default App;
