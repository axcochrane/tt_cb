import { useState, useRef } from 'react';
import { createPatient } from '../../../services/apiClient';
import { useGlobalContext } from '../../../utils/GlobalContext'

function CreatePatientModal({ isOpen = false }: { isOpen: boolean }) {
  const { patients, closeCreateModal, handleSetPatients } = useGlobalContext();
  const formRef = useRef<HTMLFormElement>(null);

  const [patientData, setPatientData] = useState({
    given_name: '',
    middles_names: '',
    family_name: '',
    dob: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newPatient = await createPatient(patientData);
      closeCreateModal();
      handleSetPatients([newPatient, ...patients]);
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  const handleSecondarySubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  const formFields = (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white py-4">
      <div className="mb-2">
        <label htmlFor="given_name" className="block text-gray-700 text-sm font-bold mb-2">Given Name:</label>
        <input
          type="text"
          id="given_name"
          name="given_name"
          value={patientData.given_name}
          onChange={handleChange}
          required
          className="border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="middles_names" className="block text-gray-700 text-sm font-bold mb-2">Middle Names:</label>
        <input
          type="text"
          id="middles_names"
          name="middles_names"
          value={patientData.middles_names}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="family_name" className="block text-gray-700 text-sm font-bold mb-2">Family Name:</label>
        <input
          type="text"
          id="family_name"
          name="family_name"
          value={patientData.family_name}
          onChange={handleChange}
          required
          className="border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={patientData.dob}
          onChange={handleChange}
          required
          className="border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </form>
  );

  return(
      <div className={`fixed inset-0 z-10 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Modal Title
                  </h3>
                  <div className="mt-2">
                    
                      {formFields}
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button 
                type="button" 
                onClick={handleSecondarySubmit}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Create Patient
              </button>
              <button 
                type="button" 
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={closeCreateModal}
              >
                  Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreatePatientModal
