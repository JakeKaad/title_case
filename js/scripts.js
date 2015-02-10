var titleCase = function(string) {
  if (typeof(string) !== "string") {
    return "Please enter a word."
  } else {
    var words = string.split(" ");
    var capWords = [];
    words.forEach(function(word) {
      if ((word === "the" || word === "and" || word === "or" || word === "of") && (word !== words[0])) {
        capWords.push(word);
      } else {
        capWords.push((word[0].toUpperCase()) + (word.slice(1)));
      }
    });
    return capWords.join(" ");
  }
};
