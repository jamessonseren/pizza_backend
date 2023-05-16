import prismaClient from "../../prisma";

interface CategoryRequest{
    category_id: string
}
export class DeleteCategoryService{
    async execute( {category_id}: CategoryRequest){
        const deleteItem = await prismaClient.category.delete({
            where:{
                id: category_id
            }
        })
        
        return deleteItem
    }
}