//to get the list of skills for a seletced role
const roleSelect = document.getElementById("role");

const skillLists = document.querySelectorAll(".skills-list");

roleSelect.addEventListener("change", function () {

    // Hide all skill lists
    skillLists.forEach(function (list) {
        list.style.display = "none";
    });

    // Get the selected role
    const selectedRole = roleSelect.value;

    // Find the skill list for that role
    const selectedSkillList = document.querySelector("." + selectedRole);

    // Show the selected skill list
    selectedSkillList.style.display = "flex";
});

//show a msg when user click select your skills without selcting the role
const skillsSelection = document.querySelector(".skills-selection");
const popup = document.querySelector(".popup");

skillsSelection.addEventListener("click", function () {

    if (roleSelect.value === "") {

        // Show popup
        popup.style.display = "inline-block";

        // Hide popup after 3 seconds
        setTimeout(function () {
            popup.style.display = "none";
        }, 2000);

    }

});

// show msg when user click analyze btn without completely filling the form
const analyzeButton = document.querySelector(".analyze .btn");
const analyzePopup = document.querySelector(".analyze .popup");

analyzeButton.addEventListener("click", function (event) {

    // Hide the result initially
document.querySelector(".result").style.display = "none";

    // Check role
    if (roleSelect.value === "") {
        event.preventDefault();

        analyzePopup.innerHTML =
            '<i class="bi bi-exclamation-circle"></i> Please select a role first.';

        analyzePopup.style.display = "inline-block";

        setTimeout(function () {
            analyzePopup.style.display = "none";
        }, 3000);

        return;
    }

    // Get selected role's skill list like 
    const selectedSkillList = document.querySelector(
        "." + roleSelect.value
    );

    // Get all skill rows
    const skillRows = selectedSkillList.querySelectorAll(".skill-row");

    let skillSelected = false;
    let proficiencyMissing = false;
    let technologyMissing = false;

    skillRows.forEach(function (skillRow) {

        const checkbox = skillRow.querySelector(
            'input[type="checkbox"]'
        );

        // Only validate skills that user selected
        if (checkbox.checked) {

            skillSelected = true;
            // Check proficiency
            const proficiencyRadios = skillRow.querySelectorAll(
                'input[type="radio"][name$="-level"]'//get radio button with name ending with level
            );

            let proficiencySelected = false;

            proficiencyRadios.forEach(function (radio) {
                if (radio.checked) {
                    proficiencySelected = true;
                }
            });

            if (!proficiencySelected) {
                proficiencyMissing = true;
            }


            // -------------------------
            // Check technology
            // ------------------------

            const technologies = skillRow.querySelector(".technologies");

            if (technologies) {

                const technologyRadios =
                    technologies.querySelectorAll(
                        'input[type="radio"]'
                    );

                let technologySelected = false;

                technologyRadios.forEach(function (radio) {
                    if (radio.checked) {
                        technologySelected = true;
                    }
                });

                if (!technologySelected) {
                    technologyMissing = true;
                }
            }
        }
    });


    // -------------------------
    // Proficiency missing
    // -------------------------

    if (proficiencyMissing) {

        event.preventDefault();

        analyzePopup.innerHTML =
            '<i class="bi bi-exclamation-circle"></i> Please select proficiency for all selected skills.';

        analyzePopup.style.display = "inline-block";

        setTimeout(function () {
            analyzePopup.style.display = "none";
        }, 3000);

        return;
    }


    // -------------------------
    // Technology missing
    // -------------------------

    if (technologyMissing) {

        event.preventDefault();

        analyzePopup.innerHTML =
            '<i class="bi bi-exclamation-circle"></i> Please select a technology for each applicable skill.';

        analyzePopup.style.display = "inline-block";

        setTimeout(function () {
            analyzePopup.style.display = "none";
        }, 3000);

        return;
    }

    // Show result only when Analyze is valid
document.querySelector(".result").style.display = "block";
    // Get all the user's selected information
const userData = getUserData();


// Calculate readiness
const result = calculateReadiness(userData);

//calling function  Display the result on the dashboard
displayOverallResult(result);
// calling function display skill name along with it's gap
displaySkillResults(result);
//display roadmap
displayRoadmapTopics(result);
//to store the result
saveAnalysis(result);
});

