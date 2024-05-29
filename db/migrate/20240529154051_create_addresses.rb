class CreateAddresses < ActiveRecord::Migration[7.1]
  def change
    create_table :addresses do |t|
      t.string :first_line, null: false
      t.string :second_line
      t.string :city, null: false
      t.string :county
      t.string :post_code, null: false
      t.integer :address_type, null: false, default: 0, index: true
      t.integer :status, null: false, default: 0, index: true

      t.timestamps
    end
  end
end
