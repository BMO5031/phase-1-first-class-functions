// index.js

function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
      // Function implementation goes here
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
    return function() {
      // Function implementation goes here
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  
  


  