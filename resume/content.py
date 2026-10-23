"""Single source of truth for both resumes (designed PDF + ATS Word/PDF).
Edit text here, then run build.py. Plain words, short lines, no invented claims."""

NAME = "Chinnathambi Sundaram"
TITLE = "Senior Product Designer · Design Systems · AI-Assisted Design"
LOCATION = "Bengaluru, India"
AVAILABILITY = "Open to full-time or contract roles, on-site or remote"

CONTACT = [  # (label, text, url)
    ("Portfolio", "chinnathambis.github.io", "https://chinnathambis.github.io"),
    ("LinkedIn", "linkedin.com/in/chinnathambis", "https://www.linkedin.com/in/chinnathambis"),
    ("Email", "chinnathambi.sundaram@gmail.com", "mailto:chinnathambi.sundaram@gmail.com"),
    ("Phone", "+91 866 743 3702", "tel:+918667433702"),
]

SUMMARY = ("Senior product designer with 10+ years across B2B, B2C, SaaS, healthcare, fintech, "
           "e-commerce and enterprise products. I take products from problem framing and research "
           "through interaction design, prototyping and delivery. Strengths: design systems, design "
           "leadership, close work with product and engineering, and AI-assisted design.")

# Each job: company, role, dates, place, note, bullets, projects[(name, role_line, bullets)]
EXPERIENCE = [
    {
        "company": "Northline", "role": "Founder & Product Designer", "dates": "Oct 2026 – Present",
        "place": "Independent product", "note": "",
        "bullets": [
            "Defined and designed an automated crypto futures trading product, with a mobile app and real-time alerts.",
            "Wrote the product and technical spec, and designed every screen and safety rule, including risk limits that can block a trade but never change an open one.",
            "Directed the build with an AI coding agent (Claude Code), approving every design and deploy, with tests on every change.",
            "Took the product live with real money. A friends beta and a paid subscription are planned.",
        ],
        "projects": [],
    },
    {
        "company": "CX100", "role": "Senior Product Designer (L3)", "dates": "Jan 2022 – Oct 2026",
        "place": "Bengaluru, India", "note": "",
        "bullets": [
            "Led product design end to end: problem framing, research, interaction design, prototyping, testing and delivery.",
            "Worked with product, engineering and business stakeholders to turn user and business needs into design.",
            "Ran UX research and usability tests, and built reusable patterns and components for consistency at scale.",
            "Used rapid prototyping and AI-assisted workflows to explore options and share ideas quickly.",
        ],
        "projects": [
            ("QNB Egypt: Digital Banking Redesign", "Design Lead · about 18 months", [
                "Led a team of four designers redesigning QNB Egypt’s mobile and internet banking apps.",
                "Built the design system from scratch: tokens and variables, typography, colour themes, components and patterns, for the Regular and Private segments in light and dark themes.",
                "Delivered approved high-fidelity designs, prototypes and documentation, and handed them off to engineering.",
                "Worked with client stakeholders on requirements, design reviews and decisions.",
            ]),
            ("Amazon: Variations Discovery", "UX/UI Designer · client engagement Apr 2022 – Dec 2025", [
                "Worked in a US and Europe team with shared design ownership, helping shoppers find other sizes and flavours from Search.",
                "Research showed about 50% of participants missed the existing variation message. Explored six directions; tested concepts reached 80%+ interaction with the intended area and a top clarity rating of 4.58/5.",
                "Proposed design directions and owned parts of the final design, which launched to production.",
            ]),
        ],
    },
    {
        "company": "Plum Tree Group", "role": "Product Designer (freelance, part-time)", "dates": "Oct 2019 – May 2022",
        "place": "Remote", "note": "",
        "bullets": [
            "Designed future product concepts for healthcare and life-sciences enterprise clients, including Salesforce-based healthcare solutions.",
            "Created user flows, interaction designs, visual concepts and prototypes to explore ideas and align stakeholders.",
        ],
        "projects": [],
    },
    {
        "company": "INKONIQ Design Agency", "role": "UX/UI Designer", "dates": "Apr 2017 – Jan 2022",
        "place": "Bengaluru, India", "note": "",
        "bullets": [
            "Designed digital products for banking, healthcare, e-commerce and technology clients, including Infosys, HDFC Bank, Findmyhealth and Peritus AI.",
            "Worked across information architecture, UX strategy, interaction design, visual design and prototyping.",
            "Turned business requirements into design concepts and user flows with clients and cross-functional teams.",
        ],
        "projects": [],
    },
    {
        "company": "Capture Studio", "role": "UI Designer", "dates": "Jun 2016 – Apr 2017",
        "place": "Bengaluru, India", "note": "",
        "bullets": [
            "Designed brand identities and web and mobile interfaces, from first concept and user flows to visual design and delivery.",
        ],
        "projects": [],
    },
]

SKILLS = [  # (group, items)
    ("Product strategy", "Product thinking, problem framing, UX strategy, requirements analysis, end-to-end product design"),
    ("Research & validation", "UX research, usability testing, concept validation, user flows, iterative design"),
    ("Interaction design", "Information architecture, interaction design, prototyping, high-fidelity UI, responsive design"),
    ("Design systems", "Design systems, reusable components, design tokens and variables, typography, light and dark themes"),
    ("Leadership", "Design reviews, stakeholder alignment, cross-functional collaboration, mentoring, design quality"),
    ("AI tools", "ChatGPT, Claude, Claude Code, Cursor, Figma AI, Figma Make, v0, Lovable, Adobe Firefly, Google Gemini, Relume, Perplexity"),
    ("Other tools", "Figma, Slack, Microsoft Teams, Notion"),
]

EDUCATION = [  # (degree, school, years)
    ("MCA", "National Institute of Technology Calicut (NITC)", "2013 – 2016"),
    ("B.Sc. Computer Science", "Don Bosco College of Arts & Science", "2009 – 2012"),
]

LANGUAGES = "English (fluent), Tamil (native)"
