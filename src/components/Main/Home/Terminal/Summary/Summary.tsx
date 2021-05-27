import React from 'react';
import ResumeDownloadLink from '../ResumeDownloadLink';

const Summary: React.FC = () => {
    return <div>
        <div className="key email">sudbasnet10@gmail.com <br /> ---------------------</div>
        <ul>
            <li className="summary-li"><span className="key">Name:</span> Sudeep Basnet</li>
<<<<<<< HEAD
            <li className="summary-li"><span className="key">Interests:</span> Software Engineering</li>
=======
            <li className="summary-li"><span className="key">Interests:</span> Software Eng. & Web Development</li>
>>>>>>> bf3ae9c2814403824ac6b0029004c23319d5964b
            <li className="summary-li"><span className="key">Skills:</span> Python, TypeScript, C#, SQL, NoSQL</li>
            <li className="summary-li"><span className="key">Other:</span> Node, React, Vue, GIT</li>
            <li className="summary-li"><span className="key">Status:</span> Open to Job Oppurtunities</li>
            <li className="summary-li"><span className="key">2019/08 - Current:</span> Software Engineer</li>
            <li className="summary-li"><span className="key">2019/10 - 2021/07:</span> Technical Consultant</li>
            <li className="summary-li"><span className="key">2016/01 - 2019/09:</span> Grad. Research Assistant</li>
            <li className="summary-li"><span className="key">2012/07 - 2016/12:</span> Data/Software Engineer</li>
            <li className="summary-li"><span className="key">Education:</span> M.S. in Computer Science (2019)</li>
            <li className="summary-li"><span className="key">Resume:</span> <ResumeDownloadLink /></li>
        </ul>
    </div>
};

export default Summary;