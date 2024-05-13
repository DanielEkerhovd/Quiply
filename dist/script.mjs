//Imports

import showPassword from "../src/js/form_validation/showPassword.js";
import createNewUser from "../src/js/eventListeners/registerUser.mjs";
import validateForm from "../src/js/form_validation/registerFormValidation.mjs";

switch (window.location.pathname) {

    case '/':
    case '/index.html':

    showPassword('#password', '#show-password', '#password-toggle', './src/media/icons/eye-open.png', './src/media/icons/eye-closed.png');    


    break;

    case '/register/index.html':
    case '/register/':

    console.log('Register page');

    showPassword('#password', '#show-password', '#password-toggle', '../src/media/icons/eye-open.png', '../src/media/icons/eye-closed.png');
    createNewUser();
    validateForm();

    break;
};