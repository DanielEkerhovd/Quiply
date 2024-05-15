//Imports

import showPassword from "../src/js/forms/showPassword.js";
import createNewUser from "../src/js/eventListeners/registerUser.mjs";
import loginUser from "../src/js/eventListeners/loginUser.mjs";
import validateForm from "../src/js/forms/validateFormVisuals.mjs";

switch (window.location.pathname) {

    case '/':
    case '/index.html':

    showPassword('#password', '#show-password', '#password-toggle', './src/media/icons/eye-open.png', './src/media/icons/eye-closed.png');    
    loginUser();

    break;

    case '/register/index.html':
    case '/register/':

    console.log('Register page');

    showPassword('#password', '#show-password', '#password-toggle', '../src/media/icons/eye-open.png', '../src/media/icons/eye-closed.png');
    createNewUser();
    validateForm();

    break;
};