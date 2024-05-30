import { useState, useEffect } from 'react'
import { getPatients, createPatient, updatePatient, deletePatient } from '../../../services/apiClient'
import Patient from '../../../models/Patient'
import CreatePatientModal from './CreatePatientModal';
import PatientsTable from './PatientsTable';
import { useGlobalContext } from '../../../utils/GlobalContext'

function PatientsPage() {

  const { isCreateModalOpen, handleSetPatients, patients } = useGlobalContext();

  useEffect(() => {
    getPatients().then(handleSetPatients).catch(console.error);
  }, []);

  return (
    <>
      <CreatePatientModal isOpen={isCreateModalOpen} />
      <PatientsTable patients={patients} />
    </>
  )
}

export default PatientsPage