const detectPalindrom = require('../src/palindrom');

describe('detectPalindrom function', () => {
  it('should return "Passed argument is not a string" when type of passed argumnent is not an "string"', () => {
    expect(detectPalindrom(true)).to.equal("Passed argument is not a string");
  });
  it('should return "Passed argument is not a string" when type of passed argumnent is not an "string"', () => {
    expect(detectPalindrom([])).to.equal("Passed argument is not a string");
  });
  it('should return "Passed argument is not a string" when type of passed argumnent is not an "string"', () => {
    expect(detectPalindrom(2)).to.equal("Passed argument is not a string");
  });
  it('should return "String is empty" when type of passed argumnent is not an "array"', () => {
    expect(detectPalindrom('')).to.equal("String is empty");
  });
  it('should return "This string is palindrom!', () => {
    expect(detectPalindrom("ara")).to.equal('This string is palindrom!');
  });
  it('should return "This string is palindrom!', () => {
    expect(detectPalindrom("Огоміннімого")).to.equal('This string is palindrom!');
  });
  it('should return "This string is palindrom!', () => {
    expect(detectPalindrom("TARARAT")).to.equal('This string is palindrom!');
  });
  it('should return "Passed array not have twin numbers in array" when given array not have twin numbers', () => {
    expect(detectPalindrom("testtest")).to.equal('This string is not a palindrom!');
  });
  it('should return "Passed array not have twin numbers in array" when given array not have twin numbers', () => {
    expect(detectPalindrom("TARAKRAT")).to.equal('This string is not a palindrom!');
  });
  it('should return "Passed array not have twin numbers in array" when given array not have twin numbers', () => {
    expect(detectPalindrom("w23w")).to.equal('This string is not a palindrom!');
  });
});

