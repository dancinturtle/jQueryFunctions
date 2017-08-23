$('document').ready(function() {
  $('p1').click(function() {
    alert('hello');
  })

});

$('.addClassButton').click(function() {
  $('.para1').css('color', 'red');
});

$('.slideToggleButton').click(function() {
  $('img').slideToggle("slow", function() {
    // Animation complete.
  });
});


$('.appendButton').click(function() {
  $('.para3').clone().appendTo(".para3");
});

$('.html').click(function() {
  $(".html").hide();
  $('.show').show();
});
$('.show').click(function() {
  $(".html").show();
  $('.show').hide();
});

$("#get_attr").click(function() {
  var val = $('.red').attr('class')
  console.log(val);
  $('.red').append('.red')

});


$('#set_button').click(function() {
  var value = $('.red').attr('class')
  if (value == 'red') {
    $('.red').attr('class', 'yellow');
  } else {
    $('.red').attr('class', 'red');
  }

  //  $('.red').attr("class", "yellow");
});

$('#data').data('power', '0') // sets power to 0
$('#get_power').click(function() {
  var power = $('#data').data('power') * 0;
  $('#power').text(power);
  console.log(power);
})

$('#add_power').click(function() {
  var power = $('#data').data('power');
  $('#data').data('power', parseInt(power) + 10);
  var power = $('#data').data('power');
  console.log(power);

  $('#power').text(power);

})
$('#remove_power').click(function() {
  var power = $('#data').data('power');
  $('#data').data('power', parseInt(power) - 10);
  var power = $('#data').data('power');
  console.log(power);
  $('#power').text(power);
})
