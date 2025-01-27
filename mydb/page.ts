interface Booktype {
  id: number;
  title: string;
  price: number;
  star: number;
  rating: number;
  Edition: string;
  Authors: string;
  image: string;
  description: string;
  Publisher: string;
  PublicationDate: string;
}


export const books:Booktype[] = [
  {
    id: 1,
    title: "Data Science Programming All-in-One For Dummies",
    price:27.00,
    star: 4.7,
    rating: 58,
    Edition: "1st",
    Authors: "by John Paul Mueller (Author), Luca Massaron (Author)",
    image: "/Images/Data Science Programing.jpg",
    description:
      "Data Science Programming All-In-One For Dummies is your complete guide to mastering the essentials of data science. With data science transforming industries and creating millions of job opportunities, this book prepares you to dive deep into the field. Covering fundamental topics like linear regression, logistic regression, machine learning, neural networks, and model validation, this guide also teaches you the powerful programming languages of Python and R. Whether you are a beginner or an experienced professional, you will learn how to tackle real-world data challenges, build impactful projects, and master the art of data storytelling through visualization. Get started now to elevate your career and make sense of the ever-growing world of data science.",
    Publisher: "For Dummies",
    PublicationDate: "December 9, 2019",
  },
  {
    id: 2,
    title: "Data Science For Dummies (For Dummies (Computer/Tech))",
    price: 22.00,
    star: 4.5,
    rating: 85,
    Edition: "3rd",
    Authors: "by Lillian Pierson ",
    image: "/Images/Data Science.jpg",
    description:
      "Discover how to turn your companys data into a powerful asset with Data Science For Dummies by Lillian Pierson. This comprehensive guide introduces the STAR Framework, a simple yet effective process for ensuring high returns on data science projects. Whether you are new to data science or have years of experience, this book has something for everyone. From foundational concepts to advanced data monetization strategies, you will learn how to select and lead profitable projects that align with your business goals. Packed with insider tactics and practical tips, Data Science For Dummies is your go-to resource for mastering data science and unlocking its true potential. Grab your copy now and start transforming your companys data into real business value!",
    Publisher: "For Dummies",
    PublicationDate: "September 15, 2021",
  },
  {
    id: 3,
    title: "Machine Learning For Dummies",
    price: 21.00,
    star: 4.4,
    rating: 101,
    Edition: "2nd",
    Authors: "by John Paul Mueller (Author), Luca Massaron (Author) ",
    image: "/Images/machine learning.jpg",
    description:
      "Machine Learning For Dummies, 2nd Edition is your essential guide to understanding and applying machine learning concepts. As artificial intelligence continues to revolutionize industries and open new career paths, this book equips you with the foundational knowledge needed to excel in this dynamic field. Covering key topics such as the history of AI, the mathematics behind machine learning, and practical applications using Python 3.8 and TensorFlow 2.x, this guide is perfect for both beginners and seasoned professionals. You will learn to build and test your own models, apply machine learning techniques to solve real-world problems, and leverage the latest datasets for impactful projects. With its approachable style and comprehensive content, this book empowers you to confidently navigate the exciting world of machine learning and enhance your career prospects. Start your journey today and unlock the potential of this transformative technology!",
    Publisher: "For Dummies",
    PublicationDate: "February 9, 2021",
  },
  {
    id: 4,
    title: "Deep Learning For Dummies",
    price: 21.00,
    star: 4.5,
    rating: 51,
    Edition: "1st",
    Authors: "by John Paul Mueller (Author), Luca Massaron (Author) ",
    image: "/Images/deep learning.jpg",
    description:
      "Deep Learning For Dummies is your gateway to understanding the powerful world of deep learning and its transformative impact on online business and social media. This comprehensive guide demystifies complex algorithms and provides a clear overview of the underlying technologies associated with deep learning. With practical examples and sample code, you will quickly grasp the high-level capabilities of deep learning and explore its various applications. The book is designed with hands-on activities that make learning engaging and accessible, allowing you to experiment in a safe environment. Whether you are a beginner looking to understand the fundamentals or someone eager to enhance your skills with the right tools, this book equips you with the knowledge to navigate and leverage deep learning effectively in your daily life and career. Dive in today and uncover the potential of this revolutionary technology!",
    Publisher: "For Dummies",
    PublicationDate: "May 14, 2019",
  },
  {
    id: 5,
    title: "Artificial Intelligence For Dummies (For Dummies (Computer/Tech))",
    price: 28.49,
    star: 4.2,
    rating: 137,
    Edition: "2nd",
    Authors: "by John Paul Mueller (Author), Luca Massaron (Author)",
    image: "/Images/artificial intelligence.jpg",
    description:
      "Artificial Intelligence For Dummies brings the fascinating world of AI into your hands, revealing its presence in the smart devices and technologies you interact with daily—from smartwatches to customer service chatbots. This accessible guide demystifies the concept of artificial intelligence, starting with fundamental definitions and covering essential topics such as data utilization, algorithms, and specialized hardware. With this book, you’ll gain a clear understanding of what AI can achieve, its limitations, and how it accelerates data collection and analysis to empower you in making informed decisions swiftly. Explore real-world applications of AI in drones, robots, and vehicles, and discover its potential future roles in fields like space exploration, medicine, and communication. While you may not need a deep understanding of AI to use your devices, this book will enhance your knowledge, making you feel more informed and engaged with the technology that shapes our lives. Don’t miss out on this opportunity to unlock the secrets of AI—grab your copy today!",
    Publisher: "For Dummies",
    PublicationDate: "November 24, 2021",
  },
  {
    id: 6,
    title: "Python for Data Science For Dummies (For Dummies (Computer/tech))",
    price: 23.49,
    star: 4.6,
    rating: 6,
    Edition: "3rd",
    Authors: "by John Paul Mueller (Author), Luca Massaron (Author)",
    image: "/Images/python.jpg",
    description:
      "Unlock the Power of Data Analysis with Python! Dive into the world of data science with Python for Data Science For Dummies. This comprehensive guide is perfect for beginners, offering step-by-step instructions on getting started with Python, performing data analysis, and mastering datasets with practical examples. Learn how to work with Google Colab, sample data, and perform coding tasks that simplify your analysis process. As you develop your skills, you will not only enhance your employability but also gain valuable insights into data-driven decision-making. Updated for the latest version of Python, this edition features relevant data examples, ensuring you have the most current knowledge at your fingertips.With a strong foundation in Python coding for data analysis, explore various career paths in data science and integrate multimedia and graphics into your projects. Plus, discover how to manage and organize your data using cloud-based relational databases. The demand for Python expertise is soaring—grab this user-friendly guide and embark on your journey to becoming a data pro!",
    Publisher: "For Dummies",
    PublicationDate: "November 7, 2023",
  },
  {
    id: 7,
    title:
      "Becoming a Data Head: How to Think, Speak, and Understand Data Science, Statistics, and Machine Learning",
    price: 25.00,
    star: 4.6,
    rating: 333,
    Edition: "1st",
    Authors: "by Alex J. Gutman (Author), Jordan Goldmeier (Author)",
    image: "/Images/data head.jpg",
    description: `Turn yourself into a Data Head. You'll become a more valuable employee and make your organization more successful." — Thomas H. Davenport, Research Fellow and Author.

In Becoming a Data Head: How to Think, Speak, and Understand Data Science, Statistics, and Machine Learning, award-winning data scientists Alex Gutman and Jordan Goldmeier reveal the essential tools and language you need to engage with data critically. This insightful guide empowers you to think statistically, grasp the impact of variation on your decision-making, and communicate effectively about statistics in the workplace.

You'll learn to ask the right questions about the data you encounter, understand complex topics like machine learning and artificial intelligence, and avoid common mistakes in data interpretation. This comprehensive resource covers all aspects of data science in the workplace, from navigating diverse personalities to understanding the mathematics behind algorithms. With years of experience in the data trenches, the authors have created a fun, engaging, and highly readable book suitable for anyone—from business professionals to aspiring data scientists. Embrace the facts and become an active participant in the exciting world of data science!`,
    Publisher: "For Dummies",
    PublicationDate: "May 11, 2021",
  },
  {
    id: 8,
    title: "Algorithms For Dummies (For Dummies (Computer/Tech))",
    price: 19.49,
    star: 4.6,
    rating: 15,
    Edition: "2nd",
    Authors: "by John Paul Mueller (Author), Luca Massaron (Author)",
    image: "/Images/algorithms.jpg",
    description:
      'Unlock the Power of Algorithms! From your Facebook News Feed to your insurance premiums and even how your toast is made, algorithms are woven into the fabric of modern life, influencing virtually everything we do. In Algorithms For Dummies, you will demystify these powerful problem-solving tools by learning what they are, how they work, and where to find them—spoiler alert: they are everywhere! This comprehensive guide includes graphs and charts to help you understand algorithms inner workings, links to an online GitHub repository for updated code, and step-by-step instructions on using Google Colaboratory, a zero-setup coding environment that runs directly in your browser. Whether you are a curious internet user or a beginning computer science student looking for a head start, this book is your essential resource for mastering algorithms and enhancing your understanding of the digital world.',
    Publisher: "For Dummies",
    PublicationDate: "May 3, 2022",
  },
  {
    id: 9,
    title: "SQL QuickStart Guide: The Simplified Beginner's Guide to Managing, Analyzing, and Manipulating Data With SQL (Coding & Programming - QuickStart Guides) ",
    price: 23.99,
    star: 4.6,
    rating: 1659,
    Edition: "2nd",
    Authors: "by Walter Shields (Author)",
    image: "/Images/sql.jpg",
    description:
      'Unlock Your Data Potential with SQL QuickStart Guide! The best SQL book for beginners in 2024, SQL QuickStart Guide offers a comprehensive, step-by-step approach to mastering the SQL programming language, making it the perfect resource for anyone preparing for a data-driven future. Written by SQL expert Walter Shields, who boasts over 25 years of experience, this guide is accessible for beginners while also serving college-level courses. With lifetime access to FREE digital bonuses—including a sample database, SQL commands cheat sheet, and hands-on exercises—readers will quickly learn the basic structure of databases, how to retrieve and interpret data efficiently, and the most important SQL queries for practical applications. Whether you are a developer looking to expand your skills, a job seeker aiming to enhance your resume, or a manager seeking to leverage data for business insights, this book is your essential tool for navigating modern data management. Join over a million readers who have benefited from this guide and take the first step toward becoming a data-savvy professional today!',
    Publisher: "For Dummies",
    PublicationDate: "November 18, 2019",
  },
  {
    id: 10,
    title: "Fundamentals of Data Engineering: Plan and Build Robust Data Systems ",
    price: 40.09,
    star: 4.7,
    rating: 490,
    Edition: "1st",
    Authors: "by Joe Reis (Author), Matt Housley (Author)",
    image: "/Images/fundamentals.jpg",
    description:
      'Master Data Engineering with a Comprehensive Guide! In the rapidly evolving field of data engineering, Data Engineering: A Practical Guide by Joe Reis and Matt Housley provides software engineers, data scientists, and analysts with an essential overview of the data engineering lifecycle. This practical book empowers you to plan and build systems tailored to meet your organization’s and customers’ needs by evaluating the best available technologies. The authors guide you through critical concepts such as data generation, ingestion, orchestration, transformation, storage, and governance, equipping you with the knowledge to tackle data engineering challenges effectively. You will gain insights into assessing data engineering problems using an end-to-end framework of best practices, cutting through marketing hype to make informed choices about data technologies and architecture. With this book, you will learn to design and build robust data architectures while incorporating data governance and security throughout the lifecycle, ensuring your systems are both effective and secure.',
    Publisher: "For Dummies",
    PublicationDate: "July 26, 2022",
  },
  {
    id: 11,
    title: "Data Engineering with AWS - Second Edition: Acquire the skills to design and build AWS-based data transformation pipelines like a pro",
    price: 31.49,
    star: 4.4,
    rating: 34,
    Edition: "2nd",
    Authors: "by Gareth Eagar (Author)",
    image: "/Images/data eng aws.jpg",
    description:
      'Transform Your Data Engineering Skills with AWS! If you are ready to revolutionize your data transformation capabilities, this comprehensive manual is your go-to resource! Authored by a seasoned Senior Data Architect with 25 years of experience, this revised edition provides a deep dive into essential AWS tools for ingesting, transforming, and consuming data while orchestrating efficient pipelines. You will explore robust AWS services, gaining hands-on experience with modern data management approaches, including a newly added section on building transactional data lakes and implementing a data mesh. The book covers vital topics such as data governance, the architecture of data pipelines, and effective data consumption strategies, ensuring you understand the full data engineering lifecycle. With practical insights on using AWS tools like Amazon Kinesis, AWS Glue Studio, and Amazon QuickSight, you will learn to seamlessly ingest streaming data, optimize datasets, and visualize your findings. By the end of this book, you will be equipped to execute data engineering tasks and implement data pipelines on AWS like a pro! Ideal for data engineers, analysts, and architects new to AWS, this guide will elevate your skills and prepare you for the data-driven future.',
    Publisher: "Packt Publishing",
    PublicationDate: "October 31, 2023",
  },
  {
    id: 12,
    title: "Coding All-in-One For Dummies (For Dummies (Computer/Tech))",
    price: 25.49,
    star: 4.6,
    rating: 89,
    Edition: "2nd",
    Authors: "by Chris Minnick (Author)",
    image: "/Images/coding.jpg",
    description:
      'Unlock Your Coding Potential with the Second Edition of Coding All-in-One For Dummies! Updated for the 2020s, this comprehensive guide offers a fresh take on coding, introducing key topics such as developing native mobile apps for Android and iOS using Flutter, understanding cloud computing, and exploring enhanced coverage of JavaScript, including the latest syntax. Transitioning from Python 2 to Python 3, the book also teaches responsive design with Flexbox and upgraded Bootstrap 5, while providing insights into data analysis using Python and NumPy. Perfect for beginners, this edition breaks down coding concepts into easy-to-follow instructions, making it accessible even for those with no prior experience. Whether you aim to enhance your current career or embark on a new journey as a professional developer, this guide equips you with the foundational skills in HTML, JavaScript, and Python needed to succeed. Dive into the world of coding today, automate routine tasks, and open doors to exciting career opportunities—Dummies makes it all possible!',
    Publisher: "For Dummies",
    PublicationDate: "August 2, 2022",
  },
  {
    id: 13,
    title: "C# & C++: 5 Books in 1 - The #1 Coding Course from Beginner to Advanced (2024) (Computer Programming)",
    price: 34.19,
    star: 4.5,
    rating: 157,
    Edition: "2nd",
    Authors: "by Mark Reed (Author)",
    image: "/Images/c.jpg",
    description:
      'Transform Your Coding Skills with The Complete Python & SQL Programming Bootcamp From Zero To Hero 2024! If you’re a beginner feeling overwhelmed by the complexities of coding or looking for a reliable resource to elevate your programming skills, this bootcamp is your perfect solution. This all-in-one guide not only simplifies learning C# and C++ but also equips you with the practical tools and real-world applications needed to master these languages. Tailored for both novices and experienced programmers, the course offers an immersive experience through practical examples and hands-on exercises that build your confidence in tackling coding challenges. You’ll start with foundational concepts, progressing through data types, operators, object-oriented programming, file handling, and advanced features like asynchronous programming. Moreover, you’ll explore graphical user interfaces and web development basics, culminating in performance optimization strategies to ensure your programs run efficiently. With five comprehensive books in one, this resource provides all the essential knowledge to set you apart in the competitive job market. Whether you aspire to start a new career, freelance, or develop your own software, this guide has the insights and skills you need to become an invaluable asset to any organization. Dont wait—click Buy Now and embark on your journey to coding mastery today!',
    Publisher: "For Dummies",
    PublicationDate: "April 10, 2023",
  },
  {
    id: 14,
    title: "HTML, CSS, & JavaScript All-in-One For Dummies",
    price: 24.99,
    star: 4.7,
    rating: 29,
    Edition: "1st",
    Authors: "by Paul McFedries (Author)",
    image: "/Images/html,css,js.jpg",
    description:
      'If you  are looking to dive into the world of web development, HTML, CSS, & JavaScript All-in-One For Dummies is a fantastic starting point. This book provides all the essential concepts you need for front-end web building and design, enabling you to create attractive and user-friendly websites using HTML, CSS, and JavaScript. With step-by-step instructions, you will learn how to build both static and dynamic sites, design intuitive layouts, and add engaging animations while also troubleshooting common issues. Web development is a fun and rewarding skill that can lead to a lucrative career, so grab this book and start your journey toward creating your dream website today!',
    Publisher: "For Dummies",
    PublicationDate: "August 15, 2023",
  },
  {
    id : 15,
    title:
      "ChatGPT For Success: Elevate Your Creativity, Productivity, and Career Using ChatGPT4o, Perplexity, Grok, GMTech & other AIs ",
    price: 9.99,
    star: 5.0,
    rating: 3,
    Edition: "1st",
    Authors: "by John Paul Mueller (Author), Luca Massaron (Author)",
    image: "/Images/chatgpt.jpg",
    description:
      "Artificial Intelligence (AI) is revolutionizing society, much like the personal computer and the internet did. This book is your guide to leveraging AI to enhance your creativity, productivity, and career. It offers clear, step-by-step instructions on using AI for tasks like analyzing visual data, writing books and articles, creating music, and even producing artwork and videos. Designed with beginner-friendly content, it covers practical ways to integrate AI into business writing, sales copy, and SEO, while also providing insights into the ethical and legal use of AI. With actionable advice on using AI to solve problems and navigate decisions, this book helps future-proof your career. Each chapter concludes with ideas on how to monetize AI, whether through side hustles, passive income streams, or transforming your business model. Embrace the AI revolution and gain a competitive edge by learning to use AI effectively. The future belongs to those who know how to harness the power of AI. Grab your copy today and start building a more innovative, efficient, and successful future!",
    Publisher: "For Dummies",
    PublicationDate: "April 28, 2024",
  },
];

