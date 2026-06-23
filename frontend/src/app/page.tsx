"use client";

import { useState } from "react";
import axios from "axios";
import {
  Upload,
  Sparkles,
  FileText,
} from "lucide-react";

type AnalysisResult = {
  resume_score: number;
  detected_skills: string[];
  match_score: number;
  missing_skills: string[];
  ai_summary: string;
};
import {
  CircularProgressbar
}
from "react-circular-progressbar";

import
"react-circular-progressbar/dist/styles.css";
import Typewriter from
"@/components/Typewriter";
import {
  generateReport
} from "@/utils/generateReport";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const [pdfUrl, setPdfUrl] =
    useState<string | null>(null);

  const [jobDescription, setJobDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a resume.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      formData.append(
        "job_description",
        jobDescription
      );

      const response = await axios.post(
        "https://talentlens-backend-rovi.onrender.com/analyze",
        formData
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">

      {/* HERO SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <nav className="flex justify-between items-center mb-16">

  <div className="flex items-center gap-2">

    <Sparkles className="text-indigo-600 w-10 h-10 " />

    <h1 className="font-extrabold text-4xl text-gray-900">

      TalentLens AI

    </h1>

  </div>

  <div className="flex gap-8 text-gray-600">

    <a href="#features">
      Features
    </a>

    <a href="#how-it-works">
      How It Works
    </a>

    <a href="#analyze">
      Analyze
    </a>

  </div>

</nav>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}

          <div>

            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">

              <Sparkles size={18} />

              <span className="text-sm font-medium">
                AI Powered ATS Analyzer
              </span>

            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">

              AI-Powered ATS
              <br />
              Resume Screening
              <br />
              Platform

            </h1>

            <p className="text-lg text-gray-600 mt-6 max-w-xl">

              Upload your resume, compare it
              against any job description,
              discover skill gaps, and generate
              an AI-powered candidate summary.

            </p>

          </div>

          {/* RIGHT CARD */}

          <div className="
             bg-white/70
              backdrop-blur-xl
              border
             border-white/30
              rounded-3xl
              shadow-2xl
              p-8
              "
          >

            <h2 className="text-2xl font-bold text-gray-900 mb-6">

              Analyze Resume

            </h2>

            <div className="flex items-center gap-2 mb-3">

              <Upload size={18} />

              <label className="font-medium">
                Upload Resume
              </label>

            </div>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) => {
                const selectedFile =
                  e.target.files?.[0];

                if (selectedFile) {

                  setFile(
                    selectedFile
                  );

                  setPdfUrl(
                    URL.createObjectURL(
                      selectedFile
                    )
                  );

                }

              }}
              className="w-full border border-gray-300 rounded-xl p-3"
            />

            {pdfUrl && (

              <iframe
                src={pdfUrl}
                className="
                w-full
                h-80
                rounded-xl
                border
                mt-4
                "
              />

            )}

            <label className="block mt-6 mb-3 font-medium">

              Job Description

            </label>

            <textarea
              rows={8}
              placeholder="Paste job description here..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 rounded-xl p-4"
            />

            <button
              onClick={handleAnalyze}
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-xl font-medium"
            >

              {loading
                ? "Analyzing..."
                : "Analyze Resume"}

            </button>

          </div>

        </div>

        <section
id="features"
className="mt-24"
>

  <h2
    className="
    text-4xl
    font-bold
    text-center
    text-gray-900
    mb-12
    "
  >

    Why Use TalentLens AI?

  </h2>

  <div
    className="
    grid
    md:grid-cols-3
    gap-8
    "
  >

    <div
      className="
      bg-white
      rounded-3xl
      shadow-lg
      p-8
      "
    >

      <h3
        className="
        text-xl
        font-bold
        "
      >

        ATS Screening

      </h3>

      <p
        className="
        mt-4
        text-gray-600
        "
      >

        Evaluate resumes using
        ATS-style analysis.

      </p>

    </div>

    <div
      className="
      bg-white
      rounded-3xl
      shadow-lg
      p-8
      "
    >

      <h3
        className="
        text-xl
        font-bold
        "
      >

        JD Matching

      </h3>

      <p
        className="
        mt-4
        text-gray-600
        "
      >

        Compare resumes against
        any job description.

      </p>

    </div>

    <div
      className="
      bg-white
      rounded-3xl
      shadow-lg
      p-8
      "
    >

      <h3
        className="
        text-xl
        font-bold
        "
      >

        AI Candidate Summary

      </h3>

      <p
        className="
        mt-4
        text-gray-600
        "
      >

        Gemini generates
        recruiter-ready summaries.

      </p>

    </div>

  </div>

