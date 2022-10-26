const express = require("express");
const dotenv = require("dotenv");

const bookRoute = require("./routes/book");
const home = require("./routes/index");

dotenv.config();

const app = express();
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", home);
app.use("/books", bookRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port ${port}`));