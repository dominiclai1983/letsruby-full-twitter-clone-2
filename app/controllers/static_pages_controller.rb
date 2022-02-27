class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def signup
    render 'signup'
  end

  def login
    redirect_to '/tweet'
  end

  def tweet
    render 'tweet'
  end 
end
