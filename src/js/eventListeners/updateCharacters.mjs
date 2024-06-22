const inputFieldBase = document.getElementById('postContent');

export default function updateCharacters (textarea = inputFieldBase, counter = 'postTextCount') {

    const inputField = textarea
    const counts = document.getElementById(counter);

    inputField.addEventListener('input', () => {
        const textLength = inputField.value.length;

        if (textLength <= 120) {
            counts.textContent = textLength;
        };

        if (textLength > 120) {
            inputField.value = inputField.value.substring(0, 120);
        };

    });

}