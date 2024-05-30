import { createContext, useState, useContext } from 'react';
import Patient from '../models/Patient';

const GlobalContext = createContext({
  isCreateModalOpen: false,
  openCreateModal: () => {},
  closeCreateModal: () => {}
});

export const GlobalProvider = ({ children }: any) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  return (
    <GlobalContext.Provider value={{ isCreateModalOpen, openCreateModal, closeCreateModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};