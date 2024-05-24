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

    case '/feed/index.html':
    case '/feed/':
    
    const feedPosts = await fetchPosts();

    fetchPostData();
    createFeed();
    updateCharacters();
    postSearch(feedPosts);
    postFilter(feedPosts);

    break;

    case '/post/index.html':
    case '/post/':

    createSinglePost();
};