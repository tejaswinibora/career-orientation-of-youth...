
let studentData = {};

// PAGE NAVIGATION

function nextPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber)
        .classList.add("active");

    let progress = pageNumber === 1
        ? 0
        : ((pageNumber - 1) / 6) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
    nextPage(1);
}

function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(message) {
    alert(message);
}

// PAGE 2: PERSONAL DETAILS

function savePersonal() {

    let name = getValue("name");
    let mobile = getValue("mobile");
    let email = getValue("email");
    let password = getValue("password");
    let confirmPassword = getValue("confirmPassword");

    if (!name || !mobile || !email || !password || !confirmPassword) {
        return showError("Please fill all personal details.");
    }

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        return showError("Enter valid 10 digit mobile number.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return showError("Enter valid email address.");
    }

    if (password.length < 8) {
        return showError("Password must contain at least 8 characters.");
    }

    if (password !== confirmPassword) {
        return showError("Passwords do not match.");
    }

    studentData.name = name;
    studentData.mobile = mobile;
    studentData.email = email;

    // Password is not stored or displayed
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";

    nextPage(3);
}

// PAGE 3: EDUCATION

function saveEducation() {

    let education = getValue("education");
    let college = getValue("college");
    let course = getValue("course");
    let year = getValue("year");
    let percentage = getValue("percentage");

    if (!education || !college || !course || !year || !percentage) {
        return showError("Please complete all education details.");
    }

    studentData.education = education;
    studentData.college = college;
    studentData.course = course;
    studentData.year = year;
    studentData.percentage = percentage;

    nextPage(4);
}

// PAGE 4: SKILLS

function saveSkills() {

    let skills = getValue("skills");
    let otherSkills = getValue("otherSkills");
    let hobbies = getValue("hobbies");
    let interest = getValue("interest");

    if (!skills || !otherSkills || !hobbies || !interest) {
        return showError("Please complete all skills and interests.");
    }

    studentData.skills = skills;
    studentData.otherSkills = otherSkills;
    studentData.hobbies = hobbies;
    studentData.interest = interest;

    nextPage(5);
}

// CAREER INFORMATION

const careerDetails = {

    "Software Developer": {
        description: "Software Developers create applications, websites and software systems.",
        skills: "Java, Python, C++, Programming, Database, Problem Solving.",
        education: "BCA, BSc Computer Science or BE Computer Engineering.",
        jobs: "Software Engineer, Application Developer, Full Stack Developer.",
        salary: "Approx. ₹3 LPA - ₹12 LPA.",
        advice: "Learn programming, build projects and practice coding."
    },

    "Web Developer": {
        description: "Web Developers design and develop websites.",
        skills: "HTML, CSS, JavaScript, React, PHP, MySQL.",
        education: "BCA, BSc IT or Computer Engineering.",
        jobs: "Frontend Developer, Backend Developer, Full Stack Developer.",
        salary: "Approx. ₹2.5 LPA - ₹8 LPA.",
        advice: "Create websites and build your portfolio."
    },

    "Data Analyst": {
        description: "Data Analysts study data and prepare business reports.",
        skills: "Excel, SQL, Python, Power BI, Statistics.",
        education: "BSc, BCA, BCom, BBA or related degree.",
        jobs: "Data Analyst, Business Intelligence Analyst.",
        salary: "Approx. ₹3 LPA - ₹9 LPA.",
        advice: "Practice Excel, SQL and Power BI."
    },

    "Cyber Security Expert": {
        description: "Cyber Security Experts protect computers and networks.",
        skills: "Networking, Linux, Python, Security Basics.",
        education: "BCA, BSc IT or Computer Engineering.",
        jobs: "Security Analyst, SOC Analyst, Security Engineer.",
        salary: "Approx. ₹3 LPA - ₹10 LPA.",
        advice: "Learn networking and cybersecurity fundamentals."
    },

    "UI/UX Designer": {
        description: "UI/UX Designers create attractive and user-friendly designs.",
        skills: "Figma, Creativity, Wireframing, Prototyping.",
        education: "Any degree with relevant design training.",
        jobs: "UI Designer, UX Designer, Product Designer.",
        salary: "Approx. ₹3 LPA - ₹9 LPA.",
        advice: "Learn Figma and create a design portfolio."
    },

    "Business Analyst": {
        description: "Business Analysts study business problems and suggest solutions.",
        skills: "Excel, SQL, Communication, Data Analysis.",
        education: "BBA, BCom, MBA or related degree.",
        jobs: "Business Analyst, Operations Analyst.",
        salary: "Approx. ₹3 LPA - ₹9 LPA.",
        advice: "Improve analytical and communication skills."
    },

    "Government Job": {
        description: "Government employees work in public administration.",
        skills: "General Knowledge, Reasoning, Mathematics.",
        education: "Depends on the selected examination.",
        jobs: "UPSC, MPSC, SSC, Banking and other services.",
        salary: "Depends on post and pay level.",
        advice: "Choose an eligible examination and prepare regularly."
    },

    "Teacher / Professor": {
        description: "Teachers help students gain knowledge and skills.",
        skills: "Communication, Teaching, Subject Knowledge.",
        education: "Relevant degree and required teaching qualifications.",
        jobs: "Teacher, Lecturer, Professor, Trainer.",
        salary: "Depends on qualification and institution.",
        advice: "Develop subject knowledge and teaching skills."
    },

    "Entrepreneur": {
        description: "Entrepreneurs start and manage their own businesses.",
        skills: "Leadership, Marketing, Finance, Planning.",
        education: "Any educational background with business knowledge.",
        jobs: "Business Owner, Startup Founder.",
        salary: "Depends on business performance.",
        advice: "Start with a business idea and prepare a business plan."
    },

    "Other": {
        description: "Explore career opportunities according to your interests.",
        skills: "Communication, Problem Solving, Learning.",
        education: "Depends on the chosen career.",
        jobs: "Various career opportunities.",
        salary: "Depends on the profession.",
        advice: "Research your selected career and its qualifications."
    }
};

