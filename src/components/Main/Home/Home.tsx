import React, { Component, Fragment } from 'react';
import DIALOGS, { questionsType } from './dialogs';
import Terminal from './Terminal/Terminal';
import Game from './Game/Game';

const initialDialog = DIALOGS["Start"]

class Home extends Component {
    state: { questions: questionsType, dialog: string, displayTab: string };

    constructor(props: any) {
        super(props);
        this.state = {
            dialog: initialDialog.message,
            questions: initialDialog.questions,
            displayTab: 'default'
        }
    }

    updateDialogHandler(goto: string): void {
        const newDialog = DIALOGS[goto].message;
        const newQuestions = DIALOGS[goto].questions;
        this.setState({ dialog: newDialog, questions: newQuestions });
    }

    changeTabHandler(requestingTab: string): void {
        const currentTab = this.state.displayTab;
        if (requestingTab !== currentTab) {
            const changeTo = currentTab === 'default' ? 'summary' : 'default';
            this.setState({ displayTab: changeTo });
        }
    }

    render() {
        const questions = this.state.questions;
        const dialog = this.state.dialog;
        const displayTab = this.state.displayTab;

        return <Fragment>
            <Game />
            <Terminal dialog={dialog} questions={questions} displayTab={displayTab} changeTab={this.changeTabHandler.bind(this)} updateDialog={this.updateDialogHandler.bind(this)} />
        </Fragment>
    }
}

export default Home;