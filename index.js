function validateForm() {
    let username = document.registerForm.username.value.trim();
    let password = document.registerForm.password.value.trim();
    let password1 = document.registerForm.password1.value.trim();

    let usernameError = document.querySelector('#usernameError');
    let passwordError = document.querySelector('#passwordError');
    let password1Error = document.querySelector('#password1Error');
    let agreeCheckbox = document.querySelector('#agreeCheckbox');
    let agreeError = document.querySelector('#agreeError');

    if (username === "") {
        usernameError.innerHTML = 'Please enter the username';
        document.registerForm.username.focus();
        return false;
    }if (username.length <6) {
        usernameError.innerHTML = 'Username must contain atleast 6 characters';
        document.registerForm.username.focus();
        return false;
    }if (password === "") {
        document.registerForm.password.focus();
        return false;
    }if (password.length < 8) {
        passwordError.innerHTML = 'Password must be at least 8 characters';
        document.registerForm.password.focus();
        return false;
    }
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
    if (!passwordRegex.test(password)) {
        passwordError.innerHTML = 'Password must include at least one uppercase letter, one lowercase letter, one number, and one symbol';
        document.registerForm.password.focus();
        return false;
    }if (password1 === "") {
        password1Error.innerHTML = 'Please confirm the password';
        document.registerForm.password1.focus();
        return false;
    }if (password !== password1) {
        password1Error.innerHTML = 'Password is not matching';
        document.registerForm.password1.focus();
        return false;
    }if (!agreeCheckbox.checked) {
        agreeError.innerHTML = 'Please agree to the terms';
        return false;
    }
    return true;
}

// Clear error messages when the user starts typing \\
document.addEventListener('DOMContentLoaded', function () {
    let usernameInput = document.querySelector('input[name="username"]');
    let passwordInput = document.querySelector('input[name="password"]');
    let password1Input = document.querySelector('input[name="password1"]');

    let usernameError = document.querySelector('#usernameError');
    let passwordSuggestion = document.querySelector('#passwordSuggestion');
    let passwordError = document.querySelector('#passwordError');
    let password1Error = document.querySelector('#password1Error');

    usernameInput.addEventListener('input', function () {
        usernameError.innerHTML = '';
    });

    passwordInput.addEventListener('input', function () {
        passwordError.innerHTML = '';
        passwordSuggestion.innerHTML = '';
    });

    password1Input.addEventListener('input', function () {
        password1Error.innerHTML = '';
    });
});