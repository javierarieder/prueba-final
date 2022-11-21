$(document).ready(function(){
    var ir_a = $(".nav-link");

    ir_a.click(function(evento){
        evento.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top,
        }, 2000);
    })
})

$(window).scroll(function() {
    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});

$( "#Enviar" ).click(function() {
    alert( "El mensaje fue enviado correctamente..." );
  });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

