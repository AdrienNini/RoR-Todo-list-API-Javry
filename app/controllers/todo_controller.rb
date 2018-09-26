class TodoController < ApplicationController
  skip_before_action :verify_authenticity_token

  # List all elements of the database
  def index
    render :json => Todo.all.to_json
  end

  # Add a new element to the Database
  def create
    @item = Todo.create title: params[:title], done: false, created_at: DateTime.now, done_at: nil
    render :json => @item.to_json
  end

  # Swap the value (done/undone)
  def update
    @item = Todo.find(params[:id])
    @item.update(:done => !@item.done, :done_at => (@item.done ? nil : DateTime.now)) 
    render :json => @item.to_json
  end

  # Delete an element form the Database
  def destroy
    Todo.find(params[:id]).destroy
    render :json => {:message => "Record deleted", :item_id => params[:id]}
  end
end
