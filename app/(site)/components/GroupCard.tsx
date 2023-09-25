"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface Group {
    netid: string;
    first_name: string;
    year: number | null;
    mailbox: string;
}


export const GroupCard: React.FC<{ group: Group }> = ({ 
    group 
}) => {
    const router = useRouter();

    const handleClick = useCallback(() => {
        const url = `/groups/${group.netid}`;
        window.open(url, '_blank');
        // router.push(`/groups/${group.netid}`)
    }, [group.netid, router]);

    return (
    <div 
        key={group.netid} 
        className="
          bg-gray-100 
            p-4 
            rounded-md 
            cursor-pointer"
        onClick={handleClick}>
        <h3 className="font-bold">
            {group.first_name}
            {group.year != null ? "' " + JSON.stringify(group.year).slice(2) : ''}
        </h3>
        <p>{group.mailbox}</p>
    </div>
    );
};

