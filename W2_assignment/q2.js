// Part 2: Promises - 20

// Refactor the function function to use Promises instead of callbacks.
// Create a Promise that resolves with the user data when found and rejects with an error message when not found.
// Use the .then() and .catch() methods to handle the resolved data or errors.

function getUserData(userId) {
    return new Promise((resolve, reject) => {
      // Simulate fetching user data asynchronously.
      setTimeout(() => {
        // If the user is found, resolve the promise with the user's data.
        if (userId === 1) {
          resolve({ name: "John Doe", email: "johndoe@example.com" });
        } else {
          // If the user is not found, reject the promise with an error message.
          reject("User not found");
        }
      }, 1000);
    });
  }
  
  // Get user data and handle the result.
  getUserData(1).then(data => {
    console.log("User data:", data);
  }).catch(error => {
    console.log("Error:", error);
  });