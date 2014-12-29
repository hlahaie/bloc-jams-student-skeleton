$(document).ready(function() { 
  $('.hero-content h3').click(function(){
      // console.log("hello!");
      var subText = $(this).text();
      $(this).text(subText + "!");
  });

  var onHoverAction = function(event) {
    // console.log('Hover action triggered.');
    $(this).animate({'margin top': '10px'});
  };
  var offHoverAction = function(event) {
    // console.log('off-hover action triggered.');
    $(this).animate({'margin top': '0px'});
  };
  $('.selling-points .point').hover(onHoverAction, offHoverAction);
});