"use client"

import React, { useEffect, useState } from 'react';
import { getGroups } from '@/app/actions/getGroups';

import { PageButton } from './components/PagginationButton';
import { GroupCard } from './components/GroupCard';
import { Header } from '../components/Header';

export default function Home() {
  // save users here! write an interface later on (not sure what data is needed)
  const [groups, setGroup] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPeople() {
      try {
        setLoading(true);
        const response = await getGroups({
          "page": page,
          "page_size": 20
        });
        setGroup(response);
      } catch (error) {
        console.error('Error fetching people:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPeople();
  }, [page]);

  groups.forEach((group) => {
    console.log(group);
  });
  
  return (
    <div>
      <Header />
      <div className="
        py-5
        sm:px-8
      ">
        <h2 className="text-1xl font-bold text-gray-900">Clubs:</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="mt-2 w-full grid grid-cols-2 gap-5">
            {groups.map((group) => (
              <GroupCard key={group.netid} group={group} />
            ))}
          </div>
        )}

        {/* Write handler functions for these buttons */}
        <div className="
          mt-5
          flex
          gap-2
        ">
          <PageButton onClick={() => setPage(page - 1)} label="Prev" />
          <PageButton onClick={() => setPage(page + 1)} label="Next" />
        </div>
      </div>
    </div>
  );
}
