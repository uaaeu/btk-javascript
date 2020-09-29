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
control = regexG.global //true

//i (ignore case)
let regexGi = /js/gi; //will match every js, jS, Js or JS in text (single line)(js js JS)
let regexAGi = new RegExp('js','gi')

//ignoreCase method
control = regex.ignoreCase //false
control = regexG.ignoreCase //false
control = regexGi.ignoreCase //true

//m (multi line)
let regexGiM = /js/gim; //will match every js, jS, Js or JS in text (multi line)(js js JS)
let regexAGiM = new RegExp('js','gim')

//multiline method
control = regex.multiline //false
control = regexG.multiline //false
control = regexGi.multiline //false
control = regexGiM.multiline //true

//.test() method
let resultM = regex.match(txt); //resultM = true
resultM = /PHP/.match(txt); //resultM = false

//input method
let resultI = regex.match(txt); //resultM = true
resultI = /PHP/.match(txt); //resultM = false