// pages/api/profile.js

export default (req, res) => {
    // Check if the user is logged in (you can implement your authentication logic here)
    const isLoggedIn = true; // You should implement this based on your authentication mechanism

    if (isLoggedIn) {
      // If the user is logged in, return their profile information
      const userProfile = {
        username: 'steeve',
        email: 'steeve@gmail.com', // Fix the closing quote here
      };
      return res.status(200).json(userProfile);
    } else {
      // If the user is not logged in, return a 401 unauthorized status
      return res.status(401).end();
    }
  };