module.exports = {
  deleteSpaces(text) {
    return text.trim();
  },

  clearText(DirtyText) {
    let clearingText = DirtyText.replace(/\n/g, '');
    clearingText = clearingText.replace(/\t/g, '');
    const cleanText = clearingText.replace(/\r/g, '');
    return cleanText;
  },

  transformTextInArray(commaSeparatedText) {
    return commaSeparatedText.split(',');
  },

  alphabeticalOrder(toBeOrdered) {
    return toBeOrdered.sort();
  },
};
