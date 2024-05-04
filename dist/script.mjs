// Build file for the project

//Imports
import showPassword from "../src/js/form_validation/showPassword.js";


//Code

console.log(window.location.pathname);
switch (window.location.pathname) {

    //Landing page
        case "/":
        case "/index.html":

        // On launch

        //Check if the user is logged in
        //If the user is logged in, redirect to the feed
        //If the user is not logged in, continue the landing page functionality

        //Show/hide password
        const input = '#password';
        const button = '#show-password';
        const icon = '#password-toggle';
        const showIcon = '/src/media/icons/eye-open.png';
        const hideIcon = '/src/media/icons/eye-closed.png';

        showPassword(input, button, icon, showIcon, hideIcon);

        //Check api with the user data
        //If the user data is correct, save the token and redirect to the feed

    break;

    //Feed page
    case "/feed.html":

    break;




};