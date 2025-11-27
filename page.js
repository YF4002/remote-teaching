const EmailInput = document.getElementById("email");
const PasswordInput = document.getElementById("pass");
const ConfirmPasswordInput = document.getElementById("confirm");
const ShowPassword = document.getElementById("toggle-pass");
const ShowPasswordtwo = document.getElementById("toggle-confirm-pass");
const SubmitButton = document.getElementById("register-btn");

const YearsTeaching = document.getElementById("quantity");
const YearsRemoteTeaching = document.getElementById("quantity-remote");

//make years of teaching remote less than or equal to years of teaching
YearsRemoteTeaching.addEventListener("input", function() {
    if (parseInt(YearsRemoteTeaching.value) > parseInt(YearsTeaching.value)) {
        YearsRemoteTeaching.value = YearsTeaching.value;
    }
});

//make years of teaching greater than or equal to years of teaching remote
YearsTeaching.addEventListener("input", function() {
    if (parseInt(YearsTeaching.value) < parseInt(YearsRemoteTeaching.value)) {
        YearsTeaching.value = YearsRemoteTeaching.value;
    }
});

ShowPassword.addEventListener("click", TogglePasswordVisibility);
ShowPassword.addEventListener("click", TogglePasswordText);

ShowPasswordtwo.addEventListener("click", ToggleConfirmPasswordVisibility);
ShowPasswordtwo.addEventListener("click", TogglePasswordtwoText);



function TogglePasswordVisibility() {
    //toggle password visibilitynn
    if(PasswordInput.type === "password") {
        PasswordInput.type = "text";
    }  
    else {
        PasswordInput.type = "password";
    } 
}

function ToggleConfirmPasswordVisibility() {
    //toggle confirm password visibility
    if(ConfirmPasswordInput.type === "password") {
        ConfirmPasswordInput.type = "text";
    }  
    else {
        ConfirmPasswordInput.type = "password";
    }
}

function TogglePasswordText() {
    //toggle show/hide text
    if(ShowPassword.innerText === "SHOW") {
        ShowPassword.innerText = "HIDE";
    }  
    else {
        ShowPassword.innerText = "SHOW";
    } 
}

function TogglePasswordtwoText() {
    //toggle show/hide text
    if(ShowPasswordtwo.innerText === "SHOW") {
        ShowPasswordtwo.innerText = "HIDE";
    }  
    else {
        ShowPasswordtwo.innerText = "SHOW";
    } 
}


//submit button event listener
SubmitButton.addEventListener("click", function(event) {
    const errors = [];

    //if email input is empty, set custom validity
    if (EmailInput.value === "") {
        EmailInput.setCustomValidity("Please enter an email address");
        errors.push("Please enter an email address");
    } else {
        EmailInput.setCustomValidity("");
    }

    //if there are no input in password or confirm password, set custom validity
    if (PasswordInput.value === "") {
        PasswordInput.setCustomValidity("Please enter a password");
        errors.push("Please enter a password");
    } else {
        PasswordInput.setCustomValidity("");
    }

    if (ConfirmPasswordInput.value === "") {
        ConfirmPasswordInput.setCustomValidity("Please confirm your password");
        errors.push("Please confirm your password");
    } else {
        ConfirmPasswordInput.setCustomValidity("");
    }

    //validate password length
    if (PasswordInput.value.length < 6) {
        PasswordInput.setCustomValidity("Password must be at least 6 characters long");
        errors.push("Password must be at least 6 characters long");
    } else {
        PasswordInput.setCustomValidity("");
    }

    //validate confirm password length
    if (ConfirmPasswordInput.value.length < 6) {
        ConfirmPasswordInput.setCustomValidity("Password must be at least 6 characters long");
        errors.push("Confirm password must be at least 6 characters long");
    } else {
        ConfirmPasswordInput.setCustomValidity("");
    }

    //validate password match
    if (PasswordInput.value !== ConfirmPasswordInput.value) {
        ConfirmPasswordInput.setCustomValidity("Passwords do not match");
        errors.push("Passwords do not match");
    } else if (ConfirmPasswordInput.checkValidity()) {
        ConfirmPasswordInput.setCustomValidity("");
    }

    //if there are errors, prevent submit and show alert
    if (errors.length > 0) {
        event.preventDefault();
        alert("Please fix the following errors:\n- " + errors.join("\n- "));
        return;
    }

    //no errors — allow submit and inform user
    alert("Form submitted successfully!");
});