// This function changes the Analyze button color
// depending on whether the form is ready to analyze.
function updateAnalyzeButton() {

    // If no role is selected,
    // the Analyze button should remain grey.
    if (roleSelect.value === "") {

        analyzeButton.style.backgroundColor = "grey";

        return;
    }


    // Get the skill list of the selected role
    const selectedSkillList = document.querySelector(
        "." + roleSelect.value
    );


    // Get all skill checkboxes in that role
    const skillCheckboxes = selectedSkillList.querySelectorAll(
        'input[type="checkbox"]'
    );


    // Assume the form is complete
    // We will change this to false if we find
    // a selected skill with missing information.
    let formComplete = true;


    // Check every skill
    skillCheckboxes.forEach(function (checkbox) {

        // We only need to check skills
        // that the user has selected.
        if (checkbox.checked) {

            // Get the complete skill row
            const skillRow = checkbox.closest(".skill-row");


            // Check whether proficiency is selected
            const proficiency = skillRow.querySelector(
                'input[type="radio"][name$="-level"]:checked'
            );


            // If proficiency is missing,
            // the form is not complete.
            if (!proficiency) {

                formComplete = false;

            }


            // Check whether this skill has technologies
            const technologies =
                skillRow.querySelector(".technologies");


            // If the skill has technology options
            if (technologies) {

                // Check whether a technology is selected
                const technology = technologies.querySelector(
                    'input[type="radio"]:checked'
                );


                // If technology is missing,
                // the form is not complete.
                if (!technology) {

                    formComplete = false;

                }

            }

        }

    });


    // If the role is selected AND
    // all selected skills are complete,
    // make the button violet.
    //
    // Notice:
    // We are NOT checking "skillSelected" anymore.
    //
    // Therefore:
    // Role + no skills = violet
    if (formComplete) {

        analyzeButton.style.backgroundColor = "var(--violet)";

    } else {

        analyzeButton.style.backgroundColor = "grey";

    }

}

//calling the function 
//Whenever the user changes a checkbox/radio/select, run updateAnalyzeButton().
document.addEventListener("change", updateAnalyzeButton);

// Automatically select skill when proficiency or technology is selected
document.addEventListener("change", function (event) {

    const input = event.target;

    // We only need to handle radio buttons
    if (input.type === "radio") {

        const skillRow = input.closest(".skill-row");

        if (skillRow) {

            const skillCheckbox = skillRow.querySelector(
                'input[type="checkbox"]'
            );

            // If proficiency or technology is selected,
            // select the skill automatically
            if (skillCheckbox) {
                skillCheckbox.checked = true;
            }
        }
    }

    // When skill checkbox is unchecked
    if (input.type === "checkbox" && !input.checked) {

        const skillRow = input.closest(".skill-row");

        if (skillRow) {

            // Unselect all radio buttons in this row
            const radios = skillRow.querySelectorAll(
                'input[type="radio"]'
            );

            radios.forEach(function (radio) {
                radio.checked = false;
            });
        }
    }

    // Update Analyze button color
    updateAnalyzeButton();
});

//function to get what user selects in the form
function getUserData() {

    const selectedRole = roleSelect.value;

    const selectedSkillList = document.querySelector(
        "." + selectedRole
    );

    const skillRows = selectedSkillList.querySelectorAll(
        ".skill-row"
    );

    const userSkills = [];

    skillRows.forEach(function (row) {

        const checkbox = row.querySelector(
            'input[type="checkbox"]'
        );

        if (checkbox.checked) {

            const proficiency = row.querySelector(
                'input[type="radio"][name$="-level"]:checked'
            );

            const technology = row.querySelector(
                ".technologies input[type='radio']:checked"
            );

            userSkills.push({
                skill: checkbox.id.replace("-skill", ""),
                level: proficiency ? proficiency.value : null,
                technology: technology ? technology.value : null
            });
        }
    });

    return {
        role: selectedRole,
        skills: userSkills
    };
}

// This object converts each proficiency level into a number.
// We use numbers so that we can compare the user's level
// with the level required for the role.

const levelValue = {

    beginner: 1,

    intermediate: 2,

    advanced: 3

};


