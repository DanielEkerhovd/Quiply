// This module is responsible for fetching data from the API.

/**
 * 
 * @param {string} url The URL of the API
 * @param {string} method The method of the request
 * @param {object} data The user data to be sent to the API
 * @returns {object} The response from the API
 * 
 * @example
 * ```js
 * // Arguments
 * const url = 'https://example.com/api';
 * const method = 'POST';
 * const data = {
 *    username: 'example',
 *   password: 'password'
 * };
 * 
 * // Call the function
 * const response = fetchAPI(url, method, data);
 * 
 * // Response from the API with user data, token, etc.
 * ```
 */

export default async function fetchAPI(url, method, data) {

    try{

        const payload = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, payload);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.log(error);
    };
};