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
