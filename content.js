// All site content lives here. Both index.html and cv.html render from this file,
// so editing it updates the webpage and the CV together.
window.SITE = {
    name: "Adrian Hu",
    role: "Undergraduate Student",
    email: "adrihu@umich.edu",
    affiliation: "University of Michigan, Ann Arbor",
    location: "Ann Arbor, MI, USA",
    avatar: "assets/images/avatar.jpg",
    links: {
        scholar: "#",
        github: "#",
        linkedin: "#",
        website: "",
    },

    // Paragraphs may contain inline HTML (<strong>, <a>, <em>).
    // Add class="marked" to a <strong> or <span> to get a hand-drawn underline under it.
    bio: [
        "I am a junior undergraduate studying <strong>Computer Science</strong> at the University of Michigan. My research focuses on <strong class=\"marked\">robot motion planning</strong> through the lens of <strong>mixed-integer and convex optimization</strong>, with applications to multi-agent and tethered robot systems.",
        "This is placeholder text. Add advisors, labs, or anything else you'd like visitors to know, for example <a href=\"#\">a link to your lab</a>.",
    ],

    news: [
        { date: "2026.10", text: "Submitted <em>MICP-MCMP</em> to <strong>RA-L</strong>." },
        { date: "2026.09", text: "Submitted <em>T-MICP</em> to <strong>ICRA</strong>." },
        { date: "2026.09", text: "Started my junior year at the University of Michigan." },
    ],

    education: [
        {
            school: "University of Michigan, Ann Arbor",
            degree: "B.S.E. in Computer Science",
            dates: "2024 – 2028 (expected)",
            details: "Placeholder: GPA, honors, minors.",
        },
    ],

    research: [
        {
            label: "01 · OPTIMIZATION",
            title: "Mixed-Integer Conic Programming for Planning",
            text: "Formulating combinatorial motion planning problems as mixed-integer conic programs to find globally optimal, collision-free trajectories in continuous space.",
            tags: ["MICP", "graph of convex sets", "trajectory optimization"],
        },
        {
            label: "02 · ROBOTICS",
            title: "Multi-Agent & Tethered Robot Systems",
            text: "Planning for robots with coupled constraints, from teams of agents sharing a workspace to robots whose tethers must avoid tangling and obstacles.",
            tags: ["multi-agent planning", "tethered robots", "motion planning"],
        },
    ],

    // status: "review" or "progress" (matches the tabs on the page)
    // figure: shown on the card; sim: shown on hover/tap (optional)
    publications: [
        {
            status: "review",
            title: "MICP-MCMP: Mixed-Integer Conic Programming for Multi-Agent Combinatorial Motion Planning in Continuous Space",
            authors: ["Adrian Hu", "Coauthor One", "Coauthor Two"],
            venue: "Submitted to IEEE Robotics and Automation Letters (RA-L)",
            pdf: "#",
            link: "#",
            figure: "assets/papers/mcmp-illus.jpg",
            sim: "assets/papers/mcmp-sim.gif",
        },
        {
            status: "review",
            title: "T-MICP: Mixed-Integer Conic Programming for Tethered Robot Motion Planning",
            authors: ["Adrian Hu", "Coauthor One", "Coauthor Two"],
            venue: "Submitted to IEEE International Conference on Robotics and Automation (ICRA)",
            pdf: "#",
            link: "#",
            figure: "assets/papers/tmicp-illus.jpg",
            sim: "assets/papers/tmicp-sim.gif",
        },
        {
            status: "progress",
            title: "TRP-GCS: Tethered Robot Planning with Graph of Convex Sets",
            authors: ["Adrian Hu", "Coauthor One", "Coauthor Two"],
            venue: "In preparation for IEEE Transactions on Robotics (T-RO)",
        },
    ],

    courses: {
        currentTerm: "Fall 2026",
        current: [
            ["EECS 370", "Introduction to Computer Organization"],
            ["EECS 376", "Foundations of Computer Science"],
            ["EECS 485", "Web Systems"],
            ["EECS 491", "Introduction to Distributed Systems"],
        ],
        // Shown before "Show all"; the rest stay folded on the webpage (the CV lists all).
        featured: ["EECS 203", "MATH 217", "EECS 216", "EECS 281", "EECS 301", "EECS 445"],
        completed: [
            ["ENGR 151", "Accelerated Intro to Computers and Programming"],
            ["MATH 156", "Applied Honors Calculus II"],
            ["PHYSICS 160", "Honors Physics I"],
            ["EECS 203", "Discrete Mathematics"],
            ["EECS 215", "Introduction to Electronic Circuits"],
            ["EECS 216", "Introduction to Signals and Systems"],
            ["MATH 217", "Linear Algebra"],
            ["EECS 230", "Electromagnetics I"],
            ["MATH 255", "Applied Honors Calculus III"],
            ["MATH 256", "Applied Honors Calculus IV"],
            ["EECS 270", "Introduction to Logic Design"],
            ["EECS 280", "Programming and Introductory Data Structures"],
            ["EECS 281", "Data Structures and Algorithms"],
            ["EECS 301", "Probabilistic Methods in Engineering"],
            ["EECS 445", "Introduction to Machine Learning"],
        ],
    },

    contactBlurb: "I'm always happy to talk about research, robotics, or optimization. Feel free to reach out.",
};
