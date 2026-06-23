from skills import skills


def extract_skills(text):

    text = text.lower()

    found_skills = []

    for skill in skills:

        if skill in text:
            found_skills.append(skill)

    return found_skills


def calculate_resume_score(found_skills):

    score = len(found_skills) * 5

    if score > 100:
        score = 100

    return score


def compare_with_jd(resume_skills, jd_text):

    jd_text = jd_text.lower()

    jd_skills = []

    for skill in skills:

        if skill in jd_text:
            jd_skills.append(skill)

    matched = []

    missing = []

    for skill in jd_skills:

        if skill in resume_skills:
            matched.append(skill)
        else:
            missing.append(skill)

    if len(jd_skills) == 0:
        match_score = 0
    else:
        match_score = int(
            (len(matched) / len(jd_skills)) * 100
        )

    return {
        "match_score": match_score,
        "missing_skills": missing
    }