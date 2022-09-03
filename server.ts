import express, { Express, Request, Response } from "express";
import * as path from "path";

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);
