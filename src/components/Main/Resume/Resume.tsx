import React from 'react';
import './Resume.css';
import ResumePdf from "../../../assets/basnet.pdf";

const Resume: React.FC = () => {
    return <main className="main-resume">
        <h2 className="heading1">Summary</h2>
        <p>A dedicated problem solver with professional experience in Software Development and Data Engineering. Graduated with a master’s degree in Computer Science from the University of Nebraska - Lincoln (Aug-2019). Has worked
            in Agile methodology, with large teams, and worked in Python, C#, Java, SQL and JavaScript on Windows and Unix platforms. Interested in Software Development.</p>

        <h3 className="heading2">Programming Skills:</h3>
        <p>Python, C#, Typescript, JavaScript, HTML/CSS, R, SQL, NoSQL</p>
        <p>Python might be my favorite programming language at the moment, especially for technical interviews and some personal projects. I have trained and worked with C# and TypeScript for my current job,
        I focused more on TypeScript and I enjoy it a bit more than any of the other languages I've recently learned, TypeScript is very stable, and there's alot of support for it these days, and you can do the whole MERN MEVN and MEAN stack with TypeScript.
        </p>
        <p> I have also worked extensively with SQL, Databases, and Data Models in my Data Engineering roles. It is where a substantial portion of my experience lie, but my primary interest area is Software Engineering.</p>

        <h3 className="heading2">Other Technical Skills:</h3>
        <p className="no-justify">NodeJS, React, Vue, GIT and SVN, Data Analysis, Data Visualization, Database Development, Azure DevOps, JIRA, Snowflake Cloud Data Warehouse, MicroStrategy</p>

        <h2 className="heading1">Work Experience</h2>

        <h3 className="job-title">Software Engineer
            <div className="duration"> June 2021 – Current</div>
        </h3>
        <p><a target="_blank" rel="noreferrer" className="resume-link" href="https://careers.google.com/">Google LLC, Sunnyvale, CA, USA</a></p>
        <p> I am going to build a CRM (Customer Relationship Management) for Google and learn alot from my very talented teammates. There are quite a few CRMs out there in the market,
        for example; SalesForce, HubSpot, Zendesk, etc. What I work on is built specifically for the infrastructure, software, and teams at Google. I am going to focus on the FrontEnd first,
            but after a while (hopefully) I will be taking care of pretty much the full architecture.</p>

        <h3 className="job-title">Technical Consultant
            <div className="duration"> Oct 2019 – May 2021</div>
        </h3>
        <p><a target="_blank" rel="noreferrer" className="resume-link" href="https://www.logicinfo.com/">Logic Information Systems, Bloomington, MN,
                USA</a></p>
        <p> My experience at Logic varies with each client, Logic’s clients range from mid-sized retailers to some of the largest retailers in the world, across nearly every type of retail business model including grocery,
            hardlines, softlines, fashion, and government. My main roles so far have been as a Software Developer, Data Engineer, and BI Developer. </p>
        <ul>
            <li>Developed omni-channel e-commerce solutions with C#, TypeScript, and HTML/CSS in .NET and .NET Core.</li>
            <li>Developed korn shell-script programs for data manipulation and application of business specific logic in Oracle’s enterprise data warehouse.</li>
            <li>Designed Cloud Data Warehouse in Snowflake along with stored procedures in JavaScript, and automated data loading with Python.</li>
            <li>Debugged and resolved issues in reporting dashboards in MicroStrategy Developer, MicroStrategy Architect and MicroStrategy Intelligence Server.</li>
        </ul>

        <h3 className="job-title">Graduate Research and Teaching Assistant
            <div className="duration"> Jan 2017 – Aug 2019</div>
        </h3>
        <p><a target="_blank" rel="noreferrer" className="resume-link" href="https://cse.unl.edu/">University of Nebraska – Lincoln (UNL)</a></p>
        <ul>
            <li>Developed Agent-based simulation models to simulate and predict social unrest on a geographic and temporal
                scale, in Repast Java. <a target="_blank" rel="noreferrer" className="resume-link"
                    href="https://github.com/sudbasnet/SocialUnrestMAS">Github
                    Link</a></li>
            <li>Developed a scalable clustering algorithm using Python to perform unsupervised learning on GIS data, with
                performance gain up to 60% compared to state-of-art algorithms. Published and presented Research Paper.</li>
            <li>Data Mining, Data Analysis and Data Management using Python and R, utilizing parallel computing on
                Nebraska’s second-fastest High-Performance Computing servers.</li>
            <li>Development and management of PHP backed application, and Data Visualization using HTML/CSS, KnockoutJS,
                Google Maps JavaScript API and MySQL database. <a target="_blank" rel="noreferrer" className="resume-link"
                    href="https://cse.unl.edu/~surge/">View</a></li>
        </ul>

        <h3 className="job-title">Data/Software Engineer
            <div className="duration">July 2012 – Dec 2016</div>
        </h3>
        <p>
            <a target="_blank" rel="noreferrer" className="resume-link" href="http://cotiviti.com.np/">Cotiviti Nepal, Kathmandu, Nepal (Subsidiary
                of Cotiviti Healthcare, Waltham MA)</a>
        </p>
        <ul>
            <li>Data Analysis of US healthcare data (HIPAA protected medical data). Prepared Analytical Reports per client-requirements using OBIEE and BIP.</li>
            <li>Implemented Oracle PL/SQL procedures, functions, triggers and packages for data management and statistical report generation on US healthcare data.</li>
            <li>Developed ETL procedures, documented and validated complex business rules for data transformation. Prepared technical specification, reviewed code, and performed unit testing for client-specific change requests.</li>
            <li>Optimized multiple large ETL processes by 60 – 70% in processing time using parallelization, re-designing back-end jobs, performance tuning, normalization and query optimization.</li>
            <li>Led multiple teams of Data and Software Engineers through different projects for 2 years. Responsible for Code Quality, Code Reviews, Design Reviews, Code documentation and Design documentation for maintainability.</li>
            <li>Software Development using Java and Oracle 11g on Windows and UNIX platforms for 1 year. Involved in Integration, Analysis, Design & Development, Testing and Production support phases.</li>
        </ul>


        <h2 className="heading1">Education</h2>

        <h3 className="job-title">Master of Science, Computer Science
            <div className="duration">Jan 2017 – August 2019</div>
        </h3>
        <p>
            <a target="_blank" rel="noreferrer" className="resume-link" href="https://cse.unl.edu/">University of Nebraska – Lincoln</a>
        </p>
        <p className="no-justify">
            <strong>Relevant Courses</strong>: <br />Design and Analysis of Algorithms, Data Structures, Machine Learning,
            Systems Administration
        </p>

        <form id='download' target="_blank" method="get" action={ResumePdf}>
            <button id='btn-download' type="submit">Download Resume</button>
        </form>
    </main>
}

export default Resume;