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
        const results = await response.json();

        const user = {
            name: results.name,
            email: results.email,
            id: results.id
        };

        const token = results.accessToken;

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('accessToken', token);

        return results;
    }

    catch (error) {
        console.error('Error:', error);
    }
};