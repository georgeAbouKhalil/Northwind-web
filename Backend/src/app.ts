import express, { NextFunction, Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv"; //.env
dotenv.config();

import config from "./01-Utils/config";
import productsController from "./06-Controllers/products-controller";
import errorsHandler from "./02-Middleware/errors-handler";
import ClientError from "./03-Models/client-error";
import path from "path";

const server = express();

server.use(cors()); //Enable CORS for any website
// server.use(cors({ origin: "http://localhost:3000" })); // Enable CORS for one specific website
// server.use(cors({ origin: ["http://localhost:3000", "http://www.somethersite.com", "http://www.walla.com"] })); // Enable CORS for several specific website


server.use(express.json());

// Set the folder of index.html:
server.use(express.static(path.join(__dirname, "./07-Frontend")));

server.use("/api/products", productsController);
server.use("*", (request: Request, response: Response, next: NextFunction) => {
    // const error = new ClientError(404, "Route not found");
    // next(error);

    // Send back index.html on any route-not-found (SPA behavior):
    response.sendFile(path.join(__dirname, "./07-Frontend/index.html"));
});
server.use(errorsHandler);


server.listen(config.port, () => console.log("Listening..."));
