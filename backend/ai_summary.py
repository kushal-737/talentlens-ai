import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv(dotenv_path=".env")

print("Current Directory:", os.getcwd())

API_KEY = os.getenv("GEMINI_API_KEY")

print("API KEY FOUND:", API_KEY is not None)

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def generate_resume_summary(resume_text):

    prompt = f"""
    You are an HR recruiter.

    Analyze the resume below and create
    a professional candidate summary.

    Keep it between 80-120 words.

    Resume:
    {resume_text}
    """

    try:
        response = model.generate_content(
            prompt
        )

        return response.text

    except Exception as e:

        print(
            "GEMINI ERROR:",
            e
        )

        return """
        AI summary is temporarily unavailable.
        Resume analysis was completed successfully.
        """