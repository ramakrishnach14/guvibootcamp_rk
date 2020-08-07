//“Script error” is what browsers send to the onerror callback when an error originates from a JavaScript file served from a 
//different origin

//even though there’s an error occurring, you don’t know what the error is, nor from which code it’s originating. And that’s 
//the whole purpose of window.onerror – getting insight into uncaught errors in your application.

	
  window.onerror = function (message, url, line, column, error) {
    console.log(message, url, line, column, error);
  }

  foo(); // call function declared in app.js


  //The solution
//In order to get visibility into errors thrown from scripts originating from different origins, you must do two things.
//crossorigin=”anonymous”
//Cross Origin HTTP header
//Access-Control-Allow-Origin: *

//Once both of these steps have been made, any errors triggered by this script will report to window.onerror just like any regular 
//same-domain script. So instead of “Script error”, the onerror example from the beginning will yield:

//ReferenceError: bar is not defined", "http://another-domain.com/app.js", 2, 1, [Object Error]
  