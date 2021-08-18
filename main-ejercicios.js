/*Ejecutar de manera independiente, comentar código de sección uno a uno para la ejecución*/

/*Ejercicio 1*/
$(document).ready(function(){
$(function(){
  $("p").click(function(){
      $(this).hide();
  });
});
});

/*Ejercicio 2*/
$(document).ready(function(){
$(function(){
  $("button").click(function(){
      $("p").hide();
      
  });
});
});

/*Ejercicio 3*/
$(document).ready(function(){
  $(function(){
    $("#p1").mouseenter(function(){
        alert("Al moverse se ve este texto");
        
    });
});
});

/*Ejercicio 4*/
$(document).ready(function(){
  $(document).ready(function(){
    $("button").click(function(){
      $("p").toggle();
    });
});
});

/*Ejercicio 5*/
$(document).ready(function(){
  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
  });
});

/*Ejercicio 6*/
$(document).ready(function(){
  $(document).ready(function(){
    $("button").click(function(){
      var div = $("div");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });
});
