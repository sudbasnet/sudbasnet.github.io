import React from 'react';
import './Question.css';

const Question: React.FC<{ question: string }> = props => {
    return <button className="q-button">{props.question}<span className="blinking">_</span></button>
}

export default Question;