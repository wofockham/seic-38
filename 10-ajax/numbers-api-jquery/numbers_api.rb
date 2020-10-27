require 'httparty' # const xhr = new XMLHttpRequest
response = HTTParty.get 'http://numbersapi.com/random/trivia' # sync
puts response
