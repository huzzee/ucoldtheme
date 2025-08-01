 //-----JS for Price Range slider-----
         
         $(function() {

          var selectedVal = $("#selectRoutsS option:selected").val();
          var uid = $("#selectRoutsS option:selected").data('id');
          $('.routeVal').html('').append('Route#'+selectedVal);

          $("#selectRoutsS").change(function(e) {
            var selectedVal = $("#selectRoutsS option:selected").val();
            var uid = $("#selectRoutsS option:selected").data('id');
            $('.routeVal').html('').append('Route#'+selectedVal);
            $('.rouSt .select-wrapper input').val(selectedVal);
            //console.log(selectedVal);
            $('.rouSt').addClass('onS');
            $(".routNameShow li").removeClass('activeRoute');
            $(".routNameShow li#"+uid).addClass('activeRoute');
          });

          var max_amount = $('#amount2').val();
            $( "#slider-range" ).slider({
               range: true,
               min: 0,
               max: max_amount,
               values: [ 0, max_amount ],
               slide: function( event, ui ) {
                  $( "#amount" ).html( "<span>" + ui.values[ 0 ] + "</span>"  + "<span>" + ui.values[ 1 ] + "</span>" );
                  $( "#amount1" ).val(ui.values[ 0 ]);
                  $( "#amount2" ).val(ui.values[ 1 ]);
               }
            });
            $( "#amount" ).html( "<span>" + $( "#slider-range" ).slider( "values", 0 ) + "</span>"  + "<span>" + $( "#slider-range" ).slider( "values", 1 ) )+"</span>";
         });
         
         
         $(".drop-down-btn").click(function(){
  $(".inner-form").toggle();
});



//hotel list


$('.boxhotelInput').on('click',function(){
    $('.hotelb').slideDown();
});
    


    $(".boxhotelInput").keyup(function() {
      ///var toDate = $('.toDate');
      if ($(".boxhotelInput").val().length > 0) {
        // toDate.slideDown();
        $('.hto-lst-location').slideDown();
        $('.hotel-empty-state').slideUp();
      } else {
        //toDate.slideUp();
        $('.hto-lst-location').slideUp();
        $('.hotel-empty-state').slideDown();
      }
    });


    $('.hotel-searchlst li').each(function(x,y){
        $(y).on('click',function(){
            $('.boxhotelInput').val();
            // $('.hotelione').val();
            $('.hotelb').slideUp();
            loch = $(y).attr('data-name');
            $('.boxhotelInput').val(loch);
            // $('.hotelione').val(loch);
        });
    });

    $('.hotelione').on('click',function(){
        $('.hotel-empty-state').slideUp();
        $('.hto-lst-location').slideDown();

    });

    $('.hcloseDropTo').on('click',function(){
     
      $('.hotelb').slideUp();
  });
         
         
            
// SCRIPT FOR DROPOFF LOCATION



$('.boxhotelInput2').on('click',function(){
    $('.hotelc').slideDown();
});
    

    $(".boxhotelInput2").keyup(function() {
      ///var toDate = $('.toDate');
      if ($(".boxhotelInput2").val().length > 0) {
        // toDate.slideDown();
        $('.hto-lst-location2').slideDown();
        $('.hotel-empty-state2').slideUp();
      } else {
        //toDate.slideUp();
        $('.hto-lst-location2').slideUp();
        $('.hotel-empty-state2').slideDown();
      }
    });


    $('.hotel-searchlst2 li').each(function(x,y){
        $(y).on('click',function(){
            $('.boxhotelInput2').val();
            // $('.hotelione').val();
            $('.hotelc').slideUp();
            loch = $(y).attr('data-name');
            $('.boxhotelInput2').val(loch);
            // $('.hotelione').val(loch);
        });
    });

    $('.hotelione2').on('click',function(){
        $('.hotel-empty-state2').slideUp();
        $('.hto-lst-location2').slideDown();

    });

    $('.hcloseDropTo2').on('click',function(){
      $('.hotelc').slideUp();
    });


    //need flight to passenger click
    $('.spnrlp').on('click',function(){
        $('.person-boxdatelp').slideToggle();
    });

    $('.donelp').on('click',function(){
         $('.person-boxdatelp').slideUp();
    });

    $("#adulPlusBtnland").on('click', function() {
         $("#adultNossland").val(parseInt($('#adultNossland').val(), 10)+1);
         $("#pslp").val(parseInt($('#pslp').val(), 10)+1);
      });
    $("#adulMinusBtnland").on('click', function() {
         $("#adultNossland").val(parseInt($('#adultNossland').val(), 10)-1);
         $("#pslp").val(parseInt($('#pslp').val(), 10)-1)
    });


    $("#childPlusBtnland").on('click', function() {
         $("#childNossland").val(parseInt($('#childNossland').val(), 10)+1);
         //$("#pslp").val(parseInt($('#pslp').val(), 10)+1);
      });
    $("#childMinusBtnland").on('click', function() {
         $("#childNossland").val(parseInt($('#childNossland').val(), 10)-1);
         //$("#pslp").val(parseInt($('#pslp').val(), 10)-1)
    });
         
    //need flight to passenger click end