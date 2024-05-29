FactoryBot.define do
  factory :patient do
    given_name { Faker::Name.first_name }
    middle_names { Faker::Name.middle_name }
    family_name { Faker::Name.last_name }
    dob { Faker::Date.birthday(min_age: 18, max_age: 90) }

    trait :with_address do
      after(:create) do |patient|
        create(:address, patient: patient)
      end
    end
  end
end
