export default function postDropdown(button, content) {

    button.addEventListener('click', function() {
        content.classList.toggle('hidden');
    });
    window.addEventListener('click', function(event) {
        if (!content.contains(event.target) && !button.contains(event.target)) {
            content.classList.add('hidden');
        }
    });
    
};