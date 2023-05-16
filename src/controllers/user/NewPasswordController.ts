import { Request, Response } from "express"
import { NewPasswordService } from "../../services/user/NewPasswordService"

export class NewPasswordController{
    async handle(req: Request, res: Response){
        const user_id  = req.query.user_id as string

        const newPassword  = req.body.password

        const newPasswordService = new NewPasswordService()

        const user = await newPasswordService.execute(user_id, newPassword)

        return res.json(user)
    }
}
