import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string,
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    // Receber o token
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }
    const [, token] = authToken.split(" ")
    
    try{
        //Validar o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad
       
        //Recuperar ID do token e inserir na variável req.user_id
        req.user_id = sub

        return next()

    }catch{
        return res.status(401).end()
    }
}