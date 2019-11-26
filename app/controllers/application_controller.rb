class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_parmitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parametaer_sanitizer.permit(:singn_up, keys: [:name])
  end
end
