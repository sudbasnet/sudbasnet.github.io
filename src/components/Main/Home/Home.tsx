import React, { Component } from 'react';
import DIALOGS from './dialogs';
import Terminal from './Terminal/Terminal';

const initialDialog = DIALOGS["Start"]

class Home extends Component {
    state: { questions: [String], dialog: String, showDialog: Boolean };
    // maybe its better to let App handle this. there is not alot of point 
    // doing this here

    constructor(props: { dialog: String, questions: [String] }) {
        super(props);
        this.state = {
            dialog: props.dialog,
            questions: props.questions,
            showDialog: true
        }
    }


    updateDialogHandler(): void {

    }


    render() {
        return <Terminal />
    }
}

export default Home;