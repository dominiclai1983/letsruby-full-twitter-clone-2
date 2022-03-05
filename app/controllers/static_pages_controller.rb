class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def signup
    redirect_to 'home'
  end

  def login
    redirect_to '/tweet'
  end

  def tweet
  end 
end
