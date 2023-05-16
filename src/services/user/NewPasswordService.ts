import { User } from '@prisma/client';
import prismaClient from '../../prisma'
import { hash } from "bcryptjs";


export class NewPasswordService{
    async execute( user_id: string, newPassword: string){

    const passwordHash = await hash(newPassword, 8)

       const user = await prismaClient.user.update({
            where:{
                 id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true
            },
            
            data:{
                password: passwordHash
            }
        })

        return user
    }
}