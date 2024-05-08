'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Modal } from '@/components/ui/modal';

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title='Create Store'
      description='Add a store to manage categories and products'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Store
    </Modal>
  );
};
