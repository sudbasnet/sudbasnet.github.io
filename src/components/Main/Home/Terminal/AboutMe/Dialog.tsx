import React from 'react';
import Typing from './Typing';

const Dialog: React.FC<{ dialogKey: string, dialog: string }> = props => {
    let attachResume = false;
    if (props.dialogKey === 'resumepre' || props.dialogKey === 'resume'){
        attachResume = true;
    }
    return <div className="dialog-box">
        <span className="dialog-span typed-element"></span>
        <Typing dialog={props.dialog} waitTimeMs={30} attachResume={attachResume}></Typing>
    </div>
}

export default Dialog;