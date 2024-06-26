/*
JavaScript:-Basics:
word vs keyword is like any undefined like chacha any name etc is called word keyword is ex:-for 
----------------------------------------------------------------
var const let 
//variables and constants are words but variables can change and const doesnt change we cant change fixed given name or data
Now let is also used to make variables mainly -- topic 3 difference 
--------------------------------------------------------------------------
.hoisting -variables and functions are hoisted which means their declaration is moved on the top of the code:initialization is below and declaration can be done above even lets suppose banne se pehle use kiya error nahi aayega undefine aayega 
-------------------------------------------------------------------
-types in js : 2 types 
primitive and reference
reference = {} () []
primitives = number, string, null, and all
aisi koi bhi value jisko copy karne par real copy nahi hota,bali us main value ka reference pass hojata hai,use hum reference value kehta hi,aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai
var a =12;
var b = a;
b = b + 2;
--------------------------------------------------------------
conditionals:-if,else if,else &double minus ternary operator and switch case:
if(true or false condition){

}
else{

}
--------------------------------------------------------------
loops ka matlab repeat
for(start;end;change){
    console.log is used for print;}
    for(var i = 0;i < 11;i++){
        console.log(i);
    }
while(untill true conditions meet){
}
------------------------------------------------------------------
Functions:-code ko naam dena 
functions:- Mainly used for three work:-
(1) jab aapka code aap turant nahi chalana chahte
(2) jab aapka code aap reuse karna chahte ho
(3) jab aap code chalana chaate ho har baar with different data  
function abcd(){
}
---------------------------------------------------------------------
Arrays:-
arr.push();
arr.pop;
arr.unshift[0];:- jodne ke liye 
arr.shift[1];:-hatane ke liye
arr.splice(2,1)2 index se 1 value tak hatana beechme se array ke
---------------------------------------------------------------------
objects :-
ek se zyaada bande ki baat ki toh hua array,ek bande ke baare mein saari baate ki to hua object
(1)blank obj
var a = {};
(2)filled obj
var a={
    age :24,
    name : "Dell",
    email:jeetjooshi@gmail.com
}
access:
a.age;
kuchbolo: function(){}:-this is called method and not property
also,
a.age = 28;
----------------------------------------------------------------------------------
var let const three differnce:
(1) var in old js and is function scoped pure function mein kahi bhi use hosakta hai even oop brace end kiya toh bhi
(2) let const new js mein hai
let bracess scoped hota hai to cover var ka problem sirf {} specific
(3)var adds itself to the window object and let const doesn't adds

js language me kuch cheeze nahi hai jo hum use karte hai aur voh cheeze hume js se nahi balki browser se milti hai aise saare features jo js ka part nahi hai but fir bhi use kar sakte hai unhe hum dhoond sakte hai ek particular object mein jiska naam hai window.
alert,prompt,console are not a part of javascript
var is part for ,else 
to know features of browser or window
ctrl + j window
now intteresting thing going back to differences 
-----------------------------------------------------------------------
browser context api:
Now browser gives threw things
window,stack and heap memory;
where window gives things or features to use:
------------------------------------------------------------------------
stack and heap memory
variables and data are stored in some storage is kept in heap memory
------------------------------------------------------------------------
execution context matlab whenever we run a function then the function makes an imaginary container which will have three things in it:
(1) variables
(2) functions inside that parent function
(3) lexical environment if that function
this  container is execution context
lexical environment is a chart which defines how the particular function can access the scope and scope chain.
-------------------------------------------------------------------------how to copy reference value:
var a = [1,2,3,4,5];
var b = [...a];//copies a data
also we can copy obj same 
var obj ={name:"harsh"};
var copyobj = {...obj};
-------------------------------------------------------------------------
truthy and falsy:
if we write -1 inside a if(-1)
-flasy is = 0, false, undefined, null, NaN(not a number), document.all
all values other than this are truthy.
if(7){
    console.log("Hey");//this is truthy
}
else{
    console.log("Hello");
}
-------------------------------------------------------------------------
for each loop:- it runs only on arrays then we may use for each loop for each doesnt make changes in  main created array but makes changes in its copy created array inside
var a = [1,2,3,4,43,32];
//Syntax
a.forEach(function(val){
    console.log(val + 2);
});

for in loop:- to loop in objexts for in is used
var obj = {
    name: "harsh",
    age = 24,
    city: "bhopal"
}
for(var key in obj){
    console.log(key,obj[key]);
}

do while loop:-When we want to atleast run loop one time then check for conditions
var  a = 12;
do{
console.log("hey");
a++;
}
while(a < 15){    
}

callback functions :- jab bhi koi code jo baad me chalta hai aap likhoge, kyuki voh code baadme chalta hai js ko yeh pata nahi hota ki voh complete hua ya nahi aise code ke completion par js ko yeh bataya jata hai ke voh  complete hogaya hai aur aap use chala sakte ho,yeh batane ka kaam callack ka hai
setTimeout(function(){
    console.log("2 second baad chale");
},2000);
the time set time is in ms.
---------------------------------------------------------------------
first class functions:-function can be used as a value.
----------------------------------------------------------------------
Arrays.toArray([]);
true
Arrays.toArray({});
false
------------------------------------------------------------------------
how to delete obj prop:-
var a ={
   name: "Jeet";
    age: 20 
}
delete a.age;
------------------------------------------------------------------------
higher order functions:-
these are the functions that accepts function in a parameter
or we pass function as a parameter
1.
function abcd(val){

}
abcd(function(){})
2.
function abcd(){
    return function(){};
}
abcd()
-------------------------------------------------------------------------
constructor functions:-
function saanchaOfBisuit(){
    this.width = 12;
    this.height = 22;
    this.color = "brown";
    this.taste ="sugary";
}
var bis1 = new saanchaOfBisuit();
var bis2 = new saanchaOfBisuit();
var bis3 = new saanchaOfBisuit();

this points to window browser offered feature
normal function in which this. is used and when we call the function we use new keyword 
it is used when we want to make elements of same properties we can use constructor function.
ex:-
function circularbutton(){
    this.radius = 10;
    this.icon = false;
    this.pressable = true;
    this.color = color;
}
var redbtn = new circularbutton("red");
var greenbtn = new circularbutton("green");
-------------------------------------------------------------------------
first Class Functions:-
A function that can be treated as normal values of variables that can be passed 
ex:-setInterval(function(){})
-------------------------------------------------------------------------
new keyword:-whenever a new is added assume a blank object in mind its is used for constructor function
-------------------------------------------------------------------------
iife => immediately invoked function expression
iife hai function ko turrant chalane ki kala,iss tareeke se ki humlog koi private variable bana paaye
(function(){
var a = 12;
})()

to access this iife:-
var ans = (function(){
var a = 12;
return{
    getter: function(){
        console.log(a);
    },
    setter.function(val){
        a = val;//hum isse value update kar paayenge.
    }
}
})()
this is how you use iife
-------------------------------------------------------------------------
prototype:-
Every object created it gets prototype property automatically,javascript adds prototype.
Prototype contains javascript helper functionsand helper methods which are part of prototype when object is created
eg:arr.length;

-------------------------------------------------------------------------
Prototype Inheritance:-
qualities inherited from prototypeor we get directly from parent class is known as inheritance now what is prototype inheritance 
How it is done:
var Human ={
    canFly: false,
    canTalk: true,
    canWalk: true,
}

var sheriyansStudent{
    canMakeAmazingWebsites: true,
    canMakeAwesomeAnimations: true,
}
//now want to inherit from normal human object to sheriyansStudent so 
sheriyansStudent.__proto__ = human;
------------------------------------------------------------------------
this call apply bind:-
if a variable is inside {} braces then variable is local scope and if it is outside then it is called global scope

if in global scope:-
console.log(this); //this acts a window
In function scope also it value is window:-
function abcd(){
    console.log(this);
}
now a function inside a method scope is called:-
(function which we make inside an object,use method kehte hai)
var obj={
    baatkaro: function(){
        console.log(this);//this acts as object
    }
}
-------------------------------------------------------------------------
call apply bind:- 
if we ave one function and an object and we want to implement function and by default not to keep this value as a window and point to an object

function abcd(){
    console.log(this);
}
val obj = {age: 24}
abcd.call(obj);
Yeh call waale cheez se this window ke badle obj ban jaayega
now apply:
function abcd(val1,val2,val3){
    console.log(this);
}
val obj = {age: 24}
abcd.apply(obj,[1,2,3]); //yeh apply hogaya same as that of call bas arguments ko array me paas karo
-bind
function abcd(){
    console.log(this);
}
val obj = {age: 24}
var bindedfnc = abcd.bind(obj);
-------------------------------------------------------------------------
pure & impure functions:- 
-two things:-(for a pure function)
(1)return always return same output for same input
(2)it will never change/update the value of a global variable.
Pure function:-
function abcd(a,b){
    return a*b;
}

var ans1 = abcd(1,2);
var ans2 = abcd(1,2);
*/
