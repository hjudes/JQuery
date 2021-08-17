$(document).ready(function(){

    $(".primero").css({"background": "red"});
    $("button").click(function(){
        alert("hola");
        $("#seg").hide();
    
    });
});

/*$(function(){
    $("#Show").click(function(){
        $("#seg").show(20000);
    });
    $("#Hide").click(function(){
        $("#seg").hide();
    })
})
*/

/*$(function(){
    $(".primero").mouseenter(function(){
        $("#seg").hide();
    });
    $(".primero").mouseleave(function(){
        $("#seg").show();
    })
})
*/

/*$(function(){
    $(".primero").mouseenter(function(){
        $("#seg").fadeIn();
    });
    $(".primero").mouseleave(function(){
        $("#seg").fadeOut();
    })
})
*/

/*$(function(){
    $(".primero").click(function(){
        $("#seg").slideDown();
    });
    $(".primero").click(function(){
        $("#seg").slideUp();
    })
})
*/

/*$(function(){
    $(".primero").animate({opacity:0.35});
    $(".primero").mouseenter(function(){
        $("#seg").slideDown();
    });
    $(".primero").mouseleave(function(){
        $("#seg").slideUp();
    })
})
*/

/*$(function(){
    $("#Hide").click(function(){
        $("#seg").text("hola");
    });
});
*/

/*$(function(){
    $("#Hide").click(function(){
        $("#seg").prepend("<strong>hola</strong>");
    });
    $("#Show").click(function(){
        $("#seg").remove();
    });
});
*/

/*$(function(){
    $("#Hide").click(function(){
        $("#seg").after("<p><strong>hola</strong></p>");
    });
    $("#Show").click(function(){
        $("#seg").remove();
    });
});
*/

/*$(function(){
    $("#Hide").click(function(){
        $("h1").addClass("red");
    });
    $("#Show").click(function(){
        $("h1").removeClass("red");
    });
});
*/

/*$(function(){
    $("#Hide").click(function(){
        $("h1").toggleClass("red");
    });
});
*/