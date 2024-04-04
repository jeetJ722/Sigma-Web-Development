/*
syunchronous:-matlab ek ke baad dusra hoga jab tab ek command complete naho, dusra nai hoga

asynchronous:-matlab saare kaam eksaath shuru kardo, jiska answer pehle aajaye uska jawaab de dena
------------------------------------------------------------------------
how to know whether it is synch r asynch code:
If we use these then it is asynch and if not then it is synch:-
setTimeout
setInterval
promises
fetch
axios
XMLHttpRequest
many times final code is dependent on some other server we are not sure of when the answer is received from that server thus we write asynch code so that blocking doesnt happen and whenever answer recieves the respective code waiting for answer response runs
ex:-
--Syntax:-
setTimeout(callback,timeinms)
So,
// setTimeout(function(){
    //now, if inside this then callbacks functions after sometime
},2000)
here,callback functions in asynch code runs after answer is received.
------------------------------------------------------------------------
-asynch is not asynchronous :
to explain asynch java there are 2 stacks main stack and side stack 
main => is used to execute now synchronous code moves to main stack
side stack => is used to executethe asynch code  when the whole main stack functions are executed then side stack is checked whether work is completed and then c is shifted to main stack and executed
-Now the communication between the main stack and side stack is done by "Event Loop" .
console.log("hey");
console.log("hey 2");
setTimeout(function(){
    console.log("hey 3")
},0);
console.log("hey 4");
In this, the synch codes will run first from main stack and then side stack will be checked after which asynch code is shifted to main stack and then executes it.
------------------------------------------------------------------------
Single and Multi-threading:-
When one thread is executed for one task it is single threading and when tasks performed in cocurrency uses more than one thread is called multi-threading.
------------------------------------------------------------------------
callbacks:-It is always a function and runs only when asynch code completes.
-Sending request through these:-
fetch
axios
promises
settimeout
setinterval

-To run answer received from above functions we use:-
then catch
callbacks
asynch wait
ex:-
fetch('https://www.facebook.com')
.then
this is callback.
-----------------------------------------------------------------------
Promises:-
new Promise((res,rej)=>{
    if(true){
        return res();
    }
    else{
        return rej();
    }
})
ans.then(function(){
    console.log("resolved")
})
.catch(function(){
    console.log("did not resolve")
})
ex-1:-user will ask for a number between 0 to 9 and if the number is below 5 resolve if not reject:-

var ans = new Promise(function(res,rej=>{
    var n = Math.floor(Math.random() * 10);
    if(n < 5){
        return res();
    }
    else{
        return rej();
    }
})
ans.then(function(){
    console.log("below");
})
catch(function(){
    console.log("above");
})
ex-2:- make some asynch function:-
//sabse pehle ghar par aao
//gate kholo aur gate lagao
//khaana pakao khaana khao
//incongnito mode chalao
//sojao kyuki tum thak gaye ho

var ans = new Promise(function(res, rej){
    return res("sabse pehle ghar par aao");
})
 var p2 = ans.then(function(data){
    console.log(data);
    //now this will make new promise
    return new Promise(function(res,rej){
        return res("gate kholo aur gate lagao");
    })
    
})
var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("khaana pakao khaana khao");
    })
})
var p4 = p3.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("incongnito mode chalao");
    })
})
var p5 = p4.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("sojao kyuki tum thak gaye ho");
    })
})
p5.then(function(data){
    console.log(data);
})
------------------------------------------------------------------------
Asynch await:-A function in which we use asynch code, if we use promise then we will have to use .then, thus, if we dont want to use then we can use asynch await.This is used to shorten the code.
ex:-
//
async function abcd(){
    let raw = await fetch('https://randomuser.me/api/')
    let ans = await raw.json();
    //await used to push this in side stack if not used then it was on main stack but it is dependent on async function.
    
    console.log(ans);
}
//jab bhi koi code asynch hai we havee to wait for it as we dont know when we will get its answer.
------------------------------------------------------------------------
5 use cases in real world:-
(1)In node when using db
(2)fetch & axios in react when requesting from backend and wait for answer.
(3)settimeout-Third party wait
(4)setinterval-Third party wait
------------------------------------------------------------------------
Concurrency and Parallelism:-
Concurrent:-When both stack main and side working together is called concurrency
Parallelism:-Processors and cores working parallely is known as parallelism.Focusses more to make program work.
------------------------------------------------------------------------
Throttling:-We can control the number of code calls or its execution.



*/