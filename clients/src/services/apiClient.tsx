const API_BASE_URL = 'http://127.0.0.1:3000';

export async function getPatients() {
  const response = await fetch(`${API_BASE_URL}/patients`);
  if (!response.ok) {
    throw new Error('Error fetching patients');
  }
  return response.json();
}

export async function createPatient(patientData) {
  const response = await fetch(`${API_BASE_URL}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData)
  });
  if (!response.ok) {
    throw new Error('Error creating patient');
  }
  return response.json();
}

export async function updatePatient(patientId, patientData) {
  const response = await fetch(`${API_BASE_URL}/patients/${patientId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData)
  });
  if (!response.ok) {
    throw new Error('Error updating patient');
  }
  return response.json();
}

export async function deletePatient(patientId) {
  const response = await fetch(`${API_BASE_URL}/patients/${patientId}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Error deleting patient');
  }
  return response.json();
}