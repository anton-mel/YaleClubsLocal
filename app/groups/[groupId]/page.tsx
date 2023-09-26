"use client"

import { getGroups } from "@/app/actions/getGroups";
import { Header } from "@/app/components/Header";
import { AboutGroup } from "./components/AboutGroup";
import { Comments } from "./comments/page";

interface IParams {
    groupId: string;
}

const GroupId = async ({ params } : {params : IParams}) => {

    const groups = await getGroups({
        "filters": {
            "netid": params.groupId
        },
        "page": 1,
        "page_size": 1
    });

    console.log(groups);

    // make a MongoDB and also request all comments

    if (!groups) {
        return (
            // Create a 404 Page
            <p>Contact administrator, 404!</p>
        );
    }

    return (
        <>
            <Header />
            <div className="sm:px-8 py-5">
                <div className="flex grid-cols-2 gap-5">
                    <AboutGroup group={groups[0]} /> 
                </div>    
                <Comments groupId={params.groupId} />
            </div>
        </>
    );
};

export default GroupId;