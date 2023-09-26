

export default async function GroupLayout ({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full">
            {children}
        </div>
    );
}
