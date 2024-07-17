const { getUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req, res, next) {
  const userId = req.cookies?.uid;
  console.log("UserID from cookie:", userId); // Log the userId from the cookie

  if (!userId) {
    console.log("UserID not found in cookies. Redirecting to login.");
    return res.redirect("/login");
  }

  const user = getUser(userId);
  console.log("User from getUser:", user); // Log the user retrieved from the session

  if (!user) {
    console.log("User not found in session. Redirecting to login.");
    return res.redirect("/login");
  }

  req.user = user;
  next(); // Make sure to call next() to pass control to the next middleware
}


async function checkAuth(req,res ,next){
  const userId = req.cookies?.uid;
  

  
  const user = getUser(userId);
  


  req.user = user;
  next(); 
}


module.exports = {
  restrictToLoggedInUserOnly,
  checkAuth
};
