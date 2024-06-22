import { baseURL, apiPaths } from "./apiPaths.mjs";

export default async function updatePost(data, id) {

    const token = localStorage.getItem('accessToken');
    const path = baseURL + apiPaths.posts + '/' +  id;
    
    fetch(path, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));

};


    