
interface Group {
    netid: string;
    first_name: string;
    year: number | null;
    mailbox: string;
}

export const AboutGroup = ({ group }: { group: Group }) => {
    return (
        <div className="">
            <h2>Group Data</h2>
            <ul>
                {Object.entries(group).map(([key, value]) => (
                <li key={key}>
                    {key}: {value}
                </li>
                ))}
            </ul>
        </div>
    );
}