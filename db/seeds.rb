# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.create(title: "Code a todo list app", done: true, created_at: DateTime.now, done_at: DateTime.now)
Todo.create(title: "Upload it", done: true, created_at: DateTime.now, done_at: DateTime.now)
Todo.create(title: "Pass the test", done: false, created_at: DateTime.now, done_at: nil)
Todo.create(title: "Get the job !", done: false, created_at: DateTime.now, done_at: nil)


