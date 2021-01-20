 
FactoryBot.define do
  factory :customer do
     name { Faker::Name.name }
     email { Faker::Internet.email }
     avatar { "#{Rails.root}/public/avatar.jpg" }
     smoker { ["S", "N"].sample }
     phone { Faker::PhoneNumber.phone_number }
  end
end
