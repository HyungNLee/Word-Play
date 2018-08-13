$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#inputBox").val();
    var initialArray = userInput.split(" ");
    var finalString = "";
    var secondArray = [];

    initialArray.forEach(function(word) {
      if (word.length >= 3) {
        word = word.split('.').join(' ');
        secondArray.push(word);
      }
    })

    secondArray.reverse();

    secondArray.forEach(function(word) {
      finalString = finalString.concat(word + " ");
    })

    $("#finalizedList").text(finalString);

    event.preventDefault();
  })


})

//
//
// var secondArray = initialArray.map(function(word) {
//   if (word.length >= 3) {
//     return word;
//   }
// })
