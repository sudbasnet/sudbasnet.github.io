import React, { useState, useEffect } from 'react';
import ResumeDownloadLink from "../ResumeDownloadLink";

interface ITypingProps {
    dialog: string;
    waitTimeMs: number;
    attachResume: boolean;
} ;


const Typing: React.FC<ITypingProps> = props => {
    const dialog =  props.dialog;
    const [index, setIndex] = useState(0);
    const waitTimeMs = props.waitTimeMs;
    const attachResume = props.attachResume;
    // reset the index to 0, everytime the dialog changes
    useEffect(()=>setIndex(0), [dialog]); 

    // run once for each letter, as long as index updates
    useEffect(() => {
        if (index === dialog.length) return;

        const wait = setTimeout(()=> {
            setIndex((currentIndex) => currentIndex + 1);
        }, waitTimeMs);
        
        return () => clearTimeout(wait);
    }, [index, waitTimeMs, dialog]);

    if (attachResume && index >= dialog.length - 1) {
        return <span>{dialog} <ResumeDownloadLink/></span>
    } else {
        return <span>{dialog.substring(0, index)}</span>
    }
}

export default Typing;