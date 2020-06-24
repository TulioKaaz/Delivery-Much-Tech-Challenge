const textHandler = require('../../src/helper/textHandler');

describe('Text Handler', () => {
  it('must return a string with no spaces to the right or left', () => {
    const wordWithoutSpace = textHandler.deleteSpaces('  tomato  ');

    expect(wordWithoutSpace).toEqual('tomato');
  });

  it('must return a string without Marks', () => {
    const textWithoutMarks = textHandler.deleteSpaces(
      '\nPasta With Pesto\n\t\r',
    );

    expect(textWithoutMarks).toEqual('Pasta With Pesto');
  });

  it('must return an array of strings', () => {
    const arrayOfStrings = textHandler.transformTextInArray('tomato,meat');

    expect(arrayOfStrings).toEqual(['tomato', 'meat']);
  });

  it('should return an array sorted alphabetically', () => {
    const sortArray = textHandler.alphabeticalOrder([
      'tomato',
      'beans',
      'rice',
    ]);

    expect(sortArray).toEqual(['beans', 'rice', 'tomato']);
  });
});
