function sendMail(){
    event.preventDefault();
    
    // Get the input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Check if any field is empty
    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return; // Prevent the form from submitting
    }
    let parms = {
        name: name,
        email: email,
        phone: phone,
        message: message,
    };
    emailjs.send("service_g995ipo", "template_1fr7rna", parms)
    .then(() => alert("Email sent successfully"))
    .catch((error) => alert("Error sending email: " + error));
}
document.getElementById('contact-form').addEventListener('submit', sendMail);