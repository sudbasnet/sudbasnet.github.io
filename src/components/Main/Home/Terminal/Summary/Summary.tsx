import React from 'react';
import ResumeDownloadLink from '../ResumeDownloadLink';

const Summary: React.FC = () => {
    return <div>
        <div className="key email">sudbasnet10@gmail.com <br /> ---------------------</div>
        <ul>
            <li className="summary-li"><span className="key">Name:</span> Sudeep Basnet</li>
            <li className="summary-li"><span className="key">Interests:</span> Software Eng. & Web Development</li>
            <li className="summary-li"><span className="key">Skills:</span> 
                <img className="skill-icon" alt="Python" title="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <img className="skill-icon" alt="Dart" title="Dart" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" />
                <img className="skill-icon" alt="TypeScript" title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
                <img className="skill-icon" alt="JavaScript" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img className="skill-icon" alt="React" title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img className="skill-icon" alt="Angular" title="Angular" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />
                <img className="skill-icon" alt="Java" title="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" />
                <img className="skill-icon" alt="NodeJS" title="NodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                <img className="skill-icon" alt="Git" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <img className="skill-icon" alt="Html" title="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                <img className="skill-icon" alt="Sass" title="Sass" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            </li>
            <li className="summary-li"><span className="key">Status:</span> Open to Opportunities</li>
            <li className="summary-li"><span className="key">2021/06 - Current:</span> Software Engineer</li>
            <li className="summary-li"><span className="key">2019/10 - 2021/05:</span> Technical Consultant</li>
            <li className="summary-li"><span className="key">2016/01 - 2019/09:</span> Graduate Research Assistant</li>
            <li className="summary-li"><span className="key">2012/07 - 2016/12:</span> Data/Software Engineer</li>
            <li className="summary-li"><span className="key">Education:</span> M.S. in Computer Science (2019)</li>
            <li className="summary-li"><span className="key">Resume:</span> <ResumeDownloadLink /></li>
        </ul>
    </div>
};

export default Summary;