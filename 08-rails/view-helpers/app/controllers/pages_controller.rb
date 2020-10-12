class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 2323
    @large_number = 2392323293
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @story = "A very very very very very very long time ago in a galaxy far far far far far away etc"
    @friend_count = 2
    @enemy_count = 1000
  end

  def assets
  end
end