</section>

<section
id="how-it-works"
className="mt-24"
>

  <h2
    className="
    text-4xl
    font-bold
    text-center
    text-gray-900
    mb-12
    "
  >

    How It Works

  </h2>

  <div
    className="
    grid
    md:grid-cols-4
    gap-8
    "
  >

    {[
      "Upload Resume",
      "Extract Skills",
      "Match JD",
      "Generate AI Summary"
    ].map((step, index) => (

      <div
        key={index}
        className="text-center"
      >

        <div
          className="
          w-16
          h-16
          rounded-full
          bg-indigo-100
          mx-auto
          flex
          items-center
          justify-center
          text-xl
          font-bold
          "
        >

          {index + 1}

        </div>

        <p className="mt-4">

          {step}

        </p>

      </div>

    ))}

  </div>

</section>

        {/* RESULTS */}

        {result && (

          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">

              Analysis Report

            </h2>

            {/* SCORE CARDS */}

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-indigo-50 rounded-2xl p-6 flex flex-col items-center">

                <p className="text-sm text-gray-600 mb-4">
                  Resume Score
                </p>

                <div className="w-24 h-24">

                  <CircularProgressbar
                    value={result.resume_score}
                    text={`${result.resume_score}%`}
                  />

                </div>

              </div>

              <div className="bg-purple-50 rounded-2xl p-6 flex flex-col items-center">

                <p className="text-sm text-gray-600 mb-4">
                  JD Match Score
                </p>

                <div className="w-24 h-24">

                  <CircularProgressbar
                    value={result.match_score}
                    text={`${result.match_score}%`}
                  />

                </div>

              </div>

              <div className="bg-green-50 rounded-2xl p-6">

                <p className="text-sm text-gray-600">
                  Skills Found
                </p>

                <h3 className="text-4xl font-bold text-green-700 mt-2">
                  {result.detected_skills.length}
                </h3>

              </div>

              <div className="bg-red-50 rounded-2xl p-6">

                <p className="text-sm text-gray-600">
                  Missing Skills
                </p>

                <h3 className="text-4xl font-bold text-red-700 mt-2">
                  {result.missing_skills.length}
                </h3>

              </div>

            </div>

            {/* SKILLS SECTION */}

            <div className="grid md:grid-cols-2 gap-10 mt-10">

              <div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">

                  Detected Skills

                </h3>

                <div className="flex flex-wrap gap-3">

                  {result.detected_skills.map(
                    (skill) => (

                      <span
                        key={skill}
                        className="
                        bg-green-100
                        text-green-700
                        px-4
                        py-2
                        rounded-full
                        font-medium
                        "
                      >

                        {skill}

                      </span>

                    )
                  )}

                </div>

              </div>

              <div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">

                  Missing Skills

                </h3>

                <div className="flex flex-wrap gap-3">

                  {result.missing_skills.length === 0 ? (

                    <span className="text-green-600 font-medium">

                      No missing skills 🎉

                    </span>

                  ) : (

                    result.missing_skills.map(
                      (skill) => (

                        <span
                          key={skill}
                          className="
                          bg-red-100
                          text-red-700
                          px-4
                          py-2
                          rounded-full
                          font-medium
                          "
                        >

                          {skill}

                        </span>

                      )
                    )

                  )}

                </div>

              </div>

            </div>

            {/* AI SUMMARY */}

            <div className="mt-12">

              <div className="flex items-center gap-2 mb-4">

                <FileText />

                <h3 className="text-2xl font-bold text-gray-900">

                  AI Candidate Summary

                </h3>

              </div>

              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">

                <Typewriter
                  text={result.ai_summary}
                />

              </div>

            </div>

            <div className="mt-8">

              <button
                onClick={() =>
                  generateReport(result)
                }
                className="
              bg-indigo-600
              hover:bg-indigo-700
              text-white
                px-6
                py-3
                rounded-xl
                font-medium
                "
              >

                Download Report

              </button>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}