export default async function registerUser(urlPath, data) {
  
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
        return results;
    }
    catch (error) {
        console.error('Error:', error);
    }
};