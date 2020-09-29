let txt = 'hello world i am js. probably the best js';

//creating a regex
let regex = /js/;
let regexA = new RegExp('js');

//.match() method
let result = txt.match(regex); //result = js
let resulA = txt.match(regexA); //resultA = js

//g (global)
let regexG = /js/g; //will match every js in text (js js)
let regexGA = new RegExp('js','g')