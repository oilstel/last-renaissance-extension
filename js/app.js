// ######### Characters Ajax #########
$.when(
$.getJSON('js/characters.js')
).done(function(posts) {

// Globals
var postsData = posts.characters;

var randomImage = postsData[Math.floor(Math.random()*postsData.length)];

console.log(randomImage.url);

// Append to HTML
$('.screen').append('<span class="helper"></span><img src="' + randomImage.url + '">');

});
// ######### Characters Ajax END #########
