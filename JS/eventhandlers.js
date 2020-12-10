//DOM level 2 event handlers

// element.addEventListener('event', functionName); 
// function is only called when the Event is fired resulting in the code being triggered
/// example: myContainer.addEventListener('click', functionName);
// this is known as asynchronous code
// code that's run out of order and doesn't happen at the same time


//event bubbling
// we can listen to the main element and here when the element inside of the main was clicked
// callback function is a function used as a parameter to another function or method

//declaring the global variable for the event listener
let myContainer = document.getElementById('container');
let prntEl = document.getElementById('img');

//creating our event handler
// takes in 1 parameter - the event
function clicker(event) {
  if (event.target.id === 'first') {
    let p = document.createElement('p');
    p.textContent = ('Oh heck yah bruh you clicked the fish');
    prntEl.appendChild(p);
  }

}















// when adding event listener we add in event type as string and callback fucntion
myContainer.addEventListener('click', clicker);