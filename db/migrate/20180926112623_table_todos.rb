class TableTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos
    add_column :todos, :title, :string
    add_column :todos, :done, :boolean
    add_column :todos, :created_at, :datetime
    add_column :todos, :done_at, :datetime
  end
end
