const backgrounds = [
    'url("img5.jpg")',
    'url("img10.jpg")',
    'url("img4.jpg")',
    'url("img3.jpg")',
    'url("img6.jpg")',
    'url("img11.jpg")'
];

let currentBackgroundIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 2000); // Change background every 2 seconds

let storedUserData = {};

function signup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    if (signupIsSuccessful()) {
        storedUserData = { username, email, phone, password };
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
        document.getElementById('LoginContainer').style.display = 'none';
    }
}

function signupIsSuccessful() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    if (username && email && phone && password && repassword && password === repassword) {
        return true;
    } else {
        alert("Please fill all required fields and ensure passwords match.");
        return false;
    }
}

function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginUsername === storedUserData.username && loginPassword === storedUserData.password) {
        showThankYouMessage();
    } else {
        alert("Invalid username or password.");
    }
}

function Login() {
    const LoginUsernameLoginUsername = document.getElementById('LoginUsername').value;
    const LoginPasswordLoginPassword = document.getElementById('LoginPassword').value;

    if (LoginUsername === storedUserData.username && LoginPassword === storedUserData.password) {
        showThankYouMessage();
    } else {
        alert("Invalid username or password.");
    }
}

function showLogin() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('LoginContainer').style.display = 'block';
}

function showThankYouMessage() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('LoginContainer').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    setTimeout(function () {
        document.getElementById('aboutComputerHistory').style.display = 'block';
    }, 2000);
}

function showForgotPassword() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('LoginContainer').style.display = 'none';
    document.getElementById('forgotPasswordContainer').style.display = 'block';
}

function showLogin() {
    document.getElementById('forgotPasswordContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('LoginContainer').style.display = 'none';
}

function changePassword() {
    const forgotPasswordNumber = document.getElementById('forgotPasswordNumber').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    const otp = document.getElementById('otp').value;

    if (verifyOTP(forgotPasswordNumber, otp) && newPassword === confirmNewPassword) {
        storedUserData.password = newPassword;
        showLogin();
    } else {
        alert("Invalid OTP or passwords do not match.");
    }
}

function verifyOTP(number, otp) {
    return true; // Placeholder for OTP verification
}
