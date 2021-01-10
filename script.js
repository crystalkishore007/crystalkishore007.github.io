$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 30){
            $('.navbar').addClass("navbarf");
        }else{
            $('.navbar').removeClass("navbarf");
        }
   });
   var typed = new Typed(".typing", {
       strings: ["Web Developer", "Blogger", "Designer"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
   });

   var typed = new Typed(".typing-2", {
       strings: ["Web Developer", "Blogger", "Designer"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
   });

 });
