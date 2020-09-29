let txt = 'hello world i am js. probably the best js. JS THE BEST';

//creating a regex
let regex = /js/;
let regexA = new RegExp('js');

//.match() method
let result = txt.match(regex); //result = js
let resulA = txt.match(regexA); //resultA = js

//g (global)
let regexG = /js/g; //will match every js in text (js js)
let regexGA = new RegExp('js','g')

//global method
let control = regex.global //false
let control = regexG.global //true

//i (ignore case)
let regexGi = /js/gi; //will match every js, jS, Js or JS in text (js js JS)
let regexGAi = new RegExp('js','gi')