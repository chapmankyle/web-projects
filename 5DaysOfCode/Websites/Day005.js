// [18 March 2018]
// Day 5: Changing color of background on page load

function change() {
  var body = $('body'); // JQuery for getting the 'body' of the html document
  var colors = ['yellow', 'red', 'pink', 'blue', 'green'];
  var currIndex = 0;

  setInterval(function() {
    body.css({
      backgroundColor: colors[currIndex]
    });

    if (!colors[currIndex]) currIndex = 0;
    else currIndex++;
  }, 100);
}