// This function calculates:
// 1. Overall readiness
// 2. Readiness of each individual skill
// 3. Skill gap of each individual skill
function calculateReadiness(userData) {

    // Get the selected role
    // Example: "frontend"
    const role = userData.role;


    // Get all the skills required for that role
    // from data.js
    const roleSkills = roleData[role];


    // This will store the total weighted score
    let totalScore = 0;


    // This will store the total importance
    // of all the skills
    let totalImportance = 0;


    // This array will store the result
    // of every individual skill
    const skillResults = [];


    // Go through every skill required for the selected role
    for (const skill in roleSkills) {

        // Get the information about the current skill
        //
        // Example:
        // HTML:
        // importance: 20
        // requiredLevel: "intermediate"
        const skillData = roleSkills[skill];


        // Add this skill's importance
        // to the total importance
        totalImportance += skillData.importance;


        // Check whether the user selected this skill
        const userSkill = userData.skills.find(function (item) {

            // Compare the user's skill
            // with the current role skill
            return item.skill === skill;

        });


        // Start with level 0.
        // 0 means the user has not selected this skill.
        let currentLevel = 0;


        // If the user selected this skill
        if (userSkill) {

            // Convert the user's proficiency into a number
            //
            // beginner     = 1
            // intermediate = 2
            // advanced     = 3
            currentLevel = levelValue[userSkill.level];

        }


        // Get the level required by the selected role
        //
        // beginner     = 1
        // intermediate = 2
        // advanced     = 3
        const requiredLevel =
            levelValue[skillData.requiredLevel];


        // Calculate how ready the user is for this skill
        //
        // Example:
        // Current level = Beginner = 1
        // Required level = Intermediate = 2
        //
        // 1 / 2 * 100 = 50%
        let readiness =
            (currentLevel / requiredLevel) * 100;


        // Make sure readiness never goes above 100%
        if (readiness > 100) {

            readiness = 100;

        }


        // Calculate the remaining skill gap
        //
        // Example:
        // Readiness = 60%
        // Gap = 40%
        const gap = 100 - readiness;


        // Add this skill's weighted score
        //
        // Example:
        // Importance = 20
        // Readiness = 50%
        //
        // 20 * 0.50 = 10
        totalScore +=
            skillData.importance * (readiness / 100);


        // Store the result of this skill
        skillResults.push({

            // Name of the skill
            skill: skill,

            // Importance of the skill
            importance: skillData.importance,

            // Level required by the role
            requiredLevel: skillData.requiredLevel,

            // Level selected by the user
            // If not selected, store null
            currentLevel: userSkill
                ? userSkill.level
                : null,

            // Readiness percentage
            readiness: readiness,

            // Remaining gap percentage
            gap: gap,

            // Technology selected by the user
            // If this skill does not have technology,
            // this will be null
            technology: userSkill
                ? userSkill.technology
                : null

        });

    }


    // Calculate the overall readiness percentage

    // Example:
    // totalScore = 65
    // totalImportance = 100
    // 65 / 100 * 100 = 65%
    const overallReadiness =
        (totalScore / totalImportance) * 100;


    // Return both results together
    return {

        role:userData.role,

        // Overall role readiness
        overallReadiness: overallReadiness,

        // Individual skill results
        skillResults: skillResults

    };

}

// This function displays the overall analysis result
// in the dashboard.
function displayOverallResult(result) {

    // Get the overall readiness percentage
    const readiness = result.overallReadiness;


    // Calculate the remaining skill gap
    const gap = 100 - readiness;

// Get the donut chart
const donut = document.querySelector(".donut");
// Show the prepared percentage inside the donut
donut.setAttribute(
    "data-percentage",
    `${readiness.toFixed(0)}%`
);

// Change the donut according to the readiness
donut.style.background = `
    conic-gradient(
        var(--violet) 0% ${readiness}%,
        #e4d5f5 ${readiness}% 100%
    )
`;

    // Get the "prepared" paragraph from the dashboard
    const preparedElement =
        document.querySelector(".percentages .prepared");


    // Get the "gap" paragraph from the dashboard
    const gapElement =
        document.querySelector(".percentages .gap");


    // Get the heading inside the message section
    const messageHeading =
        document.querySelector(".message h2");


    // Get the paragraph inside the message section
    const messageText =
        document.querySelector(".message p");


    // Display the prepared percentage
    preparedElement.innerHTML =
    `Prepared: <span>${readiness.toFixed(0)}%</span>`;


    // Display the remaining gap
   gapElement.innerHTML =
    `Skill Gap: <span>${gap.toFixed(0)}%</span>`;


    // Give a message according to the readiness
    if (readiness >= 70) {

        messageHeading.textContent =
            "Good progress!";

        messageText.textContent =
            "You are well prepared for this role. Keep improving your skills.";

    }
    else if (readiness >= 40) {

        messageHeading.textContent =
            "You're making progress!";

        messageText.textContent =
            "You have a good foundation, but there are some skills you still need to improve.";

    }
    else {

        messageHeading.textContent =
            "Let's build your skills!";

        messageText.textContent =
            "You have several skill gaps to work on. Follow the roadmap to prepare for this role.";

    }

}
//storing icons
const skillIcons = {
    html: '<i class="devicon-html5-plain colored"></i>',
    css: '<i class="devicon-css3-plain colored"></i>',
    js: '<i class="devicon-javascript-plain colored"></i>',
    react: '<i class="devicon-react-original colored"></i>',
    git: '<i class="devicon-github-original colored"></i>',
    responsive: `<span
              style="color: #009688"
              ><i class="bi bi-pc-display"></i
            ></span>`,

    backend: `<span style="color: #1565c0"><i class="bi bi-server"></i></span>`,
    database: `<span
              style="color: #00897b"
              ><i class="bi bi-database-fill"></i
            ></span>`,
    sql:'<i class="devicon-azuresqldatabase-plain colored"></i>',
    oracle:'<i class="devicon-oracle-original colored"style="font-size: 5rem"></i>',
    api: `<span style="color: #2196f3"><i class="bi bi-plug-fill"></i></span>`,
    fastapi:`<i
                  class="devicon-fastapi-plain-wordmark colored"
                  style="font-size: 5rem"
                ></i
              >`,
    openapi:`<i
                  class="devicon-openapi-plain-wordmark colored"
                  style="font-size: 5rem"
                ></i
              >`,
    node: '<i class="devicon-nodejs-plain-wordmark colored"></i>',
    java:'<i class="devicon-java-plain-wordmark colored"></i>',
    python:'<i class="devicon-python-plain-wordmark colored"></i>',
    php:'<i class="devicon-php-plain colored"></i>',
    uiux: `<span style="color: #e91e63"><i class="bi bi-brush-fill"></i></span>`,
    figma: '<i class="devicon-figma-plain colored"></i>',
    typography: `<span style="color: #9c27b0"><i class="bi bi-fonts"></i></span>`,
    color: `<span style="color: #ff9800"
              ><i class="bi bi-palette-fill"></i
            ></span>`,
    prototyping: ' <span style="color: #673ab7"><i class="bi bi-bezier"></i></span>'
};
//storing skill names
const skillDisplayNames = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    react: "React",
    git: "Git / GitHub",
    responsive: "Responsive Design",
    node:"Node.js",
    java:"Java",
    php:"PHP",
    python:"Python",
    sql:"SQL",
    oracle:"Oracle",
    fastapi:"FastAPI",
    openapi:"openAPI",
    backend: "Backend Technology",
    database: "Database",
    api: "APIs",
    node: "Node.js",

    uiux: "UI/UX Design",
    figma: "Figma",
    typography: "Typography",
    color: "Color Theory",
    prototyping: "Prototyping"
};

// This function displays each skill
// and its individual skill gap
function displaySkillResults(result) {

    // Get all the roadmap skill cards
    const skillCards =
        document.querySelectorAll(".roadmap .skill");


    // First hide all cards
    skillCards.forEach(function (card) {

        card.style.display = "none";

    });


    // Keep track of which card to use
    let cardIndex = 0;


    // Go through every skill result
    result.skillResults.forEach(function (skillResult) {

        // If gap is 0, don't show this skill
        if (skillResult.gap === 0) {

            return;

        }


        // Get the current roadmap card
        const skillCard = skillCards[cardIndex];


        // If there is no card available, stop
        if (!skillCard) {

            return;

        }


        // Show this card
        skillCard.style.display = "block";


        // Get the icon element
        const iconElement =
            skillCard.querySelector(".skill-icon");


        // Get the skill name element
        const skillNameElement =
            skillCard.querySelector(".skill-name");


        // Get the gap element
        const gapElement =
            skillCard.querySelector(".gap");


        // --------------------------------
        // Decide what name and icon to show
        // --------------------------------

        // By default, use the normal skill
        let displaySkill = skillResult.skill;


        // Check whether the user selected
        // a technology for this skill
        if (skillResult.technology) {

            // Example:
            // backend + python
            //
            // displaySkill becomes:
            // python
            displaySkill =
                skillResult.technology;

        }


        // --------------------------------
        // Display icon
        // --------------------------------

        // Get the icon using the selected
        // skill or technology
        iconElement.innerHTML =
            skillIcons[displaySkill] || "";


        // --------------------------------
        // Display name
        // --------------------------------

        // Get the name using the selected
        // skill or technology
        skillNameElement.textContent =
            skillDisplayNames[displaySkill] || displaySkill;


        // --------------------------------
        // Display skill gap
        // --------------------------------

        gapElement.textContent =
            `Skill Gap: ${skillResult.gap.toFixed(0)}%`;


        // Move to the next roadmap card
        cardIndex++;

    });
}

// Function to display roadmap topics
function displayRoadmapTopics(result) {

    // Get all roadmap cards from HTML
    const skillCards =
        document.querySelectorAll(".roadmap .skill");


    // Keep track of which card we are using
    let cardIndex = 0;


    // Go through every skill result
    result.skillResults.forEach(function (skillResult) {

        // If there is no skill gap,
        // there is no roadmap needed
        if (skillResult.gap === 0) {
            return;
        }


        // Get the current roadmap card
        const skillCard = skillCards[cardIndex];


        // If there is no card available, stop
        if (!skillCard) {
            return;
        }


        // Get the <ul> where topics will be displayed
        const topicsList =
            skillCard.querySelector(".roadmap-topics");


        // Clear old topics
        topicsList.innerHTML = "";


        // Get this skill's data from data.js
        const skillData =
            roleData[result.role][skillResult.skill];


        // -----------------------------
        // Get the correct roadmap
        // -----------------------------

        // Start with the general roadmap
        let roadmap = skillData.roadmap;


        // Check whether the user selected
        // a technology for this skill
        if (
            skillResult.technology &&
            skillData.technologies
        ) {

            // Get the technology selected by the user
            //
            // Example:
            // "python"
            const selectedTechnology =
                skillResult.technology;


            // Check whether this technology
            // exists in data.js
            if (
                skillData.technologies[selectedTechnology]
            ) {

                // Use the technology-specific roadmap
                //
                // Example:
                // Backend + Python
                //       ↓
                // Python roadmap
                roadmap =
                    skillData.technologies[
                        selectedTechnology
                    ].roadmap;
            }
        }


        // If no roadmap exists, stop
        if (!roadmap) {
            return;
        }


        // Get the user's current level
        //
        // If the user did not select the skill,
        // currentLevel will be null.
        const currentLevel =
            skillResult.currentLevel;


        // Get the level required by the role
        const requiredLevel =
            skillResult.requiredLevel;


        // Levels in their correct order
        const levels = [
            "beginner",
            "intermediate",
            "advanced"
        ];


        // Find the position of the required level
        const requiredIndex =
            levels.indexOf(requiredLevel);


        // --------------------------------
        // USER DID NOT SELECT THE SKILL
        // --------------------------------

        if (!currentLevel) {

            // User doesn't know the skill.
            // So start from Beginner.
            const startIndex = 0;


            // Show Beginner → Required Level
            for (
                let i = startIndex;
                i <= requiredIndex;
                i++
            ) {

                // Add topics for this level
                addTopics(
                    topicsList,
                    roadmap[levels[i]]
                );
            }
        }


        // --------------------------------
        // USER SELECTED THE SKILL
        // --------------------------------

        else {

            // Find the user's current level
            const currentIndex =
                levels.indexOf(currentLevel);


            // Start from the NEXT level
            //
            // Beginner → Intermediate
            // Intermediate → Advanced
            // Advanced → nothing
            const startIndex =
                currentIndex + 1;


            // Show NEXT level → Required Level
            for (
                let i = startIndex;
                i <= requiredIndex;
                i++
            ) {

                // Add topics for this level
                addTopics(
                    topicsList,
                    roadmap[levels[i]]
                );
            }
        }


        // Move to the next roadmap card
        cardIndex++;

    });
}

// Function to add topics to the list
function addTopics(list, topics) {

    // If there are no topics, stop
    if (!topics) {
        return;
    }

    topics.forEach(function (topic) {

        // Create a new <li>
        const li = document.createElement("li");

        // Put the topic inside it
        li.textContent = topic;

        // Add it to the <ul>
        list.appendChild(li);
    });
}

function saveAnalysis(result) {

    const dashboard = document.querySelector("#dashboard");

    const roleName =
    roleSelect.options[roleSelect.selectedIndex].textContent;

const analysis = {
    role: roleName,
    dashboardHTML: dashboard.innerHTML
};

    let analyses = JSON.parse(
        localStorage.getItem("skillCheckAnalyses")
    ) || [];

    analyses.push(analysis);

    if (analyses.length > 5) {
        analyses.shift();
    }

    localStorage.setItem(
        "skillCheckAnalyses",
        JSON.stringify(analyses)
    );
}