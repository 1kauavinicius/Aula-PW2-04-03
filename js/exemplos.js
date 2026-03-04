//função do botão esconder
//hide esconder
$("#esconder").click(function() {
$("#teste1").hide();
});

//função do botão mostrar
//show aparecer
$("#mostrar").click(function() {
$("#teste1").show();
});


//-----------------------------------------------------
$("#alterarCSS").click(function() {
$("#teste2").css({
"background-color" : "#f00",
"font-size" : "200%",
"color" : "white" ,
"font-weigth" : "bold"
});
});

//-----------------------------------------------------
$("#alterarClass").click(function() {
$("#teste3").removeClass("alert-success").addClass("alert-primary");
$("#alterarClass").removeClass("btn-success").addClass("btn-primary");

});

//-----------------------------------------------------
$("#alternar1").hide();

$("#alternar2").click(function () {
    $("#link").attr({
        "href" : "https://etecitu.cps.sp.gov.br",
        "title" : "Etec Itu"
    });

    $("#link").text("Etec");
    $("#alternar2").hide();
    $("#alternar1").show();
});

$("#alternar1").click(function () {
    $("#link").attr({
        "href" : "https://www.cps.sp.gov.br",
        "title" : "Centro Paula Souza"
    });

    $("#link").text("CPS");
    $("#alternar1").hide();
    $("#alternar2").show();
});






