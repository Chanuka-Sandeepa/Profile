// Initialize EmailJS with your public key
(function () {
    emailjs.init("K3oY1Qb2yvSSki5Vn");
})();

window.onload = function () {
    const form = document.getElementById("contact-form");
    const loader = document.querySelector(".loader");
    const msg = document.querySelector(".form-message");
    const downloadCVButton = document.getElementById("About_btn");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        loader.style.display = "block"; // Show the loader

        emailjs
            .sendForm("service_6pejzp4", "template_2aa5bcs", form)
            .then(
                () => {
                    form.reset(); // Clear the form
                    loader.style.display = "none"; // Hide the loader
                    msg.innerHTML = "Message sent successfully!";
                    msg.style.color = "green";
                    msg.style.display = "block";

                    setTimeout(() => {
                        msg.style.display = "none"; // Hide the message after 2 seconds
                    }, 2000);
                },
                (error) => {
                    console.error("FAILED...", error);
                    loader.style.display = "none"; // Hide the loader
                    msg.innerHTML = "Failed to send the message. Please try again later.";
                    msg.style.color = "red";
                    msg.style.display = "block";

                    setTimeout(() => {
                        msg.style.display = "none"; // Hide the message after 2 seconds
                    }, 2000);
                }
            );
    });

    if (downloadCVButton) {
        downloadCVButton.addEventListener("click", function () {
            const cvURL = "https://drive.google.com/file/d/1PQViwsJ-xX46Ib4AHVoS7EonB6H9grQ-/view?usp=drive_link"; // Replace 'YOUR_FILE_ID' with your Google Drive file ID
            const anchor = document.createElement("a");
            anchor.href = cvURL;
            anchor.target = "_blank"; // Open in a new tab (optional)
            anchor.click(); // Trigger the download
        });
    } else {
        console.error("Download button with ID 'About_btn' not found.");
    }
};
