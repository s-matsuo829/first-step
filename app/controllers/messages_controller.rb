class MessagesController < ApplicationController
  before_action :set_time

  def index
    @message = Message.new
    @messages = Message.includes(:user)
  end

  def create
    @message = Message.create(image: message_params[:image], content: message_params[:content], user_id: current_user.id)
    if @message.save
      redirect_to root_path
    else
      @messages = Message.includes(:user)
      render :index
    end
  end

  private
  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_time
    wd = ["Sun", "Mon", "tue", "Wed", "Thu", "Fri", "Sat"]
    time = Time.now
    @time = wd[time.wday]
  end
end
