// Async/Await  - (do this for extra 50 points)

// Rewrite the Promise-based functions using async/await syntax.
// Demonstrate how to use try/catch blocks for error handling with async/await.

async function getUserData(userId) {
    // Simulate fetching user data asynchronously.
    const data = await new Promise((resolve, reject) => {
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
  
    return data;
  }
  
  // Get user data and handle the result.
  try {
    const userData = await getUserData(1);
    console.log("User data:", userData);
  } catch (error) {
    console.log("Error:", error.message);
  }