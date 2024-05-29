FactoryBot.define do
  factory :address do
    first_line { Faker::Address.street_address }
    second_line { Faker::Address.secondary_address }
    city { Faker::Address.city }
    county { Faker::Address.state }
    post_code { Faker::Address.postcode }
    address_type { Faker::Number.between(from: 0, to: 1) } # Assuming 0 and 1 are valid address types
    status { Faker::Number.between(from: 0, to: 1) } # Assuming 0 and 1 are valid statuses
    created_at { Faker::Date.backward(days: 3650) }
    updated_at { Faker::Date.backward(days: 3650) }
    association :patient
  end
end