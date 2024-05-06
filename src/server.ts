require("dotenv").config({ path: ".env" });
import express from "express";
import fs from "fs";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable("x-powered-by");

app.use(cookieParser());
app.use(express.static("public"));

const rootRoute: string[] = fs.readdirSync("./src/routes");
rootRoute
  .filter((file: string) => {
    return (
      /.(js|ts)$/.test(file) ||
      file.startsWith("_") ||
      fs.lstatSync(__dirname + "/routes/" + file).isDirectory()
    );
  })
  .forEach((file: string) => {
    file = file.replace(/\.[^.]*$/, "");
    try {
      const route = require(__dirname + "/routes/" + file).default;

      //import router handler
      app.use("/" + file, route);

      console.log(
        chalk.blue("[ INFO ] ") + "Route '" + file + "' imported successfully."
      );
    } catch (e) {
      console.log(
        chalk.blue("[ INFO ] ") +
          "Skipped '" +
          file +
          "' module because containing error."
      );
    }
  });

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "error_not_found",
  });
});

const server = app.listen(PORT, () =>
  console.log(`🚀 Server runnning at: http://localhost:${PORT}`)
);
