import express, { Request, Response } from "express";
import { config } from "./config/config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is the API CHESS");
});

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}`);
});

export default app;
