const test = QUnit.test;

QUnit.module('html to dom');

test('converts html to dom', function(assert) {
    //arrange
    const html = /*html*/`
        <span>Hello world!</span>
    `;

    const expected = document.createElement('span');
    expected.textContent = 'Hello world!';

    //act
    const dom = htmlToDOM(html);

    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'Hello world!');
});

function htmlToDOM(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const content = template.content;
    const firstElementChild = content.firstElementChild;

    return firstElementChild;
}