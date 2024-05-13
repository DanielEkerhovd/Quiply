export default function validateForm() {

    const form = document.querySelector('#registerForm');
    

    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const usernameInput = document.querySelector('#username');

    const emailIndicator = document.querySelector('#emailCheck');
    const passwordIndicator = document.querySelector('#passwordCheck');
    const usernameIndicator= document.querySelector('#usernameCheck');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(noroff\.no|stud\.noroff\.no)$/i;
    const passwordPattern = /^.{8,}$/;
    const usernamePattern = /^\S*$/;


    // check if all fields are correct on input event
    function validationUpdate(selector, indicator, pattern) {

        selector.addEventListener('input', () => {

            if (selector.value.match(pattern)) {
                indicator.classList.remove('bg-red-200');
                indicator.classList.add('bg-green-200');
            } else {
                indicator.classList.remove('bg-green-200');
                indicator.classList.add('bg-red-200');
            }
        });
    };

    validationUpdate(emailInput, emailIndicator, emailPattern);
    validationUpdate(passwordInput, passwordIndicator, passwordPattern);
    validationUpdate(usernameInput, usernameIndicator, usernamePattern);
}