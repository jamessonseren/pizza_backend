import prismaClient from "../../prisma";

interface ProductRequest{
    product_id: string
}
export class DeleteProductService{
    async execute({product_id}: ProductRequest){

        const deleteProduct = await prismaClient.product.delete({
            where:{
                id: product_id
            }
        })

        return deleteProduct
    }
}