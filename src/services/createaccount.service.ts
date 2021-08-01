import { getRepository, getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/users.repositories";
import { userMessages } from "../messages/userMessages.message"

interface UserI{
  name: string,
  email: string,
  isBaptized: boolean,
  password: string
}
class CreateUser{
    async execute({ name, email, isBaptized, password }:UserI){
      const userRepositories = getCustomRepository(UserRepositories);
      const message = new userMessages();
      const alreadyExist = await userRepositories.findOne({email});
        if(alreadyExist)
          {
            return false;
          }else
          {
            const createUser = userRepositories.create({name, email, isBaptized, password});
            await userRepositories.save(createUser);
            return createUser;
            throw new Error("Saved With success");
          }
    }
}

export { CreateUser }