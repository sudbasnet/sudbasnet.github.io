import React from 'react';
import './Dialog.css';

const Dialog: React.FC<{ dialog: string }> = props => {
    return <div className="dialog-box">
        <span className="dialog-span typed-element"></span>
        {props.dialog}
    </div>
}

export default Dialog;