import { Router } from "express";
import { handleRequest } from "../../../controllers/utils/BaseController";

const test1Router = Router();

// GET
test1Router.get("/search", handleRequest); 
test1Router.get("/", handleRequest);
test1Router.get("/:id", handleRequest); 

// POST
test1Router.post("/batch", handleRequest); 
test1Router.post("/", handleRequest);

// PUT
test1Router.put("/batch", handleRequest); 
test1Router.put("/", handleRequest);
test1Router.put("/:id", handleRequest); 

// DELETE
test1Router.delete("/batch", handleRequest); 
test1Router.delete("/", handleRequest);
test1Router.delete("/:id", handleRequest); 

export default test1Router;