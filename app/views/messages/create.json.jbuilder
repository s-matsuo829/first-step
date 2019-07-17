json.content @message.content
json.image @message.image.url
json.time @message.created_at.strftime("%Y/%m/%d(#{@time}) %H:%M:%S")