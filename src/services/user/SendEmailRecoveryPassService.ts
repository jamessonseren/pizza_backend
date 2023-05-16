import nodemailer from 'nodemailer'
import prismaClient from '../../prisma'


interface UserRequest {
    email: string
}

export class SendEmailRecoveryPassService {
    async execute({ email }: UserRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            },
            select:{
                id: true,
                email: true,
                name: true
            }
        })
        if (!user) {
            console.log('Email not found')
            console.log('user not found: ',user)
            return
        }
        
       

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "d1810d8be2cbec",
                pass: "af76893e6de372"
            }
        })
        const mailOptions = {
            from: 'noreply@nodemailer.com',
            to: email,
            subject: 'Email Recovery',
            text: 'You have lost your password. You can create a new one here!',
            html: `You have lost your password. You can create a new one here! <br><br><p><a href="https://localhost:3000/new-password?user_id=${user.id}"> Click here</a> to create a new password.</p>`,
        };


        
           const emailSent = transporter.sendMail(mailOptions, (err) => {
                if(err){
                    console.log(err)
                    console.log('Email not sent')
                }
                console.log("Email sent successfully")
            });

            return (user)
        

    }

}
