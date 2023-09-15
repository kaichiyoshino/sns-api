const express = require("express");
const app = express();
const authRoute = require("../api/routers/auth");
const postsRoute = require("../api/routers/posts");
const usersRoute = require("../api/routers/user");
require("dotenv").config();
const cors = require("cors");

const PORT = 5050;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
