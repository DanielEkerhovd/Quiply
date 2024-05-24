import { baseURL, apiPaths } from './apiPaths.mjs';

export default async function loggedIn() {

    const token = localStorage.getItem('accessToken');

    if (token) {
        try {
            const response = await fetch(`${baseURL}${apiPaths.posts}?${apiPaths.postFilter}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const posts = await response.json();

            return true;

        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
}


