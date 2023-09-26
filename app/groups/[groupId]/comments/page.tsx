"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageInput from "./components/MessageInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";



interface CommentsProps {
    groupId: string;
}
  
const Comments: React.FC<CommentsProps> = ({ groupId }) => {
    const [comments, setComments] = useState<any>([]);

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

    const fetchComments = async (groupId: string) => {
        try {
            const response = await axios.get(`/api/getcomments/${groupId}`);
            return response;
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    };

    useEffect(() => {
        if (groupId) {
            fetchComments(groupId).then((response) => {
                setComments(response.data);
            });
        }
    }, [groupId, comments]);
    

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setValue('message', '', {shouldValidate: true});
        
        axios.post('/api/comments', {
            ...data,
            netid: groupId
        });

        toast.success("Comment has been added!", {
            duration: 2000
        });

        const response = await fetchComments(groupId);
        setComments(response.data);
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
                {comments.map((comment:any) => (
                    <li key={comment.id} className="mb-2">
                    {comment.content}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default Comments;