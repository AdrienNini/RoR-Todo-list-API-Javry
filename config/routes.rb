Rails.application.routes.draw do
  get 'api/items' => 'todo#index'
  post 'api/items' => 'todo#create'
  patch 'api/item/:id' => 'todo#update'
  delete 'api/item/:id' => 'todo#destroy'

  root 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
