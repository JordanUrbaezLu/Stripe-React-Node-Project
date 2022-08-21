import express, { Request, Response } from "express";
export const app = express();

// Allows cross origin requests
import cors from "cors";
app.use(cors({ origin: true }));

app.use(express.json());

app.post("/test", (req: Request, res: Response) => {
  const amount = req.body.amount;
  if (amount !== undefined) {
    res.status(200).send({ with_tax: amount * 7 });
  } else {
    res.status(404).send();
  }
});
