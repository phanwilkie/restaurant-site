import './style.css';
import homePage from './index.js';
// import showMenu from './menu.js';
import aboutUs from './about.js';
import contactUs from './contact.js';


export default function contactMe() {
    const content = document.querySelector('#content');
    const btnHome = document.querySelector('#btn-home');
    const btnAbout = document.querySelector('#btn-about');
    const btnMenu = document.querySelector('#btn-menu');
    const btnContact = document.querySelector('#btn-contact');

    btnHome.onclick = homePage;
    // // btnMenu.onclick = showMenu;
    btnAbout.onclick = aboutUs;
    btnContact.onclick = contactUs;

    while (content.firstChild) {
        content.firstChild.remove();
    }

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Menu";
    content.appendChild(headerTitle);

}