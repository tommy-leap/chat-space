Rails.application.routes.draw do
  devise_for :users
  root to: "groups#index"
  resources :users, only: [:edit, :update]
  resources :groups, only:[:index,:new, :create, :edit, :update] do
    resource :messages, only: [:index, :create]
  end
end
