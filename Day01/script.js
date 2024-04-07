function validateForm() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value; 
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    //check if full name is empty
    if (fullname.trim() === "") {
        alert("Please enter your full name.");
        return false;
    }

    //check if email is empty or invalid
    if (email.trim() === "" ) {
        alert("Please enter your email address.");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter valid email address.");
        return false;
    }
    
    //check if password is empty
    if (password === "") {
        alert("Please enter a password");
        return false;
    }

    // check if confirm password matches password
    if (confirmPassword === "") {
        alert("Please confirm password");
        return false;
    } else if (confirmPassword !== password) {
        alert("Passwords do not match");
        return false;
    }
    
    alert("Form submission successful")
    return true;
     
}


//Validate email format using regex

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}