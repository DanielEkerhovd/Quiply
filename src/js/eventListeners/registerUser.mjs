import registerUser from "../api/register.mjs";
import loginUser from "../api/login.mjs";
import { apiPaths, baseURL } from "../api/apiPaths.mjs";

export default function createNewUser() {

    const form = document.querySelector('#registerForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {
            name: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        };

        const createdUser = await registerUser(baseURL + apiPaths.register, data);
        console.log(createdUser);
        if (!createdUser.error) {
            const logedInUser = await loginUser(baseURL + apiPaths.login, data);
            console.log(logedInUser);
        }
    });
} 