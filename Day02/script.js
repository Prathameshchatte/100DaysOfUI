document.getElementById('checkoutForm').addEventListener('submit', function (event) {
    event.preventDefault();

    //validare card number, expiry date, and cvv
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (isValidCardNumber(cardNumber) && isValidExpiryDate(expiryDate) && isValidCVV(cvv)) {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function () {
            document.getElementById('successMessage').style.display = 'none';
            // you can redirect the user to a success page or perform other actions
        }, 3000);
    } else {
        alert('Please enter valid card details')
    }
});

function isValidCardNumber(cardNumber) {
    //simple validation for 16 digit card number
    return /^\d{16}$/.test(cardNumber);
}

function isValidExpiryDate(expiryDate) {
    // Validate format (MM/YY) using regex
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        return false; // Invalid format
    }

    // Extract month and year from expiryDate
    const [monthStr, yearStr] = expiryDate.split('/');
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10);

    // Validate month (must be between 1 and 12)
    if (month < 1 || month > 12) {
        return false; // Month out of valid range (1-12)
        
    }

    // Get current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get last two digits of current year (e.g., 24 for 2024)

    // Validate year (must be current year or later, up to 10 years in future)
    if (year < currentYear || year > currentYear + 10) {
        return false; // Year is not within the valid range (current year onwards, up to 10 years in future)
    }

    return true; // Expiry date is valid
}




function isValidCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}
