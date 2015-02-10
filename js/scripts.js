var titleCase = function(string) {
  if (notAString(string)) {
    return "Please enter a word."
  } else {
    var words = string.split(" ");
    var capWords = [];

    words.forEach(function(word) {
      titleize(word, capWords, words);
    });

    return capWords.join(" ");
  }
};

var titleize = function(word, array, originArray) {
  word = word.toLowerCase();
  if ((word === "the" || word === "and" || word === "or" || word === "of" || word === "a") && (word !== originArray[0])) {
    array.push(word);
  } else {
    array.push((word[0].toUpperCase()) + (word.slice(1)));
  }
};

var notAString = function(string) {
  return typeof(string) !== "string";
};


$(document).ready(function() {
  $("form#title-case").submit(function(event) {
    var input = $("#word").val();
    input = titleCase(input);

    $("#titleized").text(input);
    $("#result").show();

    event.preventDefault();
  });
});
