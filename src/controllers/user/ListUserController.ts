import { Request, Response } from "express";
import { ListUserService } from "../../services/user/ListUserService";

export class ListUserController{
    async handle(req: Request, res: Response){
        
        const listUsers = new ListUserService() 
        
        const user = await listUsers.execute()

        return res.json(user)
    }
}