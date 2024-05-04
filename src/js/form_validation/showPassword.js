/**
 * 
 * Creates functionality to show and hide password in the password input field
 * 
 * @param {string} input Input field
 * @param {string} button Button that toggles the password visibility
 * @param {string} icon Icon on the button
 * @param {string} showIcon Source of the icon when the password is visible 
 * @param {string} hideIcon Source of the icon when the password is hidden
 * 
 * @example 
 * ```js	
 * // Arguments
 * const input = '.password';
 * const button = '.toggle-password';
 * const icon = '.toggle-password img';
 * const showIcon = 'path/to/show-icon.svg';
 * const hideIcon = 'path/to/hide-icon.svg';
 * 
 * showPassword(input, button, icon, showIcon, hideIcon);`
 * ```
 */


export default function showPassword(input, button, icon, showIcon, hideIcon) {
  const passwordInput = document.querySelector(input);
  const passwordToggle = document.querySelector(button);
  const imageToggle = document.querySelector(icon);

  passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });

  imageToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        imageToggle.src = showIcon;
    } else {
      imageToggle.src = hideIcon;
    }
  });

};