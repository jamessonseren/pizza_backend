import { Request, Response } from "express"
import { SendEmailRecoveryPassService } from "../../services/user/SendEmailRecoveryPassService"

export class SendEmailRecoveryPassController{

    async handle(req: Request, res: Response){

        const { email  } = req.body

        const recoveryPass = new SendEmailRecoveryPassService()
        

        const user = await recoveryPass.execute({email})

        return res.json(user)
    }

}