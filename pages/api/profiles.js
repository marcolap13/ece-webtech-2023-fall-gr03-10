export default (req, res) => {
    const isLoggedIn = true; 

    if (isLoggedIn) {
      const userProfile = {
        username: 'steeve',
        email: 'steeve@gmail.com', 
      };
      return res.status(200).json(userProfile);
    } else {
      return res.status(401).end();
    }
  };