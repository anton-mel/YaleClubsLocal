
import prisma from "@/app/libs/prismadb";

const getComments = async (
    netid: string
) => {
    try {
        const messages = await prisma.comment.findMany({
            where: {
                groupNetid: netid
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        console.log("here"+messages);

        return messages;
    } catch (errors: any) {
        console.log(errors);
        return [];
    }
}

export default getComments;