export const featureBooks =[
 
  {
    id: 16,
    title: "Full Stack Web Development: The Comprehensive Guide (Rheinwerk Computing)",
    price: 45.77,
    star: 4.7,
    rating: 17,
    Edition: "new Edition",
    Authors: "Philip Ackermann ",
    image: "/Images/full stack.jpg",
    description:
      'This comprehensive guide equips aspiring and professional full-stack web developers with the skills to master both frontend and backend technologies. You will learn how to design stunning websites using HTML and CSS, bring interactivity through JavaScript, and navigate web protocols, formats, and architectures. The book covers key concepts like APIs, PHP, Node.js, web services, databases, testing, security, and optimization. Whether you are learning the basics of web development or refining your backend programming, this all-in-one resource provides everything needed to excel in full-stack web development.',
    Publisher: "Rheinwerk Computing",
    PublicationDate: "August 28, 2023",
  },
  {
    id: 17,
    title: "React: The Comprehensive Guide (Rheinwerk Computing)",
    price: 43.26,
    star: 4.2,
    rating: 12,
    Edition: "1st",
    Authors: " Sebastian Springer ",
    image: "/Images/react.jpg",
    description:
      'React.js simplifies the development of dynamic user interfaces, making it faster and more efficient. This guide offers a complete walkthrough for developers of all skill levels. Start by understanding the core concepts of React and how it functions. Then, follow hands-on examples to build applications, covering everything from styling with CSS to optimizing performance. Whether you are new to JavaScript or an experienced developer, you will learn how to utilize React classes, hooks, forms, testing, and more to create robust frontend applications. Dive into advanced topics like Redux, server-side rendering, and debugging for larger projects.',
    Publisher: "Rheinwerk Computing",
    PublicationDate: "October 25, 2023",
  },
  {
    id: 18,
    title: "Node.js: The Comprehensive Guide to Server-Side JavaScript Programming (Rheinwerk Computing)",
    price: 42.70,
    star: 4.6,
    rating: 64,
    Edition: "Comprehensive",
    Authors: "Sebastian Springer ",
    image: "/Images/node.jpg",
    description:
      'Node.js is essential for developing server-side JavaScript applications. This guide starts with the basics, including installation, understanding the Node.js environment, and structuring applications. Through detailed examples, you will explore web development using frameworks like Express and Nest.js, and master asynchronous programming with approaches like RxJS and data streams. It also covers critical topics like testing, security, and performance, making it a comprehensive reference for Node.js development. From setting up web servers and connecting databases to scaling and optimizing your apps, this guide ensures you have everything you need for backend JavaScript programming.',
    Publisher: "Rheinwerk Computing",
    PublicationDate: "August 24, 2022",
  },
  {
    id: 19,
    title: "Responsive Web Design with HTML5 and CSS - Fourth Edition: Build future-proof responsive websites using the latest HTML5 and CSS techniques",
    price: 22.99,
    star: 4.7,
    rating: 133,
    Edition: "4th",
    Authors: "Ben Frain ",
    image: "/Images/res web.jpg",
    description:
      'Responsive Web Design with HTML5 and CSS, Fourth Edition is a comprehensive guide that helps you master the latest techniques for building responsive websites that adapt seamlessly across devices like mobile phones, tablets, and desktops. With a focus on modern HTML5 and CSS features, this book covers essential topics such as media queries, Grid and Subgrid layouts, accessibility, color manipulation, and more. Whether you are a front-end developer or looking to enhance your web design skills, this book provides practical examples and expert tips to create visually stunning, user-friendly websites without needing JavaScript.',
    Publisher: "Packt Publishing",
    PublicationDate: "September 19, 2022",
  },
  {
    id: 20,
    title: "Hacking For Dummies (For Dummies (Computer/Tech))",
    price: 19.99,
    star: 4.6,
    rating: 108,
    Edition: "7th",
    Authors: "Kevin Beaver",
    image: "/Images/hacking.jpg",
    description:
      'Hacking For Dummies is your ultimate guide to safeguarding your systems and personal data by thinking like a hacker. This easy-to-follow book covers essential cybersecurity techniques, helping you identify vulnerabilities and protect against potential threats. You will learn to secure Wi-Fi networks, safeguard Windows 11, and understand the impact of remote work on data security. Ideal for small business owners, IT professionals, and remote employees, this guide equips you with the tools needed to perform penetration testing, stay ahead of the latest security weaknesses, and keep your data safe from hackers.',
    Publisher: "Packt Publishing",
    PublicationDate: "April 26, 2022",
  },
  {
    id: 21,
    title: "Beginning Git and GitHub: Version Control, Project Management and Teamwork for the New Developer",
    price: 43.49,
    star: 4.7,
    rating: 17,
    Edition: "2nd",
    Authors: "Mariot Tsitoara",
    image: "/Images/git and github.jpg",
    description:
      'Beginning Git and GitHub" is your step-by-step guide to mastering version control and effectively managing projects using Git and GitHub. This updated edition introduces GitHub workflows, and new chapters on customization, solving common Git problems, and new pull request features. Divided into three sections—Version Control, Project Management, and Teamwork—this book takes you from mastering Git basics to managing software projects and working as part of a team. You will learn how to avoid and resolve merge conflicts, plan and execute projects, and use advanced Git concepts for a streamlined workflow. Whether you are new to development, working in a team for the first time, or simply want to boost your Git and GitHub skills, this guide will equip you with all the tools you need to succeed.',
    Publisher: "Apress",
    PublicationDate: "March 15, 2024",
  },
]