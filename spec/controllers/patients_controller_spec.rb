require 'rails_helper'

RSpec.describe PatientsController, type: :request do
  include FactoryBot::Syntax::Methods

  let!(:patient1) { create(:patient) }
  let!(:patient2) { create(:patient) }
  let(:valid_attributes) { attributes_for(:patient) }
  let(:headers) {{ 'ACCEPT' => 'application/json' }}

  describe 'GET /patients' do
    context 'when the index request is made' do
      before { get '/patients' }

      it 'returns patients' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns all patients' do
        expect(JSON.parse(response.body).size).to eq(2)
      end
    end
  end

  describe 'POST /patients' do
    context 'when the request is valid' do
      before {  post '/patients', params: { patient: valid_attributes }, headers: headers, as: :json  }

      it 'creates a patient' do
        expect(response).to have_http_status(:created)
      end

      it 'returns newly created record' do
        new_family_name = JSON.parse(response.body)[:family_name]

        expect(new_family_name).to eq(valid_attributes['family_name'])
      end

    end

    context 'when the request is invalid' do
      before { post '/patients', params: { patient: { given_name: nil } } }

      it 'returns status code unprocessable_entity' do
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'GET /patients/:id' do
    context 'when the record exists' do
      before { get "/patients/#{patient2.id}" }

      it 'returns the patient' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the correct patient' do
        expected_family_name = JSON.parse(response.body)['family_name']

        expect(expected_family_name).to eq(patient2.family_name)
      end
    end

    context 'when the record does not exist' do
      let(:patient_id) { 100 }

      before { get "/patients/#{patient_id}" }

      it 'returns status code not_found' do
        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'PATCH /patients/:id' do
    context 'when the record exists' do
      before { patch "/patients/#{patient1.id}", params: { patient: { family_name: 'NewFamilyName'} } }

      it 'updates the patient' do
        updated_patient = Patient.find(patient1.id)
        expect(updated_patient.family_name).to match('NewFamilyName')
      end
    end
  end

  describe 'DELETE /patients/:id' do
    context 'when the record exists' do
      let!(:patient_for_deletion) { create(:patient) }
      let!(:patient_id) { patient_for_deletion.id.dup }
      before { delete "/patients/#{patient_id}" }

      it 'deletes the patient' do
        expect(response).to have_http_status(:no_content)
        expect { Patient.find(patient_id) }.to raise_error(ActiveRecord::RecordNotFound)
      end


    end
  end
end
