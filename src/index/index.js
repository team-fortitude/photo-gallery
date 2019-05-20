import images from '../../assets/data/data.js';
import imageTemplate from './image-template.js';
import htmlToDOM from './html-to-DOM.js';

const imagesEl = document.getElementById('images');

images.forEach(image => {
    const html = imageTemplate(image);
    const dom = htmlToDOM(html);
    imagesEl.appendChild(dom);
});