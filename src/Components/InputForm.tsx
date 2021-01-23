import React, { useState } from 'react';
import { InputFormType } from './../Types/quiz_types'

const InputForm: React.FC<InputFormType> = ({ callback }) => {

    let [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState("");
    let [selectedNoOfQuestions, setSelectedNoOfQuestions] = useState(0);

    const handleSelection1 = (ev: any) => {
        setSelectedDifficultyLevel(ev.target.value);
    }
    const handleSelection2 = (ev: any) => {
        setSelectedNoOfQuestions(ev.target.value);
    }

    return (
        <div className="question-container">
            <form onSubmit={() => callback(selectedDifficultyLevel, selectedNoOfQuestions)} className="question-form">
                <h3>Select Difficulty Level</h3>
                <select onChange={handleSelection1} className="radio-input">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <h3>Enter Number of Questions</h3>
                <input type="number" name="questions" className="radio-input" onChange={handleSelection2} />

                <input type="submit" className="submit-input" />
            </form>
        </div>
    )
}

export default InputForm;