import { useState } from 'react';
import './Popup.css';

export default function Popup({onClose}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const teams = ["Australia", "India", "England", "New Zealand"];
    
    const questions = [
        "Select your team from ?",
        "Select your opponent team from ?",
        "What type of match would you like to play?", 
    ]

    // const types = ["20 overs", "50 overs"]

    const handleNext = () => {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(prevIndex => prevIndex + 1);
        }
    } 
    const handleBack = () => { 
        if (questionIndex > 0) {
            setQuestionIndex(prevIndex => prevIndex - 1);
        }
    }

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}> 
                <p>{ questions[questionIndex] }</p>
                <select name="question_1">
                    <option>Select country</option>
                    { teams.map((team, index) => (
                        <option key={index} value={team}>
                            {team}
                        </option>
                    ))}
                </select>   

                <div class="btn-container">
                    {questionIndex > 0 && ( <button className="btn back" onClick={handleBack}>Back</button> )}
                    {questionIndex < questions.length - 1 && ( <button className="btn next" onClick={handleNext}>Next</button> )}
                    <button class="btn close" onClick={onClose}>Close</button>
                </div>                
            </div>
        </div>
    );
}