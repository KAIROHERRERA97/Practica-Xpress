import express  from "express";
import router from "./routes/app.route";

const app = express();

app.use(router);

app.listen(5000)