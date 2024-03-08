document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('signin').addEventListener('click', function(event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (!validateEmail(email)) {
            event.preventDefault(); // Prevent the default behavior of the link
            alert("Please enter a valid email address.");
        } else if (!validatePassword(password)) {
            event.preventDefault(); // Prevent the default behavior of the link
            alert("Password must be at least 8 characters long.");
        }
    });
    document.getElementById('forgotPassword').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        alert("Please contact support to reset your password.");
    });
});
const bcrypt = require('bcryptjs');

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('signin').addEventListener('click', function(event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Retrieve the hashed password from your database using the email
        const hashedPasswordFromDB = 'hashed_password_retrieved_from_database';

        // Compare the hashed password with the password entered
        if (bcrypt.compareSync(password, hashedPasswordFromDB)) {
            // Passwords match, proceed with login
            alert("Login successful!");
        } else {
            // Passwords do not match
            alert("Invalid email or password.");
            event.preventDefault(); // Prevent the default behavior of the link
        }
    });
});


function validateEmail(email) {
    // Use a regular expression to validate the email format
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    // Check if password is at least 8 characters long
    return password.length >= 8;
}
