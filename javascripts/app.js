window.onresize = function(){ location.reload(); }

$(function() {

  var window_size = window.matchMedia('(max-width: 450px)');

  if (window.matchMedia('(max-width: 450px)').matches) {
    $.ajax({url: 'javascripts/avocado.json', data: {}}).done(function(response) {
      console.log(response);
      var listMarkup = '';
      for (var i = 0; i < response.length; i++) {
        listMarkup += '<div class="avocado-item"><h2 class="avocado-number">' + (i + 1) + '</h2><div><h3 class="avocado-title">' + response[i].name + '</h3>' + '<p>' + response[i].description + '</p><img src="../images/' + response[i].img + '"></div></div>';
      }
      $('#avocado-list').append(listMarkup);
    }).fail(function() {
      console.log("error");
    }).always(function() {
      console.log("complete");
    });
  }

  else {
    $.ajax({url: 'javascripts/avocado.json', data: {}}).done(function(response) {
      console.log(response);
      var listMarkup = '';
      for (var i = 0; i < response.length; i++) {
        listMarkup += '<div class="avocado-item"><h2 class="avocado-number">' + (i + 1) + '</h2><img src="../images/' + response[i].img + '" class="lightbox_trigger"><div><h3 class="avocado-title">' + response[i].name + '</h3>' + '<p>' + response[i].description + '</p></div></div>';
      }
      $('#avocado-list').append(listMarkup);
    }).fail(function() {
      console.log("error");
    }).always(function() {
      console.log("complete");
    });
  };

  // lightbox not completed

  $('.lightbox_trigger').on('click', function(e) {
    e.preventDefault();
    console.log("clicked");
    var image_src = $(this).attr('src');
    if ($('#lightbox').length > 0) {
      $('#content').html('<img src="' + image_src + '" />');
      $('#lightbox').show();
    } else {
      var lightbox = '<div id="lightbox">' +
      '<p>Click to close</p>' +
      '<div id="content">' +
      '<img src="' + image_src + '" />' + '</div></div>';
      $('body').append(lightbox);
    }
  });
  $('#lightbox').on('click', function() {
    $('#lightbox').hide();
  });
});
