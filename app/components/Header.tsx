

import Link from 'next/link';

export const Header = () => {
    return (
        <div className="sm:py-5 sm:px-8 bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-900">
                <Link href="/">YaleClubs</Link>
            </h1>
        </div>
    );
}