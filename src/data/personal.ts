import type { PersonalInfo } from "@/types/personal";

export const personalData: PersonalInfo = {
  name: "Shivam Laxman Gaikwad",
  dob: "09/12/2005",
  age: 20,
  role: "Aspiring Data Scientist",
  status: "Pursuing Bachelor of Computer Applications (BCA) • CGPA 9.33",
  tagline: "Dedicated to solving complex challenges through Data Science, Machine Learning, Data Analytics, and predictive modeling.",
  bio: [
    "I am Shivam Gaikwad, a dedicated BCA student graduating in 2027 at JD College of Engineering and Management, Nagpur, whose primary career goal is to become a Data Scientist.",
    "I specialize in Data Analytics, Machine Learning, and statistical problem-solving, with strong technical competencies in Python, SQL, and data processing. Passionate about transforming raw data into actionable intelligence, I focus on predictive modeling, exploratory data analysis, and mathematical rigor.",
    "Beyond data science, I actively serve as Class Representative (CR) for a batch of 60+ students (2024–2027) and previously served as Co-Head of the department forum. I have won a Consolation Prize at a National-Level Hackathon (NIT Nagpur) and 2nd Prize at the Open Innovation Tech Fest (YCCE Nagpur)."
  ],
  location: "Nagpur, Maharashtra, India",
  avatarPlaceholder: "SG",
  highlights: [
    "Aspiring Data Scientist",
    "CGPA: 9.33",
    "Class Representative (2024–2027)",
    "Data Analytics & Machine Learning",
    "Python, SQL & Power BI"
  ],
  focusAreas: [
    {
      id: "data-science",
      title: "Data Science & Machine Learning",
      description: "Developing predictive models, statistical algorithms, and data-driven solutions using Python, machine learning workflows, and mathematical foundations.",
      iconName: "Sparkles"
    },
    {
      id: "data-analytics",
      title: "Data Analytics & BI",
      description: "Extracting insights through exploratory data analysis with Pandas and NumPy, and engineering visual business dashboards in Power BI.",
      iconName: "Layers"
    },
    {
      id: "database-engineering",
      title: "Database Systems & SQL",
      description: "Formulating optimized relational SQL queries, designing normalized database schemas, and managing structured data pipelines in PostgreSQL.",
      iconName: "Code2"
    }
  ],
  quickFacts: [
    { label: "Career Goal", value: "Data Scientist" },
    { label: "DOB & Age", value: "09/12/2005 (Age 20)" },
    { label: "Degree & CGPA", value: "BCA • CGPA: 9.33 (5th Semester | Batch of 2027)" },
    { label: "Current Institution", value: "JD College of Engineering and Management, Nagpur" },
    { label: "Leadership Roles", value: "Class Representative (CR) (2024–2027)" },
    { label: "Core Stack", value: "Python, SQL, Pandas, NumPy, Power BI, Machine Learning" },
    { label: "Professional Focus", value: "Data Science, Machine Learning & Analytics" }
  ]
};
