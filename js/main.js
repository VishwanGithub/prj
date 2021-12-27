jQuery(document).ready(function(){
    
    "use strict"
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
        
    });
    
  
    
   var typed = new Typed('.text', {
        strings: ["welcome.","Welocme <strong class ='primary'>Perks!..</strong>"],
        typeSpeed:30,
       backSpeed:20,
        loop:true
        
        });
    
    $(window).scroll(function(){
        
        var top=$(window).scrollTop();
        if(top>=60){
                $("nav").addClass('secondary');
            }else
               if($("nav").hasClass('secondary')){
                   $("nav").removeClass('secondary');
               }
        
    });
    
    $('.work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled :true
    }
    });
    
    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartspeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            }
        }
    });
    $('a').smoothScroll();
    
    
    
    
    
    
    
});