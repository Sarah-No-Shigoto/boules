$(document).ready(function(){

  $("#appearing").click(function(){
    var positionX = 900 * Math.random();
    var positionY = 100 * Math.random();
    var i = 0;

      var newClass = 'newBall' + i;
      i++;
      $("#appearing").prepend("<p class='"+ newClass +"'</p>");
      $("." + newClass).css({'position': 'absolute',
                            'border-radius': '100%',
                            'background-color':'yellow',
                            'width':'50px',
                            'height':'50px',
                            'left': positionX,
                            'top': positionY }).animate({top:'100%'});
  });



}); // Fin de la méthode ici
