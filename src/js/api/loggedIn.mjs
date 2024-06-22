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

            if (!response.ok) {
                return false;
            } else {
                return true;
            }

        } catch (error) {
            console.error('Error:', error);
            return false;
        }
    } else {
        // No token
        return false;
    }
}


