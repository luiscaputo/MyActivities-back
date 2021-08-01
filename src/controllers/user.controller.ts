import { Request, Response } from "express";
import { CreateUser } from "../services/createaccount.service";

class userController{
  async handle(request: Request, response: Response){
    const UserServices = new CreateUser();
    const { name, email, isBaptized, password } = request.body
    const save = await UserServices.execute({name, email, isBaptized, password}); 
    if(save){
      return response.status(200).json({success: true, data: save});
    }
    else
    {
      return response.status(200).json({success: false, message: "Erro ao Cadastrar"});
    }
  }
}

export { userController }