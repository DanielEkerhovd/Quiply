import { baseURL, apiPaths } from "./apiPaths.mjs";

export default async function newPost(data) {

    try {
        const token = localStorage.getItem('accessToken');
        
        const response = await fetch(`${baseURL}${apiPaths.posts}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

    } catch (error) {
        console.error(error);
    };

}; 


