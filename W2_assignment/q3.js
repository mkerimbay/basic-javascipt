// Part 3: Error Handling - 20

// Modify your Promise-based  function to intentionally throw an error (e.g., if the user ID is negative).
// Implement error handling in the .catch() block to gracefully handle this error and print a custom error message.

function getUserData(userId) {
    return new Promise((resolve, reject) => {
      // Simulate fetching user data asynchronously.
      setTimeout(() => {
        // If the user ID is negative, throw an error.
        if (userId < 0) {
          throw new Error("User ID must be positive");
        } else {
          // If the user is found, resolve the promise with the user's data.
          resolve({ name: "John Doe", email: "johndoe@example.com" });
        }
      }, 1000);
    });
  }
  
  // Get user data and handle the result.
  getUserData(-1).then(data => {
    console.log("User data:", data);
  }).catch(error => {
    console.log("Error:", error.message);
  });