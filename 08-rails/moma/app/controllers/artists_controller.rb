class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end

  def new
    @artist = Artist.new # blank artist template
  end

  def create
    artist = Artist.create artist_params
    redirect_to artist
  end

  def edit
    @artist = Artist.find params[:id] # existing artist
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params
    redirect_to artist
  end

  def destroy
    artist = Artist.find params[:id]
    artist.destroy
    redirect_to artists_path # index
  end

  private
  # Strong parameters
  def artist_params
    # White list of parameters that we are happy to receive from the browser.
    params.require(:artist).permit(:name, :nationality, :dob, :period, :image)
  end
end
