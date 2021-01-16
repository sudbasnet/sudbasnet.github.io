import React from 'react';
import Dialog from './Dialog';
import Question from './Question';
import { questionsType } from '../../dialogs';

interface IAboutMeProps {
    dialog: string;
    questions: questionsType;
    updateDialog: (goto: string) => void;
}

const AboutMe: React.FC<IAboutMeProps> = (props) => (
    <div className="terminal-text">
        <Dialog dialog={props.dialog} />
        <div>
            <ul className="question-list">
                {props.questions.filter(q => q.id > 0).map(q =>
                (
                    <li key={q.id}>
                        <Question key={q.id} question={q.question} goto={q.goto} updateDialog={props.updateDialog} />
                    </li>
                )
                )}
            </ul>
        </div>
    </div >
)

export default AboutMe;