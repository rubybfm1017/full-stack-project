class Api::UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @users = User.all
        render 'api/users/index'
    end

    def create
        @user = User.new(user_params)

        if @user.save
            sign_in!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password)
    end
    
end
