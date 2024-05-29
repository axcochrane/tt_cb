class Address < ApplicationRecord
  enum address_type: { current: 0 , previous: 1 }, _default: 0
  enum status: { active: 0, archived: 1 }, _default: 0

  belongs_to :patient
  validates_presence_of :first_line, :city, :post_code, :address_type, :status

end

