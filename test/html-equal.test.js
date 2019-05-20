const test = QUnit.test;

QUnit.module('html equals');

const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    const replaced = html.replace(pattern, replacement);
    const trimmed = replaced.trim();
    
    return trimmed;
}

QUnit.assert.htmlEqual = function(actual, expected) {
    const normalizedActual = normalize(actual);
    const normalizedExpected = normalize(expected);
    QUnit.assert.equal(normalizedActual, normalizedExpected);
};


test('normalizes whitespace', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const html = /*html*/`
        <div>hello</div>
        `;

    const expected = /*html*/`
    <div>hello</div>
    `;
    

 
    //Act 
    // Call the function you're testing and set the result to a const
 
    //Assert
    assert.htmlEqual(html, expected);
});