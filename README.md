🚀 TalentLens AI – AI-Powered Resume Analyzer

TalentLens AI is a full-stack AI-powered Resume Analysis platform that helps job seekers evaluate their resumes against job descriptions using ATS-style scoring, skill gap analysis, and AI-generated candidate summaries.

The application enables users to upload their resumes, compare them against a target job description, identify missing skills, and generate downloadable analysis reports.

🌐 Live Demo

Frontend (Vercel)

https://talentlens-ai-ashen.vercel.app/

Backend (Render)

https://talentlens-backend-rovi.onrender.com

📸 Features

📄 Resume Parsing
Upload resumes in PDF format
Extracts resume content automatically
Processes candidate information for analysis

🎯 ATS Resume Scoring
Calculates resume quality score
Evaluates skill density
Provides ATS-style assessment

📌 Job Description Matching
Compare resume against a target Job Description
Calculate Resume–JD Match Score
Identify missing skills required for the role

🤖 AI-Powered Candidate Summary
Uses Google Gemini AI to generate a professional recruiter-style summary
Summarizes candidate strengths and profile

📊 Skill Gap Analysis
Detects skills present in the resume
Highlights missing technologies and competencies
Helps candidates improve their resumes

📥 Downloadable Report
Generate a professional analysis report
Download results for future reference

☁️ Fully Deployed
Frontend hosted on Vercel
Backend hosted on Render
Environment variables secured
Production-ready deployment

🛠 Tech Stack

Frontend:
Next.js
React
TypeScript
Tailwind CSS
Axios

Backend:
FastAPI
Python

AI & NLP:
Google Gemini AI
Skill Extraction Engine

Resume Processing:
PDFPlumber
PDFMiner

Deployment:
Vercel (Frontend)
Render (Backend)

📂 Project Structure
TalentLens-AI/
│
├── backend/
│   ├── main.py
│   ├── analyzer.py
│   ├── skills.py
│   ├── ai_summary.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   │
│   │   ├── components/
│   │   │   └── Typewriter.tsx
│   │   │
│   │   └── utils/
│   │       └── generateReport.ts
│   │
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
│
└── README.md

⚙️ How It Works:

Step 1

User uploads a resume PDF.

↓

Step 2

Backend extracts text from the resume.

↓

Step 3

TalentLens identifies skills present in the resume.

↓

Step 4

The uploaded Job Description is analyzed.

↓

Step 5

The system calculates:

Resume Score
Match Score
Missing Skills

↓

Step 6

Google Gemini AI generates a professional candidate summary.

↓

Step 7

Results are displayed and can be downloaded as a report.

📈 Example Output
{
  "resume_score": 85,
  "match_score": 55,
  "detected_skills": [
    "Python",
    "SQL",
    "React",
    "FastAPI",
    "AWS"
  ],
  "missing_skills": [
    "Power BI",
    "Tableau",
    "NumPy"
  ]
}

🔧 Local Setup:
Clone Repository
git clone https://github.com/yourusername/talentlens-ai.git
cd talentlens-ai

Backend Setup:
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

Create a .env file:
GEMINI_API_KEY=your_api_key_here

Run backend:
uvicorn main:app --reload

Backend runs at:
http://127.0.0.1:8000

Frontend Setup:
cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:3000

🔐 Environment Variables

Backend:
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

Frontend:
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com

📌 Future Enhancements
Authentication
User Registration
Login System
Session Management
Resume History
Save previous analyses
Resume version tracking
AI Resume Rewriter
Rewrite resume for ATS optimization
Improve project descriptions
Generate stronger professional summaries
Cover Letter Generator
Generate role-specific cover letters
Dashboard Analytics
Analysis history
Performance tracking
Resume improvement suggestions

🏆 Key Learnings

This project demonstrates:

Full-Stack Development
API Integration
Resume Parsing
AI-Powered Applications
Deployment & DevOps
Environment Variable Management
Frontend–Backend Communication
Production Deployment

👨‍💻 Author

Kushal Singh

B.E. Information Technology

Connect
GitHub: https://github.com/kushal-737
LinkedIn: www.linkedin.com/in/kushalsingh1012

⭐ Acknowledgements

Google Gemini AI
FastAPI
Next.js
Vercel
Render
PDFPlumber
