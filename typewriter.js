var i = 0;
var text = '.waldhauser_'; //string to 'write'
var speed = 80; //delay in ms

/* ----------------------

  Because JS is an asynchronous language, meaning code execution is whatever comes first,
  meaning a going from top-bottom, whichever finishes first ex. a function to fetch data followed by a 
  text to console output: the console output is finished first, but the fetching takes time and thereafter
  is output later, even if the call for it was before the text console output

  https://www.sitepoint.com/delay-sleep-pause-wait/

   ---------------------- */ 

function sleep() {
  return new Promise(resolve => { 
    setTimeout(() => {            
      resolve();                  
    }, speed);
  });
}
  
/* ---------------------------------------

-> return new Promise(resolve => { 

the promise object represents the completion of an async operation and resulting value
the simplest explanation: i promise to do this() then you can do that()
what are promises: https://javascript.info/promise-basics
using promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises



-> setTimeout(() => { 

setTimeout executes a function after a set delay,
what are arrow functions: https://javascript.info/arrow-functions-basics


  ---------------------------------------  */

async function typeWriter(){ //async function https://javascript.info/async-await
  for(i=0; i<text.length; i++){ //iterates through entire string length
    document.getElementById("typing").innerHTML += text.charAt(i); //places character from string's i position
    await sleep();
  }
}


/*

W3SCHOOLS ORIGINAL CODE


function typeWriter() { //writes to elementId like a 'typewriter'
  if (i < txt.length) { 
    document.getElementById("typing").innerHTML += txt.charAt(i); //places character from string almost array-like
    i++; //increments i to stop the function after all characters have been 'written'
    setTimeout(typeWriter, speed); //calls the fuction typeWriter after a delay 'speed'
  }
}

This function uses the setTimeout function, which calls for a function (executes it) after a specified interval (speed)
so it needs an if statement because the function always starts running from the start when it gets to the setTimeout()

*/