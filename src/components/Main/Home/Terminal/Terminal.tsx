import React from 'react';
import Question from './Question';
import Dialog from './Dialog';
import './Question.css';
import { questionsType } from '../dialogs';


const Terminal: React.FC<{ dialog: string, questions: questionsType }> = props => {
    return <div className="terminal-section">
        <div className="terminal-content">
            <div className="terminal-text">
                <Dialog dialog={props.dialog} />
                <div>
                    <ul className="question-list">
                        {props.questions.filter(q => q.id > 0).map(q =>
                        (
                            <li key={q.id}>
                                <Question key={q.id} question={q.question} />
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div >
        </div>
    </div>
}

export default Terminal;