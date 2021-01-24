import React from 'react';
import ResumeDownloadLink from '../ResumeDownloadLink';

const Summary: React.FC = () => {
    return <div>
        <div className="key email">sudbasnet10@gmail.com <br /> ---------------------</div>
        <ul>
            <li className="summary-li"><span className="key">Name:</span> Sudeep Basnet</li>
            <li className="summary-li"><span className="key">Interests:</span> Software Development</li>
            <li className="summary-li"><span className="key">Skills:</span> Python, TypeScript, C#, SQL, NoSQL</li>
            <li className="summary-li"><span className="key">Other:</span> Node, React, Vue, Database Design, GIT</li>
            <li className="summary-li"><span className="key">Status:</span> Open to Job Oppurtunities</li>
            <li className="summary-li"><span className="key">2019/10 - Current:</span> Technical Consultant</li>
            <li className="summary-li"><span className="key">2016/01 - 2019/09:</span> Grad. Research Assistant</li>
            <li className="summary-li"><span className="key">2012/07 - 2016/12:</span> Data (Software) Engineer</li>
            <li className="summary-li"><span className="key">Education:</span> M.S. in Computer Science (2019)</li>
            <li className="summary-li"><span className="key">Resume:</span> <ResumeDownloadLink /></li>
        </ul>
    </div>
};

export default Summary;