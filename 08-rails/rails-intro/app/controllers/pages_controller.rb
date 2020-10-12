class PagesController < ApplicationController
  # a method inside a controller is called an action
  def home
    render :home
  end

  def hello
    render :hello # Sinatra: erb :hello
  end

  def goodbye
    render :goodbye
  end
end
