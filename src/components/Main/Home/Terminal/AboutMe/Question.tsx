import React from 'react';


interface IQuestionProps {
    question: string;
    goto: string;
    updateDialog: (goto: string) => void;
}

const Question: React.FC<IQuestionProps> = props => {
    return <button className="q-button" onClick={() => props.updateDialog(props.goto)}>{props.question}
        <span className="blinking">_</span>
    </button>
}

export default Question;