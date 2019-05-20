import imageTemplate from '../src/index/image-template.js';

const test = QUnit.test;

QUnit.module('image template');

test('make an image template', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const image = {
        url: 'test src',
        title: 'This is a title'
    };

    const expected = /*html*/`
    <li class="image">
        <h1>This is a title</h1>
        <img src="test src">
    </li>
    `;
    //Act 
    // Call the function you're testing and set the result to a const
    const html = imageTemplate(image);
    //Assert
    assert.equal(html, expected);
});