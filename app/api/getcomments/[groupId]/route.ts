

import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET (
    req: Request,
    { params } : { params: { groupId: string } }
) {
    try {
        const comments = await client.comment.findMany({
            where: {
                "groupNetid": params.groupId
            },
            orderBy: { 
                createdAt: 'asc',
            },
        });

        return  NextResponse.json(comments);
    } catch (error) {
        console.log('[COMMENTS_GET]', error);
        return new NextResponse("Internal Error", {status: 500});
    }
};