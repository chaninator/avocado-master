$(function() {
  // $.getJSON('/javascripts/avocado.json', function(data) {
  //   console.log('types of avocado toast:', data);
  // });
  $.ajax({
    url: 'javascripts/avocado.json',
    data: {}
  })
  .done(function(response) {
    console.log("success");
    var avocadoArray = response.value;
    console.log(response);
    for (var i=0; i<response.length; i++) {
      $('#avocado-list').append(i+1);
      $('#avocado-list').append('<img src="../images/' + response[i].img + '">');
      $('#avocado-list').append('<li><h2>' + response[i].name + '</h2></li>');
      $('#avocado-list').append('<li><p>' + response[i].description + '</p></li>');
    }
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });


});
