  import project1 from "../assets/projects/project-1.jpg";
  import project2 from "../assets/projects/project-2.jpg";
  import project3 from "../assets/projects/project-3.jpg";
  import project4 from "../assets/projects/project-4.jpg";

  export const HERO_CONTENT = `
  I'm a graduate student pursuing a Master of Science in Computer Science at Rochester Institute of Technology, where I maintain a GPA of 4.0. I completed my Bachelor of Technology in Computer Engineering from Bajaj Institute of Technology. I have experience working as an Associate Consultant at Apps Associates, where I led data analysis projects, automated workflows, and optimized operational efficiency using Oracle Fusion modules and SQL. I'm skilled in programming languages like Java, Python, and SQL, and have hands-on experience in NLP, machine learning, and data visualization. Currently, I also serve as a grader and tutor for CS Theory and Algorithms at RIT.`;

  export const ABOUT_TEXT = `I am a dedicated and versatile software engineer with a passion for solving complex problems through technology. I have experience working on data analysis, automation, and optimizing operational workflows using technologies like Oracle Fusion, SQL, and Python. I thrive in collaborative environments and enjoy working with machine learning and data visualization projects. My goal is to continuously learn and contribute to impactful projects.`;

  export const EXPERIENCES = [
    {
      year: "2024 - Present",
      role: "Tutor - Foundations of CS Theory and Foundations of Algorithms",
      company: "Rochester Institute of Technology",
      description: `Tutored students in Foundations of CS Theory and Foundations of Algorithms. Graded assignments to provide constructive feedback and help students improve their understanding.`,
      technologies: ["Python", "Java", "C", "CS Theory"], 
    },
    {
      year: "2021 - 2023",
      role: "Associate Consultant",
      company: "Apps Associates (I) Pvt. Ltd",
      description: [
        "Led over 30 complex data analysis projects, developing customized OTBI and BIP reports, leveraging SQL to surpass project objectives.",
        "Managed critical data migration using FBDI, Spreadsheets, and PL/SQL packages, ensuring 100% data integrity and seamless system integration.",
        "Pioneered key revenue management reports, improving project delivery efficiency by 10%.",
        "Developed and implemented Unix/Linux shell scripts to automate redundant tasks, significantly reducing manual effort and increasing productivity.",
        "Optimized operational workflows in key areas like Collections, General Ledger, Receivables, and Payables, improving overall efficiency.",
        "Collaborated with senior consultants to ensure a 100% on-time delivery rate for production environments, while maintaining data integrity.",
        "Actively participated in Agile teams, delivering high-quality results and adapting to changing requirements, resulting in increased customer satisfaction."
      ],      
      technologies: ["SQL", "PL/SQL", "Relational Databases", "Unix/Linux", "Oracle Fusion", "Shell Scripting", "Oracle EBS", "XML", "Java", "BI Publisher"],
    }
  ];

  export const PROJECTS = [
    {
      title: "Natural Language Interface for Databases",
      image: project1,
      description: [
        "The aim of this project was to help non-technical users, like small business owners, easily access data from databases without needing to know SQL.",
        "We built an interface where users could ask questions in plain language (e.g., 'What were my top-selling products last month?'), and the system would convert these into SQL queries, making data retrieval straightforward.",
        "This allowed users to gain valuable insights from their sales or other business data without needing technical expertise.",
        "Technically, we used Python and TensorFlow to develop the core NLP system, leveraging Bi-LSTM models for query translation.",
        "Word2Vec was used to generate word embeddings, improving context understanding by 30%.",
        "We also created interactive data visualizations with Matplotlib, enabling users to visually explore their data.",
        "The project was managed collaboratively using Git, which improved team productivity by 15% and reduced integration issues by 20%."
      ],
      technologies: ["Python", "TensorFlow", "Word2Vec", "SQL", "Git", "Matplotlib"],
    },
    {
      title: "Road Sign Recognition",
      image: project2,
      description: [
        "Assembled and annotated a dataset of over 1,200 Indian road signs to enhance the training accuracy of machine learning models, ensuring that the system can correctly identify various types of road signs.",
        "Utilized TensorFlow and OpenCV to deploy a Convolutional Neural Network (CNN) on a Raspberry Pi, enabling real-time road sign detection. This approach resulted in a 20% improvement in processing speed, making the system faster and more efficient for real-world applications.",
        "Integrated Google’s Vision API to boost detection capabilities, particularly for signs that are partially obstructed or poorly lit, improving overall system reliability.",
        "This project is highly valuable for autonomous vehicles or advanced driver-assistance systems (ADAS), where accurate and quick identification of road signs is crucial for ensuring safe and reliable navigation."
      ]
      ,
      technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],
    },
  ];

  export const CONTACT = {
    address: "Rochester, New York, NY 14623 ",
    phoneNo: "+1 585-957-0158",
    email: "ya2390@g.rit.edu",
    mailto: "mailto:ya2390@g.rit.edu"
  };
