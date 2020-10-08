require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/faq' do
  erb :faq
end
