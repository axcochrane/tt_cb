import { useState, useEffect } from 'react'
import { getPatients, createPatient, updatePatient, deletePatient } from '../../../services/apiClient'


function PatientsPage() {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        getPatients().then(setPatients).catch(console.error);
    }, []);

    
    return(
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>
                  {/* Actions like edit/delete can be added here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}

export default PatientsPage