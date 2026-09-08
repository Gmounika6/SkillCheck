//memu bar for mobile devices
const toggler = document.getElementById("toggler");
const navbar = document.querySelector(".navbar");

toggler.addEventListener("click", function () {
    navbar.classList.toggle("menubar");
});
// Close mobile menu after selecting a section
const links = document.querySelectorAll(".navbar a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("menubar");
        toggler.checked = false;
    });
});

// Activate navbar item based on the section being viewed
// here our task is to highlight the section name in navbar when it is viwed by the user 
const sections = document.querySelectorAll("section");//get all the section elements
const navLinks = document.querySelectorAll(".navbar a");//get all the anchor tags in navbar
//if scroll is happen it check which section is in visible with the help of calculating scrolly and offsets and all
window.addEventListener("scroll", function () {//here window means the visible area where our html doc is being displayed. is scroll event is done on that window then this function will run

    sections.forEach(function (section) {

        const top = section.offsetTop;// gives How far the section is from the top of the page.
        const height = section.offsetHeight;// gives height of that section.
        //condition to check Is the user currently within this section?
        if (window.scrollY >= top - 100 &&//window.scrollY tells us how far the page has been scrolled vertically.
            window.scrollY < top + height - 100) {//the -100 is used to make the section active earlier/lower in the scrolling process.

            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                '.navbar a[href="#' + section.id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

});

//explore roles section js 
//show more button
/*when show more is clicked hide-role class is removed form the last two roles div if show less clicked hide-role class is added*/

const showMoreBtn = document.querySelector(".show-more");

const hiddenRoles = document.querySelectorAll(".role-hide");


// Check whether the Show More button exists
if (showMoreBtn) {

    // Run this code when Show More button is clicked
    showMoreBtn.addEventListener("click", function () {

        // Show or hide the hidden roles
        hiddenRoles.forEach(function (role) {

            role.classList.toggle("role-hide");

        });


        // Check whether the button currently has
        // the "show-more" class
        if (showMoreBtn.classList.contains("show-more")) {

            // Change Show More to Show Less
            showMoreBtn.classList.remove("show-more");

            showMoreBtn.classList.add("show-less");

            showMoreBtn.innerHTML =
                'Show Less <i class="bi bi-arrow-up-short"></i>';

        } else {

            // Change Show Less back to Show More
            showMoreBtn.classList.remove("show-less");

            showMoreBtn.classList.add("show-more");

            showMoreBtn.innerHTML =
                'Show More <i class="bi bi-arrow-down-short"></i>';

        }

    });

}


// View Details buttons
const viewDetailsButtons = document.querySelectorAll(".view-details");

viewDetailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Close all details
        document.querySelectorAll(".details").forEach(function (details) {
            details.style.display = "none";
        });

        // Show all View Details buttons
        viewDetailsButtons.forEach(function (btn) {
            btn.style.display = "block";
        });

        // Find the role of the clicked button
        const role = button.closest(".role");

        // Find details inside that role
        const details = role.querySelector(".details");

        // Show details
        details.style.display = "block";

        // Hide clicked button
        button.style.display = "none";
    });
});


/* Close details when the opened role is clicked
document.querySelectorAll(".role").forEach(function (role) {

    role.addEventListener("click", function (event) {

        // If the clicked element is the View Details button,
        // don't close the details
        if (event.target.closest(".view-details")) {//event.target means what exactly did the user click
            return;
        }

        // Find details inside this role
        const details = role.querySelector(".details");

        // Check whether this role's details are currently open
        if (details.style.display === "block") {

            // Close the details
            details.style.display = "none";

            // Show the View Details button again
            const button = role.querySelector(".view-details");
            button.style.display = "block";
        }
    });
});*/


document.addEventListener("DOMContentLoaded", function () {
    loadAnalyses();
});

document.addEventListener("click", function (event) {

    const removeButton = event.target.closest(".remove");

    if (!removeButton) {
        return;
    }

    const historyCards =
        document.querySelectorAll(".history");

    const card =
        removeButton.closest(".history");

    const cardIndex =
        Array.from(historyCards).indexOf(card);

    let analyses = JSON.parse(
        localStorage.getItem("skillCheckAnalyses")
    ) || [];

    // Remove the selected analysis
    analyses.splice(cardIndex, 1);

    // Save the updated list
    localStorage.setItem(
        "skillCheckAnalyses",
        JSON.stringify(analyses)
    );

    // Display the updated history
    loadAnalyses();
});

function loadAnalyses() {

    const analyses = JSON.parse(
        localStorage.getItem("skillCheckAnalyses")
    ) || [];

    const historyCards =
        document.querySelectorAll(".history");

    const emptyState =
        document.querySelector(".empty-state");

    historyCards.forEach(function (card) {
        card.style.display = "none";

        card.querySelector(".name").textContent = "";

        const oldDashboard =
            card.querySelector(".saved-dashboard");

        if (oldDashboard) {
            oldDashboard.remove();
        }
    });

    analyses.forEach(function (analysis, index) {

        const card = historyCards[index];

        card.querySelector(".name").textContent =
            analysis.role;

        const dashboard =
            document.createElement("div");

        dashboard.className = "saved-dashboard";

        dashboard.innerHTML =
            analysis.dashboardHTML;

        card.insertBefore(
            dashboard,
            card.querySelector(".remove")
        );

        card.style.display = "block";
    });

    if (analyses.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}