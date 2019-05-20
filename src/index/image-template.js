function imageTemplate(image) {
    return /*html*/`
    <li class="image">
        <h1>${image.title}</h1>
        <img src="${image.src}">
    </li>
    `;
}

export default imageTemplate;