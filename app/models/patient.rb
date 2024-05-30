class Patient < ApplicationRecord

  has_many :addresses, dependent: :destroy
  validates_presence_of :given_name, :family_name, :dob

end
