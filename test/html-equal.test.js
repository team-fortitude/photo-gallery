const test = QUnit.test;

QUnit.module('html equals');

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