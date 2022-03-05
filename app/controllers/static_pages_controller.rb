class StaticPagesController < ApplicationController

  def home
    render 'home'
  end

  def signup
    render 'home'
  end

  def login
    redirect_to '/tweet'
  end

  def tweet
  end 

end
