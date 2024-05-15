export default function validateForm() {

    const form = document.querySelector('#registerForm');
    
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    const usernameCheck = document.querySelector('#usernameCheck');
    const emailCheck = document.querySelector('#emailCheck');
    const passwordCheck = document.querySelector('#passwordCheck');
    
    const usernamePattern = /^\S{5,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(noroff\.no|stud\.noroff\.no)$/i;
    const passwordPattern = /^.{8,}$/;

    // check if all fields are correct on input event
    function validationUpdate(selector, indicator, pattern) {

        const button = document.querySelector('#registerButton');
        button.disabled = true;

        selector.addEventListener('input', () => {

            if (selector.value.match(pattern)) {
                indicator.classList.remove('bg-red-200');
                indicator.classList.add('bg-green-200');
                
            } else if (!selector.value) {
                indicator.classList.remove('bg-green-200');
                indicator.classList.remove('bg-red-200');
                
            } else {
                indicator.classList.remove('bg-green-200');
                indicator.classList.add('bg-red-200');
            }
 
            // Checks button for validated input fields
            if (usernameInput.value.match(usernamePattern) && emailInput.value.match(emailPattern) && passwordInput.value.match(passwordPattern)) {
                button.disabled = false;
            } else {
                button.disabled = true;
            };
        });
    };

    validationUpdate(usernameInput, usernameCheck, usernamePattern);
    validationUpdate(emailInput, emailCheck, emailPattern);
    validationUpdate(passwordInput, passwordCheck, passwordPattern);
    
}