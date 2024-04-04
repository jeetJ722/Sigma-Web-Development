/*
DOM:-Document Object Model
Frontend JS:-
----------------------------------------------------
4 Pillars of DOM:-
(1)Selection of Element
(2)Changing HTML
(3)Changing CSS
(4)Event Listener
 
(1)
//
var a = document.querySelector(".firstDom")
console.log(a);
(2)
//
var a = document.querySelector("h1")
a.innerHTML = "Changed HTML
or
var a = document.querySelector("h1").innerHTML="Hui"
(3)
var a = document.querySelector("h1")
a.style.color = "black"
--a.stle.any_css_property = "write only in camelCase(no dash allowed)";
(4)
document.querySelector("h1")

a.addEventListener("click",function(){
//when clicked the then the event executes
a.innerHTML = "Badal gaya hu mai"
a.style.color = "red"
a.backgroundColor = "yellow" 
console.log("hey");
})
----------------------------------------------------




var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
    bulb.style.backgroundColor ="yellow";
    console.log("clicked button")
    flag = 1;
    
    }
    else{
        bulb.style.backgroundColor ="white";
        console.log("Again clicked button")
    flag = 0;
    }
})
----------------------------------------------------
Multiple event selection:-

var p = document.querySelectorAll("p")
//it will come in form of a NodeList
h.forEach(function(e){
    console.log(e)
})
----------------------------------------------------
if i want to pick element from id then:-
//
document.getElementById("Id_Name")
or from Class:-
//
document.getElementByClass("Class_Name")
----------------------------------------------------
if we ddont want to use innerHTML we can use textContent:
//
var a = document.querySelector(h1)
a.textContent ="heylo"
*/
