# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_05_29_162110) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "first_line", null: false
    t.string "second_line"
    t.string "city", null: false
    t.string "county"
    t.string "post_code", null: false
    t.integer "address_type", default: 0, null: false
    t.integer "status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "patient_id", null: false
    t.index ["address_type"], name: "index_addresses_on_address_type"
    t.index ["patient_id"], name: "index_addresses_on_patient_id"
    t.index ["status"], name: "index_addresses_on_status"
  end

  create_table "patients", force: :cascade do |t|
    t.string "given_name", null: false
    t.string "middle_names"
    t.string "family_name", null: false
    t.date "dob", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dob"], name: "index_patients_on_dob"
    t.index ["family_name"], name: "index_patients_on_family_name"
  end

  add_foreign_key "addresses", "patients"
end
