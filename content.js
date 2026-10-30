window.PORTFOLIO = {

 
  site: {
    name: "Nguyen Vu Nguyen Khoi",
    nickname: "Cube-tie Guy",
    tagline: "Driven by curiosity, grounded in reality.",
    intro: "With a keen interest in computer science, artificial intelligence, and human thinking, curiosity extends to exploring questions, building projects, and discovering patterns in unexpected places.",
    email: "nguyenvunguyenkhoi.hocsinh@gmail.com",
    links: [
      { label: "GitHub", url: "" },     // e.g. "https://github.com/your-username"
      { label: "LinkedIn", url: "" }
    ]
  },

  sections: [
    { id: "about",        file: "about.html",        num: "01", title: "About Me",              short: "About",        color: "red",    face: "front",  blurb: "Who I am and what drives me." },
    { id: "education",    file: "education.html",    num: "02", title: "Education",             short: "Education",    color: "blue",   face: "right",  blurb: "Schools, subjects and coursework." },
    { id: "projects",     file: "projects.html",     num: "03", title: "Projects",              short: "Projects",     color: "yellow", face: "top",    blurb: "Things I have built, studied or explored." },
    { id: "achievements", file: "achievements.html", num: "04", title: "Achievements",          short: "Achievements", color: "green",  face: "left",   blurb: "Awards, competitions and personal milestones." },
    { id: "activities",   file: "activities.html",   num: "05", title: "Activities & Interests", short: "Activities",  color: "orange", face: "back",   blurb: "Life beyond the classroom." },
    { id: "goals",        file: "goals.html",        num: "06", title: "Future Goals",          short: "Future Goals", color: "white",  face: "bottom", blurb: "Where I want to go academically." }
  ],


  pages: {

    about: {
      intro: "A curious mind, a growing collection of questions, and a few too many Rubik's cubes.",
      blocks: [
        {
          type: "split",
          title: "Profile",
          paragraphs: [
            "I'm a high school student from Vietnam interested in computer science, artificial intelligence, and the ways technology shapes our lives. What fascinates me isn't just how systems work, but how they interact with people. I've become particularly curious about why misleading information spreads online and why people sometimes believe claims that seem questionable at first glance.",
            "Outside the world of code, I enjoy solving Rubik's cubes, spotting patterns, and exploring ideas that don't always fit neatly into one subject. I like the process of figuring things out: testing an approach, questioning an assumption, and trying again when something doesn't work. I also appreciate a good joke, even if my own occasionally needs more debugging than my code."
          ],
          image: { src: "me.jpg", alt: "", portrait: true }
        },
        {
          type: "facts",
          title: "At a glance",
          items: [
            ["Based in", "Hanoi, Vietnam"],
            ["School", "Hanoi-Amsterdam High School for the Gifted"],
            ["Academic focus", "Computer Science"],
            ["Contact", "nguyenvunguyenkhoi.hocsinh@gmail.com"]
          ]
        },
        {
          type: "text",
          title: "What I value",
          paragraphs: [
            "I value curiosity over assumptions, progress over perfection, and technology that puts people first. Whether I'm questioning an idea, solving a puzzle, or building a project, I believe the best solutions come from looking beyond the obvious and understanding the people behind the problem."
          ]
        }
      ]
    },

    education: {
      intro: "Not just what I learned, but how I learned to question, explore, and connect ideas.",
      blocks: [
        {
          type: "timeline",
          title: "Academic journey",
          items: [
            {
              meta: "2024-2027",
              title: "Hanoi-Amsterdam High School for the Gifted",
              subtitle: "High School · Vietnam",
              body: "Building a foundation in computer science while exploring ideas beyond the classroom.",
              
            },
            {
              meta: "Learning Beyond the Classroom",
              title: "Self-directed exploration",
              body: "Exploring computer science, artificial intelligence, and the ways technology shapes human decisions.",
              points: []
            }
          ]
        },
        {
          type: "chips",
          title: "Areas of exploration",
          groups: [
            { label: "Technology", items: ["Computer science", "Artificial intelligence", "Web development"] },
            { label: "Technology", items: ["Human behaviour", "Misinformation"] }
          ]
        },
        {
          type: "entries",
          title: "Milestones & qualifications",
          items: [
            { meta: "2026", title: "SAT — 1520" },
            { meta: "2026", title: "Ielts — 7.5" },
            { meta: "2025 - 2026", title: "GPA — 9.5" },
            { meta: "2024 - 2025", title: "GPA — 9.2" }
          ]
        }
      ]
    },


projects: {
  intro: "From early ideas to working prototypes, these projects reflect an interest in exploring technology, solving problems, and creating useful experiences.",
  blocks: [
    {
      type: "projects",
      title: "Featured Projects",
      items: [
        {
          title: "VN-KomPass",
          year: "2026",
          role: "Co-developer",
          summary: "An AI-powered travel assistant designed to help users explore Vietnam through personalized itineraries, destination discovery, and conversational guidance. I developed strategies for intelligent data collection and organization, while also designing and implementing the web interface and its core features. Originally developed for the Tekmonk Coding Olympiad 2026, the project is still undergoing testing and continuous refinement.",
          images: [{ src: "vnkompass.png", alt: "" }]
        },
        {
          title: "Hybrid AI Models for Crypto Asset Trading and Risk Control",
          year: "2026",
          role: "Co-author",
          summary: "Exploring the integration of deep learning and reinforcement learning for cryptocurrency trading and risk management under volatile market conditions. My contributions included conducting simulation tests, researching LSTM and reinforcement learning approaches, and helping draft, structure, edit, and format the English research manuscript.",
          links: {
            paper: "https://ikprress.org/index.php/JOBARI/article/view/10251",
            github: "",
            demo: ""
          }
        }
      ]
    }
  ]
},


    achievements: {
  intro: "From computational thinking to AI and mathematics, these achievements reflect my curiosity and drive to solve unfamiliar problems.",
  blocks: [
    {
      type: "groups",
      title: "Recognition",
      groups: [
        {
          label: "Awards",
          items: [
            {
              meta: "2026",
              title: "Potential Excellence Award",
              subtitle: "Tekmonk Coding Olympiad 2026",
              body: "Recognized for my potential in applying AI and web development to solve practical problems through technology.",
              images: [
    {
      src: "tekmonk.png",
      alt: "Potential Excellence Award at Tekmonk Coding Olympiad 2026"
    }
  ]
            },
            {
              meta: "2025",
              title: "Silver Award",
              subtitle: "Online International Math Challenge (IMC)",
              body: "Recognized for mathematical reasoning and problem-solving in an international mathematics competition."
            }
          ]
        },
        {
          label: "Computational Thinking",
          items: [
            {
              meta: "2025",
              title: "High Distinction",
              subtitle: "Vietnam Computational Thinking Challenge (Bebras)",
              body: "Demonstrated logical reasoning and computational thinking through challenges involving computational concepts.",
                            images: [
    {
      src: "bebras.jpg",
      alt: "High Distinction in Vietnam Computational Thinking Challenge (Bebras) 2025"
    }
  ]
            }
          ]
        }
      ]
    },
    {
      type: "text",
      title: "What connects them",
      paragraphs: [
        "These experiences reflect my interest in approaching unfamiliar problems from different angles, whether through mathematical reasoning, computational thinking, or emerging technology. Each has encouraged me to look beyond familiar methods, recognize patterns, and explore new ways to solve problems."
      ]
    }
  ]
},

  
activities: {
  intro: "Beyond the classroom, I enjoy bringing people together through chess, sharing technology with younger students, and finding small ways to make everyday experiences more engaging. These activities have taught me to think ahead, communicate clearly, and take responsibility for things that happen behind the scenes.",
  blocks: [
    {
      type: "entries",
      title: "Activities",
      items: [
        {
          meta: "2024 – 2025",
          title: "Ams Chess Academy (ACA)",
          subtitle: "Chess Tournament Operations & Match Arbitration",
          body: "Supported the Hanoi Summer Chess Championship, Chess Tour, and Hanoi Chess Tournament by coordinating venue setup, managing equipment and participant check-ins, assisting parents and attendees, and arbitrating matches. Working across different venues taught me to stay organized, respond to unexpected situations, and help competitions run smoothly as part of a team.",
          tags: ["Chess", "Event Operations", "Teamwork"],
          images: [
            {
              src:"aca.jpg",
              caption: ""
            }
          ]
        },
        {
          meta: "2025 – 2026",
          title: "AzureAms Programming Club (AAPC)",
          subtitle: "Programming Education & Communications",
          body: "Contributed to the club's outreach by writing and managing Facebook promotional posts, developing content ideas to engage prospective members, and preparing programming lesson materials for middle school students. I enjoyed making technical concepts more approachable, whether through a lesson plan or a post that encouraged someone to explore coding.",
          tags: ["Programming", "Teaching", "Communication"],
          images: [
            {
              src:"aapc.jpg",
              caption: ""
            }
          ]
        },
        {
          meta: "2026",
          title: "Hospital Meal Distribution",
          subtitle: "Volunteer",
          body: "Participated in distributing meals to people at a hospital. The experience gave me an opportunity to contribute through a simple, practical act of service and reminded me that small gestures can matter in people's everyday lives.",
          tags: ["Community Service", "Volunteering"],
          images: [
            {
              src:"volunteer_collage_4x3.png",
              caption: ""
            }
          ]
        }
      ]
    },
    {
      type: "interests",
      title: "Interests",
      items: [
        {
          name: "Chess",
          note: "I enjoy looking several moves ahead, weighing possibilities, and discovering how one small decision can change an entire game."
        },
        {
          name: "Rubik's Cube",
          note: "Solving a cube is a satisfying mix of pattern recognition, efficient algorithms, and the challenge of turning a seemingly chaotic scramble into order."
        },
        {
          name: "Dad Jokes",
          note: "I like finding unexpected connections between words and ideas. A good joke is a tiny puzzle: the best part is the moment everything clicks."
        }
      ]
    }
  ]
},



goals: {
  intro: "I want to study computer science not only to build intelligent systems, but also to understand how people interact with them. In the future, I hope to create technology that helps people navigate information more thoughtfully, make better decisions, and see beyond what a screen presents.",
  blocks: [
    {
      type: "text",
      title: "Academic direction",
      paragraphs: [
        "I plan to study Computer Science, exploring artificial intelligence, data science, and human-computer interaction. I am especially interested in why people trust certain information, how misleading content shapes their decisions, and whether AI can help people evaluate claims without replacing their own judgment. I want to understand both how intelligent systems work and how they affect the people who use them."
      ]
    },
    {
      type: "timeline",
      title: "Roadmap",
      items: [
        {
          meta: "Next 12 months",
          title: "Build a stronger foundation",
          subtitle: "",
          body: "Strengthen my programming, mathematics, and statistical reasoning while developing projects that connect AI with real-world problems. I also hope to keep learning through research, collaboration, and feedback from people who use what I build.",
          points: []
        },
        {
          meta: "During university",
          title: "Explore AI and human behavior",
          subtitle: "",
          body: "Study machine learning, data science, and human-computer interaction; join research or interdisciplinary projects; and experiment with ways to make AI systems more transparent, useful, and aware of their limitations.",
          points: []
        },
        {
          meta: "Long term",
          title: "Build technology people can trust",
          subtitle: "",
          body: "Develop human-centered AI tools that help people assess online information, recognize uncertainty, and make informed decisions. I hope to contribute to technology that does more than produce answers: it helps people understand why those answers deserve—or do not deserve—their trust.",
          points: []
        }
      ]
    },
    {
      type: "chips",
      title: "Fields I want to explore",
      groups: [
        {
          label: "",
          items: [
            "Artificial Intelligence",
            "Data Science",
            "Human-Computer Interaction"
          ]
        }
      ]
    },
    {
      type: "list",
      title: "What I am looking for",
      items: [
        "Research opportunities where I can explore AI, misinformation, and human decision-making.",
        "Interdisciplinary communities that connect computer science with psychology, communication, and social impact.",
        "Opportunities to build, test, and improve technology collaboratively with real users."
      ]
    }
  ]
},

  }
};
