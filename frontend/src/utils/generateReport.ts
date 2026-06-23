import jsPDF from "jspdf";

type AnalysisResult = {
  resume_score: number;
  detected_skills: string[];
  match_score: number;
  missing_skills: string[];
  ai_summary: string;
};

export function generateReport(
  result: AnalysisResult
) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("TalentLens AI Report", 20, y);

  y += 15;

  doc.setFontSize(12);

  doc.text(
    `Resume Score: ${result.resume_score}%`,
    20,
    y
  );

  y += 10;

  doc.text(
    `JD Match Score: ${result.match_score}%`,
    20,
    y
  );

  y += 20;

  doc.setFontSize(14);
  doc.text(
    "Detected Skills",
    20,
    y
  );

  y += 10;

  result.detected_skills.forEach(
    (skill) => {
      doc.text(`• ${skill}`, 25, y);
      y += 8;
    }
  );

  y += 10;

  doc.text(
    "Missing Skills",
    20,
    y
  );

  y += 10;

  result.missing_skills.forEach(
    (skill) => {
      doc.text(`• ${skill}`, 25, y);
      y += 8;
    }
  );

  y += 15;

  doc.text(
    "AI Candidate Summary",
    20,
    y
  );

  y += 10;

  const summaryLines =
    doc.splitTextToSize(
      result.ai_summary,
      170
    );

  doc.text(
    summaryLines,
    20,
    y
  );

  doc.save(
    "TalentLens_Report.pdf"
  );
}