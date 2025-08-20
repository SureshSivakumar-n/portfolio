export const profile = {
  name: "Suresh Sivakumar",
  role: "Data Engineer",
  blurb:
    "Motivated and detail-oriented postgraduate student with 3 years of experience in data engineering, analytics, and backend system development. Certified in Google Cloud Platform (GCP), with expertise in SQL, cloud technologies, Databricks, and ETL pipelines. Adept in cross-functional collaboration, data governance, and dashboard visualization to support data-driven decision-making.",
  location: "Apartment 7, Block 2, Cois Abhainn, Kildare, Ireland",
  email: "sureshsivakumar.n@gmail.com",
  phone:"+353 0894315976",
  linkedin: "https://www.linkedin.com/in/suresh-sivakumar-79a84817a",
  github: "https://github.com/SureshSivakumar-n", // TODO: add your real GitHub username
  resumeUrl: "#" // Optional: link a PDF resume
};

export const skills = {
  languages: ["SQL", "Python", "Bash"],
  bigdata: ["Apache Spark (Databricks)", "PySpark", "Apache Kafka"],
  orchestration: ["Apache Airflow", "Cloud Composer", "Databricks Jobs"],
  cloud: ["GCP: BigQuery, Dataproc, GCS, Dataflow, Pub/Sub, IAM", "AWS/Azure (CI/CD exposure)"],
  storage: ["BigQuery", "Delta Lake", "Snowflake", "PostgreSQL", "Cloud Storage"],
  devops: ["GitHub", "GitLab", "Bitbucket", "Docker (basic)"],
  viz: ["Tableau", "Looker Studio (Data Studio)"]
};

export const certifications = [
  {
    name: "Google Cloud – Associate Cloud Engineer",
    badge: "/badges/gcp-ace.png",
    url: "https://www.credly.com/badges/73593213-5e10-485f-9ea5-27678a89236d/public_url",
  },
  {
    name: "Google Cloud – Professional Data Engineer",
    badge: "/badges/gcp-pde.png",
    url: "https://www.credly.com/badges/f730c503-b24e-4f78-ae28-59e8a1ac2ce0/public_url",
  },
];

export type Project = {
  title: string;
  summary: string;
  impact: string[];
  tech: string[];
  link?: string;
  repo?: string;
  image?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: "Investigating Techniques for Aspect-Based Sentiment Analysis in Employee Feedback",
    summary:
      "Built an aspect‑level sentiment system for employee feedback using BERT/RoBERTa/T5 and GPT variants, with domain adaptation and augmentation. Evaluated using F1 and human judgment.",
    impact: [
      "Extracted aspect–sentiment pairs (e.g., work‑life balance: positive; salary: negative)",
      "Improved interpretability with aspect taxonomy + example rationales",
      "Comparing different large language model (LLM) architectures to better understand their progress in fine-grained aspect-based sentiment analysis."
    ],
    tech: ["Python", "Transformers", "scikit‑learn", "Pandas", "Notebook Experiments"],
    repo: "https://github.com/SureshSivakumar-n/ABSA-Employee-Feedback" // Optional public repo
  },
  {
    title: "Integrated Mobile Application Portal for the Convinient Service of Farmer, Logistics, Street Vendors AND Consumer",
    summary:
      "Developed a Mobile Application for Farmers, Consumer, Street Vendors and also the logistics. And the Admin will update the day to day process form the web server.",
    impact: [
      "They can sell directly to consumers without middlemen, ensuring fair prices and higher revenue. This reduces exploitation and avoids commission/rent deductions.",
      "Fresh produce is delivered at a lower cost and with convenience, reducing the need to visit crowded markets. Street vendors also benefit from discounted rates, ensuring sustainability for small businesses."
    ],
    tech: ["Mobile Application Development", "Flutter", "Database management", "SQL"],
    repo: "https://github.com/SureshSivakumar-n/xsocialapp"
  },
  {
    title: "Databricks DLT Data Warehouse Project",
    summary:
      "The goal of this project is to build a scalable and incremental Data Lakehouse pipeline using Databricks Delta Live Tables (DLT), which processes raw data into structured dimension and fact tables following the star schema model. The pipeline supports incremental loads using Change Data Capture (CDC) logic and uses surrogate key joins for creating dimensional relationships.",
    impact: [
      "Ingest raw data to Bronze via Auto Loader. Clean and transform to Silver using DLT",
      "Create SCD-compliant Dimensions (Flights, Passengers, Airports)",
      "Incrementally merge into Gold fact using Delta Lake"
    ],
    tech: ["Databricks", "Pyspark", "Delta Live Tables", "Delta Lake"],
    repo: "https://github.com/SureshSivakumar-n/databricks-data-pipeline"
  }
];

export const experience = [
  {
    company: "Accenture (India)",
    title: "Data Engineer – Data Eng, Mgmt & Governance",
    period: "2021 — 2024",
    image: "/accenture.png", // <--- add this
    bullets: [
      "Partnered with data scientists to define and implement client-specific data requirements, ensuring alignment between business needs and technical solutions.",
      "Worked on existing ETL pipelines that ingested raw files from Google Cloud Storage (GCS), processed them with Dataproc (Apache Spark/Hadoop), and loaded cleaned data into BigQuery.",
      "Managed and maintained Google BigQuery data warehouse and real-time data streams for high-volume vendor data.",
      "Collaborated with analysts and BI teams to enable self-service analytics, cutting down reporting turnaround time from days to hours."
    ]
  },
  {
    company: "AVP Consulting (Chennai, India)",
    title: "Junior Developer Intern",
    period: "2020 — 2021",
    image: "/avp.png", // <--- add this
    bullets: [
      "Involved in all the phases of Software Development Life Cycle (SDLC) including analysis, design, programming, testing, and deployment.",
      "Involved in developing web pages with rich UI, Ajax, Jquery using ASP.Net and Apprivo.",
      "Wrote complex SQL Queries, Stored Procedure, Triggers, Views & Indexes using DML, DDL commands and user defined functions to implement the business logic.",
      "Create branches to commit code changes from the Git menu, commit and push for updating a code in Azure Devops.",
      "Experience with implementing the CI/CD azure pipeline"
    ]
  }
];

export const education = [
  {
    school: "Maynooth University, Ireland",
    degree: "MSc Computer Science (Software Engineering)",
    period: "2024 — 2025"
  },
  {
    school: "Vels Institute of Science, Technology and Advanced Studies (VISTAS), India",
    degree: "B.E. Computer Science",
    period: "—" // Optional: add dates if you want to display them
  }
];

export const posts = [
  {
    title: "BigQuery Cost & Performance: A Practical Playbook",
    slug: "bigquery-cost-playbook",
    summary:
      "Partitioning, clustering, BI cache, MV/approx functions, and lifecycle policies that actually move the needle.",
    date: "2025-07-20"
  },
  {
    title: "From Sentences to Aspects: Building ABSA with Transformers",
    slug: "absa-transformers",
    summary:
      "Data design, prompts vs. finetuning, evaluation with F1 and human checks, and error analysis patterns.",
    date: "2025-08-01"
  }
];