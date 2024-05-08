'use client';
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { UserButton } from '@clerk/nextjs';
import { on } from 'events';
import { useEffect } from 'react';

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen]);

  return (
    <div className='p-4'>
      <UserButton afterSignOutUrl='/' />

      <p>Root Page</p>
    </div>
  );
};

export default SetupPage;
