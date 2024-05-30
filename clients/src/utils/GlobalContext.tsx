import { createContext, useState, useContext } from 'react';
import Patient from '../models/Patient';

interface GlobalContextType {
  isCreateModalOpen: boolean;
  openCreateModal: () => void;
  closeCreateModal: () => void;
  patients: Patient[];
  handleSetPatients: (patientArr: Patient[]) => void;
}

const GlobalContext = createContext<GlobalContextType>({
  isCreateModalOpen: false,
  openCreateModal: () => {},
  closeCreateModal: () => {},
  patients: [],
  handleSetPatients: () => {}
});

export const GlobalProvider = ({ children }: any) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [patients, setPatients] = useState<Patient[]>([]);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);
  const handleSetPatients = (patientArr: Patient[]) => setPatients(patientArr);

  return (
    <GlobalContext.Provider value={{ isCreateModalOpen, openCreateModal, closeCreateModal, patients, handleSetPatients }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};