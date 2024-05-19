import { baseURL, apiPaths } from "./apiPaths.mjs";

export default async function fetchPosts(data) {

    try {
        const token = localStorage.getItem('accessToken');

        const payload = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        };

        const urlPath = `${baseURL}${apiPaths.posts}?${apiPaths.postFilter}&${apiPaths.postAuthur}`;

        const response = await fetch(urlPath, payload);
        const results = await response.json();
        return results;

    } catch (error) {
        console.error('Error:', error);
    };

};

