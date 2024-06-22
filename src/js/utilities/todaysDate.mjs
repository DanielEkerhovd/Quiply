export default function todaysDate() {

    const options = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    };

    const today = new Date().toLocaleDateString('en-US', options);

    return today;
}