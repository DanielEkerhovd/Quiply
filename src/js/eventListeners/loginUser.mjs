import { apiPaths, baseURL } from "../api/apiPaths.mjs";
import login from "../api/login.mjs";

export default function loginUser() {

    const form = document.querySelector('#loginForm');
    const errorContainer = document.querySelector('#errorContainer')

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        errorContainer.classList.add('hidden');

        const data = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        };

        const loggedInUser = await login(baseURL + apiPaths.login, data);

        //check if loggedInUser has a bad response

        if (loggedInUser.errors) {
            errorContainer.classList.remove('hidden');
        
        } else {
            window.location.href = '../feed/index.html';
        }
    });

}