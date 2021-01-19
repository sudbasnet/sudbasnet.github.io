import React from 'react';
import Typing from './Typing';

const Dialog: React.FC<{ dialog: string }> = props => {
    return <div className="dialog-box">
        <span className="dialog-span typed-element"></span>
        <Typing dialog={props.dialog} waitTimeMs={30}></Typing>
    </div>
}

export default Dialog;