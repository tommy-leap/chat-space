$(function(){ 

     function buildHTML(message){

      if ( message.image ){
        var message_image =  `<img src=${message.image} >`
      }else{
        var message_image = ""
      }

        var html =
         `<div class="message" data-message-id=${message.id}>
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${message.user_name}
              </div>
              <div class="upper-message__date">
                ${message.date}
              </div>
            </div>
            <div class="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            ${message_image}
          </div>`
        return html;
    }
      
    
  $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.main-chat').append(html);
        $('.main-chat').animate({scrollTop: $('.main-chat')[0].scrollHeight});   
        $('form')[0].reset();
        $('.submit__btn').prop('disabled', false);
      })
      .fail(function(){
        alert("メッセージ送信に失敗しました")
    })
  })
  var reloadMessages = function() {
    if(window.location.href.match(/\/groups\/\d+\/messages/)){
       last_message_id = $('.message:last'). data("message-id");
        $.ajax({
          url: 'api/messages',
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          var insertHTML = '';
          messages.forEach(function (message) {
          insertHTML += buildHTML(message);
          $('.main-chat').append(insertHTML);
          $('.main-chat').animate({scrollTop: $('.main-chat')[0].scrollHeight});
          });
        })
        .fail(function() {
          alert('error');
        });
    }; 
  } 
  setInterval(reloadMessages, 7000);
});