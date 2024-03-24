function doSomething(){
    console.log(645);
}

console.log(324);
setTimeout(()=>{console.log('wait time')},4000); //4000 is a timer for the "wait time" to print after 4 second.
setInterval(function(){
console.log("interval time=> do it again");}, 2000) // it will execute after 2 second subsequently.  
console.log(334);
console.log(564);
console.log(564);