$( document ).ready(function() {
  $.ajax({
    url: 'http://localhost:3000/posts',
    type: 'GET',
    dataType: 'jsonp'
  })
  .done(function(data) {
    console.log(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

});
