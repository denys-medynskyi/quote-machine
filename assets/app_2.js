var CLASS_FOR_BACKGROUND_COLOR = 'random-background-color'
var CLASS_FOR_TEXT_COLOR = 'random-color'
var QUOTE_URL = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
var QUOTE_TEXT_CLASS = 'quote-text'
var QUOTE_AUTHOR_CLASS = 'quote-author'


function randomLetter() {
  var letters = 'ABCDEF0123456789';
  var randomNumber = Math.round(Math.random() * (letters.length - 1));
  var letter = letters[randomNumber];
  return letter
}

function randomColor() {
  var color = '#';
  for(var i = 0; i < 6; i++) {
    color += randomLetter();
  }
  return color;
}

function setRandomColors() {
  var randomColorValue = randomColor();

  elements_for_random_bg_color = document.getElementsByClassName(CLASS_FOR_BACKGROUND_COLOR)

  for(var i = 0; i < elements_for_random_bg_color.length; i ++) {
    elements_for_random_bg_color[i].style.backgroundColor = randomColorValue;
  }

  elements_for_random_text_color = document.getElementsByClassName(CLASS_FOR_TEXT_COLOR)

  for(var i = 0; i < elements_for_random_text_color.length; i ++) {
    elements_for_random_text_color[i].style.color = randomColorValue;
  }

  document.getElementsByClassName(QUOTE_TEXT_CLASS).innerHTML = 'abc';
  // document.getElementsByClassName(QUOTE_AUTHOR_CLASS).innerHTML = quote.title;
  document.getElementsByClassName(QUOTE_AUTHOR_CLASS).innerHTML = 'quote.title';
}

$.ajax({
    url: QUOTE_URL,

    contentType: "application/json",
    // // The name of the callback parameter, as specified by the YQL service
    crossDomain: true,

    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",

    // Work with the response
    success: function( response ) {
      var quote = response[0];
      console.log(quote);
      document.getElementsByClassName(QUOTE_TEXT_CLASS)[0].innerHTML = quote.content;
      document.getElementsByClassName(QUOTE_AUTHOR_CLASS)[0].innerHTML = quote.title;
    }
});
