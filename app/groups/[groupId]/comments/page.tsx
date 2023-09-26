"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageInput from "./components/MessageInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import getComments from "@/app/actions/getComments";



export const Comments = ({groupId} : {groupId: string}) => {

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    });

    // FIX IT to normal interface later on!
    const [comments, setComments] = useState<any[]>([]);

    // Fetch comments here
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getComments(groupId);
                setComments(response);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        fetchComments();
    }, [groupId]);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue('message', '', {shouldValidate: true});
        
        axios.post('/api/comments', {
            ...data,
            netid: groupId
        });
        
    };

    return (
        <div className="
            bg-gray-100
            mt-5
            p-5
            rounded-md">
            Leave Comments Here!

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-5 flex items-center gap-2 lg:gap-4 w-full"
            >
                <MessageInput 
                    id="message"
                    register={register}
                    errors={errors}
                    required
                    placeholder="Write a message..."
                />

                <button
                    type="submit"
                    className="
                        rounded-md
                        py-2
                        px-5
                        bg-sky-500
                        text-white
                        cursor-pointer
                        hover:bg-sky-600
                        transition
                    "
                >
                    Send
                </button>
            </form>

            <div className="mt-5">
                <h2 className="text-xl font-semibold mb-3">Comments:</h2>
                <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className="mb-2">
                    {comment.content}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}
