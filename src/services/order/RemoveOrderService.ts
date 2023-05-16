import prismaClient from "../../prisma";

interface RemoverOderRequest{
    order_id: string
}
class RemoveOrderService{
    
    async execute( {order_id }:RemoverOderRequest){
        const order = await prismaClient.order.delete({
            where:{
                id: order_id
            }
        })
        return order
    }

}

export { RemoveOrderService }