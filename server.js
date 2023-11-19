const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
dotenv.config({ path: "./config/.env" });
connectDb();

const itemRouter = require("./routes/itemRouter");
const app = express();
port = process.env.PORT || 3000;

app.use(express.json());
app.use("/items", itemRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
