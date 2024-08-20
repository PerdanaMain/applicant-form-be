const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes/router");
const prefix = "/api/v1";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(prefix, router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
