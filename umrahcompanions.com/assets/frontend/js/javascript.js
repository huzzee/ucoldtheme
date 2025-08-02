
   // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });



  var onModalHide = function() {
    alert("Modal closed!");
};

  


//=========Mobile side header============ 

   $(document).ready(function(){
$(".dropdown-trigger").dropdown();
});

   $(document).ready(function(){
      $('.sidenav').sidenav();
   });
        

$(document).ready(function() {
  $(".droptrigger").click(function() {
    $(this).next('.dropcontent').toggleClass('open', 100);
  })
  
});