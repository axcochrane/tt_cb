class CreatePatients < ActiveRecord::Migration[7.1]
  def change
    create_table :patients do |t|
      t.string :given_name, null: false
      t.string :middle_names
      t.string :family_name, null: false, index: true
      t.date :dob, null: false, index: true

      t.timestamps
    end
  end
end
