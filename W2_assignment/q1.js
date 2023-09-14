// Part 1: Callbacks - 10

// Create a JavaScript function that takes an argument and a callback function.
// for example: function can be getUserData and argument can be userId  or getDogBreedInfromation and argument can be dogBreed
// Inside the function, simulate fetching user data asynchronously (you can use a setTimeout to simulate a delay).
// If the data  is found, call the callback with the user's data (an object with name, email, etc.- for userData function).
// If the user is not found, call the callback with an error message.
// Create a callback function that handles the user data or error and prints the result.

function getUserData(userId, callback) {
    // Simulate fetching user data asynchronously.
    setTimeout(() => {
      if (userId === 1) {
        callback({ name: "John Doe", email: "johndoe@example.com" }); // If the user is found, call the callback with the user's data.
      } else {
        callback("User not found"); // If the user is not found, call the callback with an error message.
      }
    }, 1000); // timeout for 1 sec
  }
  
  function handleUserData(data) { 
    // Print the user data or error message.
    if (data.name) {
      console.log("User data:", data);
    } else {
      console.log("Error:", data);
    }
  }
  

  getUserData(1, handleUserData); // call the getUserData() function with the user ID 1 and the handleUserData() function as the callback function.

