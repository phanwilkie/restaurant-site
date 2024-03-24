import './style.css';
import imgUrl from './italian.jpg';

const content = document.querySelector('#content');

//CREATE HEADER
const headerTitle = document.createElement('h1');
headerTitle.textContent = "Original Italian";
content.appendChild(headerTitle);

//CREATE GREETINGS
const para1 = document.createElement('p');
const greetingText = document.createElement('h2');
greetingText.textContent = 'Ciao 👋';
content.appendChild(para1);
content.appendChild(greetingText);

//ADD IMAGE
const bannerImage = document.createElement('img');
bannerImage.src = 'images/italian.jpg';
bannerImage.className = 'banner-image';
content.append(bannerImage);

//CREATE DETAILS
const para2 = document.createElement('p');
para2.textContent = "Bibi's is your authentic friendly neighbourhood Italian restaurant. Serving the bestest meals from the freshest ingredients. Balismo!";
content.appendChild(para2);