$( document ).ready(function() {
  'use strict';

  crossroads.addRoute('/posts', function(){
    console.log("Index");
  });



  crossroads.addRoute('/posts/{id}', function(id){
    console.log("Show:" + id);
  });









  $.ajax({
    url: 'http://localhost:3000/posts',
    type: 'GET',
    dataType: 'jsonp'
  })
  .done(function(data) {
    var postTemplate, html;
    postTemplate = JST['templates/posts/index.hbs'];
    html = postTemplate({people: data});
    $('#posts-target').append(html);
  })
  .fail(function() {
    console.log('error');
  })
  .always(function() {
    console.log('complete');
  });

});
