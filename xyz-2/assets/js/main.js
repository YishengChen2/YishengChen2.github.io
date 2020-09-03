$(document).ready(function(){

var word1 = [
	"Siri","Cortana ","Alexa",
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "cry",
  "fly",
  "eat"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "Snow White",
  "Cinderella",
  "Belle"
  
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];
var word4 = [
  "Snow White",
  "Cinderella",
  "Beast"
];
var randomWord4 = word4[Math.floor(Math.random()*word4.length)];

var word5 = [
  "eat apples",
  "lose her shoes",
  "be selfish"
];
var randomWord5 = word5[Math.floor(Math.random()*word5.length)];

var word6 = [
  "rockets",
  "elephants",
  "aliens"
];
var randomWord6 = word6[Math.floor(Math.random()*word6.length)];

var word7 = [
  "my house",
  "Uni",
  "earth"
];
var randomWord7 = word7[Math.floor(Math.random()*word7.length)];

var word8 = [
  "marry Alexa",
  "help Siri",
  "support Cortana"
];
var randomWord8 = word8[Math.floor(Math.random()*word8.length)];


var word9 = [
  "Huawei",
  "IOS",
  "Alibaba"
];
var randomWord9 = word9[Math.floor(Math.random()*word9.length)];

var word10 = [
  "smartphone",
  "system",
  "e-commerce"
];
var randomWord10 = word10[Math.floor(Math.random()*word10.length)];


$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);
$( ".word4" ).html(randomWord4);
$( ".word5" ).html(randomWord5);
$( ".word6" ).html(randomWord6);
$( ".word7" ).html(randomWord7);
$( ".word8" ).html(randomWord8);
$( ".word9" ).html(randomWord9);
$( ".word10" ).html(randomWord10);


});


















