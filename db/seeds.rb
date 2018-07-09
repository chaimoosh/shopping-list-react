# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

Onions = Item.create(
  name: "Onions",
  amount: "2 lbs",
  notes: "Get nice ones"
)

Milk = Item.create(
  name: "Milk",
  amount: "3 bottles",
  notes: "2 blue 1 red"
)

Cukes = Item.create(
  name: "Cucumbers",
  amount: "5",
  notes: "Green ones"
)
