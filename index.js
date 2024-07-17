const express = require("express");
const { connectToMongoDb } = require("./connection");
const URL = require("./models/url");
const path = require("path");
const cookieParser = require("cookie-parser")
const {restrictToLoggedInUserOnly ,checkAuth} =require("./middlewares/auth")
const app = express();
const PORT = 8000;


//routes
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user")
app.use(express.json());

//connection
connectToMongoDb("mongodb://localhost:27017/short-url").then(() => {
  console.log("Mongodb Connected");
});


//middleware to parse
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.use("/user",userRoute)
app.use("/",checkAuth, staticRoute )




app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
