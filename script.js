document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Copy email to clipboard
    const emailElement = document.getElementById("email");
    if (emailElement) {
        emailElement.addEventListener("click", function () {
            navigator.clipboard.writeText(emailElement.innerText).then(() => {
                alert("Email copied to clipboard!");
            });
        });
    }
});
