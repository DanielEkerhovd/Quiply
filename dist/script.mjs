//Imports

import showPassword from "../src/js/forms/showPassword.js";
import createNewUser from "../src/js/eventListeners/registerUser.mjs";
import loginUser from "../src/js/eventListeners/loginUser.mjs";
import validateForm from "../src/js/forms/validateFormVisuals.mjs";
import fetchPostData from "../src/js/eventListeners/postData.mjs";
import fetchPosts from "../src/js/api/fetchPosts.mjs";
import createFeed from "../src/js/posts/createFeed.mjs";
import postDropdown from "../src/js/eventListeners/postDropdown.mjs";
import updateCharacters from "../src/js/eventListeners/updateCharacters.mjs";
import postSearch from "../src/js/eventListeners/postSearch.mjs";
import postFilter from "../src/js/eventListeners/postFilter.mjs";
import createSinglePost from "../src/js/posts/createSinglePost.mjs";
import loggedIn from "../src/js/api/loggedIn.mjs";
import logOut from "../src/js/utilities/logout/logOut.mjs";
import logOutEvent from "../src/js/utilities/logout/logOutEvent.mjs";

let authenticated = false

switch (window.location.pathname) {

    case '/':
    case '/index.html':

    authenticated = await loggedIn();
    if (authenticated) {
        window.location.href = '/feed/';
    }

    showPassword('#password', '#show-password', '#password-toggle', './src/media/icons/eye-open.png', './src/media/icons/eye-closed.png');    
    loginUser();

    break;

    case '/register/index.html':
    case '/register/':

    authenticated = await loggedIn();
    if (authenticated) {
        window.location.href = '/feed/';
    }

    showPassword('#password', '#show-password', '#password-toggle', '../src/media/icons/eye-open.png', '../src/media/icons/eye-closed.png');
    createNewUser();
    validateForm();

    break;

    case '/feed/index.html':
    case '/feed/':

    authenticated = await loggedIn();

    if (!authenticated) {
        logOut();
    }
    
    
    const feedPosts = await fetchPosts();

    logOutEvent();
    fetchPostData();
    createFeed();
    updateCharacters();
    postSearch(feedPosts);
    postFilter(feedPosts);

    break;

    case '/post/index.html':
    case '/post/':

    logOutEvent();
    createSinglePost();

    break;
};