import React from 'react';
import './Terminal.css';
import AboutMe from './AboutMe/AboutMe';
import Summary from './Summary/Summary';
import TabSelector from './TabSelector';
import { questionsType } from '../dialogs';


interface ITerminalProps {
    dialog: string;
    questions: questionsType;
    updateDialog: (goto: string) => void;
    displayTab: string;
    changeTab: (requestingTab: string) => void;
}

const Terminal: React.FC<ITerminalProps> = props => {
    let selectedTab = <Summary />;
    if (props.displayTab === 'default') {
        selectedTab = <AboutMe dialog={props.dialog} questions={props.questions} updateDialog={props.updateDialog} />
    }
    return <div className="terminal-section">
        <div className="terminal-content">
            <TabSelector displayTab={props.displayTab} changeTab={props.changeTab} />
            {selectedTab}
        </div>
    </div>
}

export default Terminal;