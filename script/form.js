
function validateForm() {
    // var mm = document.getElementById("jj").v
    var password = document.getElementById("userPassword").value;
    // var email = document.getElementById("userEmail").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match!";
        return false;
    } else {
        confirmPasswordError.textContent = ""; // Clear any previous error message
    }
    return true;
}

function handleSelection() {
    var selectElement = document.getElementById("classLevel");
    var selectedValue = selectElement.value;

    if (selectedValue === "jss") {
        // document.querySelector("seniorLevel").style.display = "none";
        document.getElementById("seniorLevel").style.display = "none";
        document.getElementById("seniorLevelStream").style.display = "none";
    } else if (selectedValue === "sss") {
        document.getElementById("seniorLevel").style.display = "flex";
        document.getElementById("juniorLevel").style.display = "none";
        document.getElementById("seniorLevelStream").style.display = "flex";
    }
}
