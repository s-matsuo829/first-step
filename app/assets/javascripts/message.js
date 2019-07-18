$(function(){
  function buildHTML(message){
    var image = ( message.image ) ? image = `<img class='lower-message__image' src=${message.image} >` : image = "";
    var html =
    `<div class="message">
      <div class="message__upper-info">
        <p class="message__upper-info__date">
          ${message.time}
        </p>
      </div>
      <div class="message__text">
        <p class="lower-message__content">
          ${message.content}
        </p>
      </div>
      ${image}
      <div class="message__space">
      </div>
    </div>`
  return html;
  }
  $("#new_message").on("submit", function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'post',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".messages").append(html)
      $(".messages").animate({scrollTop: $('.messages')[0].scrollHeight});
      $("#new_message")[0].reset();
      $(".submit-btn").attr("disabled", false);
    })
    .fail(function(){
      alert("エラー");
    })
    return false;
  });
});