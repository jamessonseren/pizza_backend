import prismaClient from "../../prisma";

export class ListUserService{
    async execute(){
        const users = await prismaClient.user.findMany()

        return users
    }
}