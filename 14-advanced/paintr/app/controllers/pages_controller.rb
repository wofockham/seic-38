class PagesController < ApplicationController
  def home
  end

  def hamldemo
    @lucky_number = Random.rand 1..40
  end
end
