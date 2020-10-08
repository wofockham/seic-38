require 'sinatra'
require 'sinatra/reloader'
require 'pry'

# Root page or home page of the site.
get '/' do
  "Hello world from the home page. It's good to be here!!!"
end

get '/hello' do
  "Hello World From Sinatra!!!" # implicit return
end

get '/goodbye' do
  "Goodbye cruel world"
end

# Dynamic content
get '/lucky_number' do
  "Here is your lucky number: #{ rand 1..40  }"
end

get '/uptime' do
  "The server uptime is #{ `uptime` }"
end

# Dynamic URLs
# Infinite number of URLs
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club"
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a premium member of the Marx Brothers fan club"
end

# /fanclub/margaret/thatcher/harpo
get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a platinum member of the Marx Brothers fan club and their favourite Marx Brother is #{ params[:favourite].capitalize }"
end

# Second crappiest calculator of the entire course
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f # Servers like browsers treat everything as "text"
  "The result is <strong>#{ result }</strong>"
end

# Serious complaints:
# Where is the HTML?
# How do we get information from the user without making them mess with the URL?
