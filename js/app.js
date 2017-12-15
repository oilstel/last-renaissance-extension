$.when($.getJSON('js/characters.js')).done(function(items) {

  // Globals
  var charactersArray = items.characters;
  console.log(items);
  var wisdomArray = items.wisdom;
  var characterRandom = charactersArray[Math.floor(Math.random()*charactersArray.length)];
  var characterRandom2 = charactersArray[Math.floor(Math.random()*charactersArray.length)];
  var wisdomRandom = wisdomArray[Math.floor(Math.random()*wisdomArray.length)];
  // var wisdomNumber = Math.floor(Math.random()*charactersArray.length);
  // var characterRandom2 = charactersArray[wisdomNumber];
  // var wisdomRandom = wisdomArray[wisdomNumber];

  var random_boolean = Math.random() >= 0.5;

  console.log(random_boolean);

  // Append to HTML
  if (random_boolean === true) {
  } else {
    $('.wisdom').toggle(200);
    console.log('yes');
    $('.wisdom').append('<img width="60" src="' + characterRandom2.url + '">');
    $('.wisdom p').typeIt({
      speed: 50,
      content : wisdomRandom.saying
    });
  }

//   var window_focus = true;
//
// window.onblur = function() { window_focus = false; }
// window.onfocus = function() { window_focus = true; }
//
//
//
// if (window_focus) {
//     alert("You killed my boss!")
//
// } else {
//     alert("My boss is still alive!")
//   }



  $('.screen').append('<span class="helper"></span><img src="' + characterRandom.url + '">');

});
