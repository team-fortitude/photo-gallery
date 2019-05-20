function imageTemplate(image) {
    return /*html*/`
    <li class="image">
        <h1>${image.title}</h1>
        <img src="${image.url}">
    </li>
    `;
}

export default imageTemplate;