# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all

seeds = Todo.create!([
    {title:"Walk the dog", body:"with leash", done:false},
    {title:"Rest", body:"Do nothing!", done:false},
    {title:"Exercise", body:"a lot of pushups", done:false},
    {title:"Learn Redux", body:"good luck with that", done:true}
])