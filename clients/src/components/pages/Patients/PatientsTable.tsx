import Patient from '../../../models/Patient'
import { useGlobalContext } from '../../../utils/GlobalContext'

function PatientsTable({ patients }: { patients: Patient[] }) {

  const { openCreateModal } = useGlobalContext();

  return (
    <div className="flex flex-col bg-white">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-gray-500 text-lg">Patients</h1>
              <button
                onClick={openCreateModal}
                className="bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-500 text-sm border border-gray-300 py-2 px-4 rounded">
                Create a Patient
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.given_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.family_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.dob}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* Actions like edit/delete can be added here */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientsTable