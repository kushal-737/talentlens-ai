from fastapi import FastAPI
from fastapi import UploadFile
from fastapi import File
from fastapi import Form
from fastapi.middleware.cors import CORSMiddleware
from ai_summary import (
    generate_resume_summary
)

import pdfplumber
import tempfile

from analyzer import (
    extract_skills,
    calculate_resume_score,
    compare_with_jd
)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AI Resume Analyzer Backend Running"
    }


@app.post("/analyze")
async def analyze_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):

    with tempfile.NamedTemporaryFile(delete=False) as temp:

        temp.write(await file.read())

        resume_text = ""

        with pdfplumber.open(temp.name) as pdf:

            for page in pdf.pages:

                page_text = page.extract_text()

                if page_text:
                    resume_text += page_text

    detected_skills = extract_skills(resume_text)
    summary = generate_resume_summary(resume_text)

    resume_score = calculate_resume_score(
        detected_skills
    )

    jd_result = compare_with_jd(
        detected_skills,
        job_description
    )

    return {

        "resume_score": resume_score,

        "detected_skills": detected_skills,

        "match_score":
        jd_result["match_score"],

        "missing_skills":
        jd_result["missing_skills"],

        "ai_summary": summary
    }