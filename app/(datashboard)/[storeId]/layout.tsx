import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb';
import Navbar from '@/components/navbar';

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const adminList = process.env.ADMIN_USERID_LIST!.split(',');

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId: { in: adminList },
    },
  });
  if (!store) {
    redirect('/');
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
