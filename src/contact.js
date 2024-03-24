import './style.css';
import homePage from './index.js';

export default function contactMe() {
    // console.log('I get called from print.js!');
    const content = document.querySelector('#content');
    const btnHome = document.querySelector('#btn-home');
    const btnAbout = document.querySelector('#btn-about');
    const btnMenu = document.querySelector('#btn-menu');
    const btnContact = document.querySelector('#btn-contact');

    btnHome.onclick = homePage;

    while (content.firstChild) {
        content.firstChild.remove();
    }


    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Contact Us";
    content.appendChild(headerTitle);

}