class PatientsController < ApplicationController

  def index
    patients = Patient.all.includes(:addresses)

    render json: patients, status: :ok
  end

  def create
    patient = Patient.new(patient_params)
    if patient.save
      render json: patient, status: :created, location: patient
    else
      render json: patient.errors, status: :unprocessable_entity
    end
  end

  def show
    patient = find_patient
    render json: patient
  end

  def update
    patient = find_patient
    if patient.update(patient_params)
      render json: patient, status: :ok
    else
      render json: patient.errors, status: :unprocessable_entity
    end
  end

  def destroy
    patient = find_patient
    patient.destroy

    head :no_content
  end

  private

  def find_patient
    Patient.find(params[:id])
  end

  def patient_params
    params.require(:patient).permit(:given_name, :middle_names, :family_name, :dob)
  end
end
