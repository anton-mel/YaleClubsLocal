

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST (
    request: Request
) {
    try {
        const body = await request.json();
        const {
            message,
            netid
        } = body;

        const newComment = await prisma.comment.create({
            data: {
                content: message,
                groupNetid: netid,
            }
        });

        return new NextResponse(
            JSON.stringify({ message: "Comment created successfully", data: newComment }),
            { status: 201 }
        );
    } catch (error: any) {
        console.log(error, 'ERROR_MESSAGES');
        return new NextResponse('InternalError', {status: 500});
    }
}
