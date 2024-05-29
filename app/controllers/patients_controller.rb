class PatientsController < ApplicationController

  def index
    patients = Patient.all.includes(:addresses)

    render json: patients
  end

end
