

export default async function deletePost(urlPath, id) {


    try {

        const token = localStorage.getItem('accessToken');

        const payload = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        };

        const deleteRequest = urlPath + '/' + id;

        const response = await fetch(deleteRequest, payload);
        const results = await response.json();
        return results;

    } catch (error) {
        console.error('Error:', error);
    }
}