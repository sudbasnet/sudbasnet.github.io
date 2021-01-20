import React from 'react';
import ResumePdf from "../../../../../assets/basnet.pdf";

const Summary: React.FC = () => {
    return <div>
        <div className="key email">sudbasnet10@gmail.com <br /> ---------------------</div>
        <ul>
            <li className="summary-li"><span className="key">Name:</span> Sudeep Basnet</li>
            <li className="summary-li"><span className="key">Interests:</span> Software Development, Data Science </li>
            <li className="summary-li"><span className="key">Skills:</span> Python, TypeScript, JavaScript, C#, R, SQL</li>
            <li className="summary-li"><span className="key">Status:</span> Open to Job Oppurtunities</li>
            <li className="summary-li"><span className="key">2019/10 - Current:</span> Technical Consultant</li>
            <li className="summary-li"><span className="key">2016/01 - 2019/09:</span> Grad. Research Assistant</li>
            <li className="summary-li"><span className="key">2012/07 - 2016/12:</span> Engineer - Software & Data</li>
            <li className="summary-li"><span className="key">Education:</span> M.S. in Computer Science (2019)</li>
            <li className="summary-li"><span className="key">Resume:</span><a target="_blank" rel="noreferrer" href={ResumePdf}
            className="about-link" download="basnet-resume.pdf">[Download]</a></li>
        </ul>
    </div>
};

export default Summary;