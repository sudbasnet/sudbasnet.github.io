type conversation = {
    title: string,
    tags: string,
    body: string,
    position: { x: number, y: number },
    colorId: number
}[];

const jsonText: conversation = [
    {
        title: "Start",
        tags: "",
        body: "Hi.^1200 I'm Sudeep.^1200 Welcome to my website...\n[[Valar Morghulis!|valar]]\n[[Howdy!|conversation]]\n[[Hey!|conversation]]\n",
        position: {
            "x": -868,
            "y": -337
        },
        colorId: 2
    },
    {
        title: "conversation",
        tags: "",
        body: "hmm..\n[[Tell me about yourself.|intro]]",
        position: {
            "x": -595,
            "y": -134
        },
        colorId: 1
    },
    {
        title: "valar",
        tags: "",
        body: "Valar Dohaeris!\n[[hmm...|conversation]]\n",
        position: {
            "x": -593,
            "y": -428
        },
        colorId: 0
    },
    {
        title: "intro",
        tags: "",
        body: "I am currently working as a Technical Consultant in Minnepolis. In 2019, I got my Master's in Computer Science. Before that, I had 4.5 years of professional experience as a Software Eng in Data Operations. \n[[Tell me about your current position.|logic]]\n[[Where did you graduate from?|mscs]]\n[[Tell me about your Software Eng. work.|work]]\n\n",
        position: {
            "x": -288,
            "y": -130
        },
        colorId: 0
    },
    {
        title: "mscs",
        tags: "",
        body: "I got my M.Sc. degree in Aug-2019 from the University of Nebraska - Lincoln.\n[[Why did you get a Master's degree?|whymasters]]\n[[What was your focus on during your studies?|gradwork]]\n[[And what was your previous work about?|work]]",
        position: {
            "x": 7,
            "y": 138
        },
        colorId: 0
    },
    {
        title: "jobsearch",
        tags: "",
        body: "I'm open to new opportunities\n[[What are your interests?|interests]]",
        position: {
            "x": 657,
            "y": -137
        },
        colorId: 0
    },
    {
        title: "interests",
        tags: "",
        body: "I think of myself as a GENERALIST, I have varying interests (from web dev to game dev to digital art to scientific research) but they all fall under the umbrellas of Software Development and Data Science. \n[[What kind of skills you got?|skills]]\n[[How do I contact you?|email]]",
        position: {
            "x": 939,
            "y": -136
        },
        colorId: 0
    },
    {
        title: "skills",
        tags: "",
        body: "I'm pretty good with Python, C#, Javascript (Node), R, Angular, PHP and HTML/CSS. Experienced in Data Analysis, Data Visualization, Database Development, Systems Admin.(LINUX), Cloud DataWarehousing, Oracle.\n[[Lets look at your resume.|resume]]\n[[How can we get in touch?|email]]",
        position: {
            "x": 1227,
            "y": -137
        },
        colorId: 0
    },
    {
        title: "work",
        tags: "",
        body: "I worked with Oracle PL/SQL and Java to develop ETL tools and databases for large-scale Enterprise data solutions.\n[[So, why do Masters?|whymasters]]\n[[Did you also work during your studies?|gradwork]]\n[[Where can I find more details?|resumepre]]\n",
        position: {
            "x": 9,
            "y": -206
        },
        colorId: 0
    },
    {
        title: "email",
        tags: "",
        body: "You can contact me through email: sudbasnet10@gmail.com\n[[And your resume? |resume]]",
        position: {
            "x": 1061,
            "y": 142
        },
        colorId: 0
    },
    {
        title: "gradwork",
        tags: "",
        body: "I was primarily involved in research and development on spatial-data mining and Agent-based Modeling. I used Python, Java, R, JavaScript and SQL.\n[[I'd like to know more.|resumepre]]\n[[Still looking for jobs?|jobsearch]]\n",
        position: {
            "x": 370,
            "y": -126
        },
        colorId: 0
    },
    {
        title: "whymasters",
        tags: "",
        body: "I thought I had some gaps in my knowledge, so I decided to study Computer Science ^600 ... ^600 It was also for getting better job oppurtunities :)\n[[How did it go?|gradwork]]",
        position: {
            "x": 355,
            "y": 139
        },
        colorId: 0
    },
    {
        title: "resumepre",
        tags: "",
        body: "Please have a look at my resume.\n[[Are you open to new job opportunities?|jobsearch]]",
        position: {
            "x": 373,
            "y": -392
        },
        colorId: 0
    },
    {
        title: "resume",
        tags: "",
        body: "Please find my resume in the header above.\n[[RESTART!|Start]]",
        position: {
            "x": 1413,
            "y": 139
        },
        colorId: 0
    },
    {
        title: "logic",
        tags: "",
        body: "I've been working at Logic since Oct-2019 as a Technical Consultant, functioning as a .NET Developer. My Expertise is in Software and Database Dev, Data Warehousing, and Reporting.\n[[And the work before that?|work]]\n[[And your masters?|mscs]]",
        position: {
            "x": -296,
            "y": 132
        },
        colorId: 0
    }
];

type questionsType = [{ id: number, question: string, goto: string }];
type conversationHashType = { [title: string]: { tags: string, message: string, questions: questionsType } }

/* 
YARN is a software that can be used to generate a conversation-like JSON
text, we need to parse this text to use in our application
*/
const parseYarn = (jsonText: conversation): conversationHashType => {
    let questions: questionsType = [{ id: -99, question: "", goto: "" }];
    const conversations: conversationHashType = { "dummy": { tags: "", message: "", questions: questions } };

    jsonText.forEach(conv => {
        let body = conv.body.split("\n");
        let qExp: RegExp = /^\[\[.*\]\]$/;
        let questions: questionsType = [{ id: -99, question: "", goto: "" }];
        body.forEach((q, i) => {
            if (qExp.test(q)) {
                let qText = q.replace("[[", "").replace("]]", "");
                questions.push({
                    "id": i,
                    "question": qText.split("|")[0],
                    "goto": qText.split("|")[1]
                });
            }
        });
        conversations[conv.title] = { tags: "", message: body[0], questions: questions };
    });
    return conversations;
}

const DIALOGS = parseYarn(jsonText);

export default DIALOGS;
