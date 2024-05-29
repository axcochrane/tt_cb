class AddPatientIdToAddresses < ActiveRecord::Migration[7.1]
  def change
    add_reference :addresses, :patient, index: true, null: false, foreign_key: true
  end
end
