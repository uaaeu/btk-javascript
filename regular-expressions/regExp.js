let txt = 'hello world i am js. probably the best js. JS THE BEST \nJs';

//creating a regex
let regex = /js/;
let regexA = new RegExp('js');

//.match() method
let result = txt.match(regex); //result = js
let resulA = txt.match(regexA); //resultA = js

//g (global)
let regexG = /js/g; //will match every js in text (js js)
let regexAG = new RegExp('js','g')

//global method
let control = regex.global //false
let control = regexG.global //true

//i (ignore case)
let regexGi = /js/gi; //will match every js, jS, Js or JS in text (single line)(js js JS)
let regexAGi = new RegExp('js','gi')

//ignoreCase method
let control = regex.ignoreCase //false
let control = regexG.ignoreCase //false
let control = regexGi.ignoreCase //true

//m (multi line)
let regexGiM = /js/gim; //will match every js, jS, Js or JS in text (multi line)(js js JS)
let regexAGiM = new RegExp('js','gim')