// PAGE 5: CAREER

function saveCareer() {

    let career = getValue("career");
    let jobType = getValue("jobType");
    let goal = getValue("goal");
    let location = getValue("location");

    if (!career || !jobType || !goal || !location) {
        return showError("Please complete all career details.");
    }

    studentData.career = career;
    studentData.jobType = jobType;
    studentData.goal = goal;
    studentData.location = location;

    showReview();
    nextPage(6);
}

// SAFE HTML TEXT

function safeText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[char]));
}

// PAGE 6: FINAL REVIEW

function showReview() {

    const review = document.getElementById("reviewData");

    const groups = [
        {
            title: "Personal Information",
            fields: [
                ["Name", "name"],
                ["Mobile", "mobile"],
                ["Email", "email"],
                ["Password", null]
            ]
        },
        {
            title: "Education Details",
            fields: [
                ["Education", "education"],
                ["College", "college"],
                ["Course", "course"],
                ["Year", "year"],
                ["Percentage / CGPA", "percentage"]
            ]
        },
        {
            title: "Skills & Interests",
            fields: [
                ["Technical Skills", "skills"],
                ["Other Skills", "otherSkills"],
                ["Hobbies", "hobbies"],
                ["Interests", "interest"]
            ]
        },
        {
            title: "Career Preferences",
            fields: [
                ["Career", "career"],
                ["Job Type", "jobType"],
                ["Future Goal", "goal"],
                ["Location", "location"]
            ]
        }
    ];

    review.innerHTML = groups.map(group => `
        <div class="review-card">
            <h3>${group.title}</h3>
            ${group.fields.map(([label, key]) => `
                <p><strong>${label}:</strong> ${
                    key ? safeText(studentData[key]) : "Not displayed for security"
                }</p>
            `).join("")}
        </div>
    `).join("");
}

// PAGE 7: THANK YOU + CAREER RESULT

function finishRegistration() {

    const details = careerDetails[studentData.career];

    if (!details) {
        return showError("Career information not found.");
    }

    document.getElementById("thankName").textContent =
        "Dear " + studentData.name + ", welcome to your career journey!";

    document.getElementById("careerTitle").textContent =
        studentData.career;

    document.getElementById("careerDescription").textContent =
        details.description;

    document.getElementById("careerSkills").textContent =
        details.skills;

    document.getElementById("careerEducation").textContent =
        details.education;

    document.getElementById("careerJobs").textContent =
        details.jobs;

    document.getElementById("careerSalary").textContent =
        details.salary;

    document.getElementById("careerAdvice").textContent =
        details.advice;

    nextPage(7);
}

// BACK TO HOME

function restart() {

    studentData = {};

    document.querySelectorAll("input, textarea, select").forEach(field => {
        field.value = "";
    });

    document.getElementById("reviewData").innerHTML = "";

    nextPage(1);
}
