'use client';
import { signOut, useSession } from 'next-auth/react';
import { FC } from 'react';

const Dashboard: FC = () => {
  const { data } = useSession();

  return (
    <div className="container mx-auto">
      <div className="text-3xl text-red-600">DashBoard</div>
      <p>Hi, {data?.user?.name || '--'}</p>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
