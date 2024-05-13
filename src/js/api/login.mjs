export default async function login(urlPath, data) {

    try {

        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(urlPath, payload);
        console.log(response);
        const results = await response.json();

        const token = results.accessToken;
        localStorage.setItem('accessToken', token);

        return results;
    }

    catch (error) {
        console.error('Error:', error);
    }
};