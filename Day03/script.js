document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.getElementsByClassName("accordian");

    // Function to toggle accordion behavior
    function toggleAccordion() {
        // Toggle "active" class on the accordion
        this.classList.toggle("active");

        // Toggle icon (+/-) based on accordion state
        var icon = this.querySelector('.icon');
        if (icon.textContent === '+') {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }

        // Toggle display of the accordion content panel
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    // Adding event listener to each accordion
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", toggleAccordion);
    }

    // Initialize the first accordion as active (expanded) by default
    if (accordions.length > 0) {
        var firstAccordion = accordions[0];
        firstAccordion.classList.add("active");
        var firstPanel = firstAccordion.nextElementSibling;
        firstPanel.style.display = "block";

        // Change icon to '-' for the first accordion
        var firstIcon = firstAccordion.querySelector('.icon');
        if (firstIcon) {
            firstIcon.textContent = '-';
        }
    }
});
