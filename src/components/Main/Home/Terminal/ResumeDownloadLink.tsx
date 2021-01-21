import React from 'react';
import ResumePdf from "../../../../assets/basnet.pdf";

const ResumeDownloadLink: React.FC = () => {
    return <a target="_blank" rel="noreferrer" href={ResumePdf} className="about-link" download="basnet-resume.pdf">[Download]</a>
}

export default ResumeDownloadLink;