import { Router, Request, Response } from "express";
import { userController } from "./controllers/user.controller";

const router = Router();
//controllers
const UserControleller = new userController();
router.get("/", (request: Request, response: Response) => {
  response.json({message: "Estou Rodando"});
}) 
router.post("/create-user", UserControleller.handle);

export { router };