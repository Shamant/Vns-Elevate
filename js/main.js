document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            console.log("Hamburger menu clicked");
        });
    }

    const links = document.querySelectorAll("a[href^='#']");
    for (let link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetID = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    document.querySelectorAll('.dropdown').forEach(item => {
        item.addEventListener('click', event => {
            item.classList.toggle('active');
            console.log("Dropdown menu clicked");
        });
    });
});
