Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/brother' => 'dashboard#brother'
  get '/time' => 'dashboard#time'
  get '/uptime' => 'dashboard#uptime'

  get '/info' => 'dashboard#info'

  get '/animals' => 'animals#index'
end
