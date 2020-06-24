module.exports = {
  deleteSpaces(text) {
    return text.trim();
  },

  transformTextInArray(commaSeparatedText) {
    return commaSeparatedText.split(',');
  },

  alphabeticalOrder(toBeOrdered) {
    return toBeOrdered.sort();
  },
};
