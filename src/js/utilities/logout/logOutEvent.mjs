import logOut from "./logOut.mjs";

export default function logOutEvent() {

    const openMenu = document.getElementById('logOutMenuButton');
    const menu = document.getElementById('logOutMenu');
    const logOutButton = document.getElementById('logOutButton');

    openMenu.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    
    document.addEventListener('click', (event) => {
        if (event.target !== openMenu) {
            menu.classList.add('hidden');
        }
    });

    logOutButton.addEventListener('click', () => {
        logOut();
    });
}


