import registerUser from "../api/register.mjs";
import loginUser from "../api/login.mjs";
import { apiPaths, baseURL } from "../api/apiPaths.mjs";

export default function createNewUser() {

    const form = document.querySelector('#registerForm');
    const errorHandling = document.querySelector('#registerErrorContainer');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        errorHandling.classList.add('hidden');

        const data = {
            name: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        };

        const createdUser = await registerUser(baseURL + apiPaths.register, data);
        
        // run login function if user is created without errors

        if (!createdUser.errors) {
            const loginData = {
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value
            };
            const loggedInUser = await loginUser(baseURL + apiPaths.login, loginData);
            window.location.href = '../feed/index.html';
        } else {
            errorHandling.classList.remove('hidden');
        };
    });
    
};