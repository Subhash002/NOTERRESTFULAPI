import express from "express";
import bodyParser from "body-parser";

import router from "./routes/main.js";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use("/v1/notes", router);
app.get("/", (req, res) => res.send("This is a Noter RESTFUL API"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
