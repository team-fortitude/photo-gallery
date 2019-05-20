import headerTemplate from '../src/header-template.js';
const test = QUnit.test;

QUnit.module('header template');

test('header template', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = /*html*/`
    <header>
        <h1>Image Gallery!!!</h1>
    </header>
    `;

    //Act 
    // Call the function you're testing and set the result to a const
    const html = headerTemplate();
    //Assert
    assert.htmlEqual(html, expected);
});