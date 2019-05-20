import images from '../../assets/data/data.js';
import imageTemplate from './image-template.js';
import htmlToDOM from './html-to-DOM.js';
import headerTemplate from '../header-template.js';

const imagesEl = document.getElementById('images');

const header = headerTemplate();
const headerDOM = htmlToDOM(header);
document.body.before(headerDOM);

images.forEach(image => {
    const html = imageTemplate(image);
    const dom = htmlToDOM(html);
    imagesEl.appendChild(dom);
});