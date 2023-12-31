import express from "express";
import router from "./routes/app.route";

const app = express();
app.use(express.json());

app.use("/", router);

app.listen(4000);
