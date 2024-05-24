import { baseURL, apiPaths } from "./apiPaths.mjs";

export default async function fetchSinglePost(id) {

    try {
        const token = localStorage.getItem('accessToken');

        const payload = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        const urlPath = `${baseURL}${apiPaths.posts}/${id}?${apiPaths.postAuthur}`;
        console.log(urlPath);

        const response = await fetch(urlPath, payload);
        const results = await response.json();
        return results;

    } catch (error) {
        console.error('Error:', error);
    };

};

