
         $('.tabs').tabs(); 
         // date picker
          $(document).ready(function(){
          $('.datepicker').datepicker();
         });


          


    // for person


         $("#adultPlusBtn").on('click', function() {
            $("#adultNumber").html(parseInt($('#adultNumber').html(), 10)+1);
            $(".adNos").html(parseInt($('.adNos').html(), 10)+1);
         });
         $("#adultMinusBtn").on('click', function() {
            $("#adultNumber").html(parseInt($('#adultNumber').html(), 10)-1);
            $(".adNos").html(parseInt($('.adNos').html(), 10)-1)
         });
         
         
         $("#childPlusBtn").on('click', function() {
            $("#childNumber").html(parseInt($('#childNumber').html(), 10)+1);
            $(".chdNos").html(parseInt($('.chdNos').html(), 10)+1);
         });
         $("#childMinusBtn").on('click', function() {
            $("#childNumber").html(parseInt($('#childNumber').html(), 10)-1);
            $(".chdNos").html(parseInt($('.chdNos').html(), 10)-1)
         });
         
         $('.quanBtn').on('click',function() {
          $('.person-boxdate').show();
         
         });
         $('.done-traveller').on('click',function(){
           $('.person-boxdate').hide();
         });


         // for number of Packages
         $("#pakgPlusBtn").on('click', function() {
            $("#pakgNumber").html(parseInt($('#pakgNumber').html(), 10)+1);
           
         });
         $("#pakgMinusBtn").on('click', function() {
            $("#pakgNumber").html(parseInt($('#pakgNumber').html(), 10)-1);
            
         });
         
      
// WIZARD SCRIPT

           jQuery(document).ready(function() {
  // click on next button
  jQuery('.form-wizard-next-btn').click(function() {
    $('.back-to-search').addClass('abc');
    $(".last-previous").click(function(){
       $('.back-to-search').removeClass('abc');
    });
    var parentFieldset = jQuery(this).parents('.wizard-fieldset');
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    var next = jQuery(this);
    var nextWizardStep = true;
    parentFieldset.find('.wizard-required').each(function(){
      var thisValue = jQuery(this).val();

      if( thisValue == "") {
        jQuery(this).siblings(".wizard-form-error").slideDown();
        nextWizardStep = false;
      }
      else {
        jQuery(this).siblings(".wizard-form-error").slideUp();
      }
    });
    if( nextWizardStep) {
      next.parents('.wizard-fieldset').removeClass("show","400");
      currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
      next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
      jQuery(document).find('.wizard-fieldset').each(function(){
        if(jQuery(this).hasClass('show')){
          var formAtrr = jQuery(this).attr('data-tab-content');
          jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
            if(jQuery(this).attr('data-attr') == formAtrr){
              jQuery(this).addClass('active');
              var innerWidth = jQuery(this).innerWidth();
              var position = jQuery(this).position();
              jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
            }else{
              jQuery(this).removeClass('active');
            }
          });
        }
      });
    }
  });
  //click on previous button
  jQuery('.form-wizard-previous-btn').click(function() {
    var counter = parseInt(jQuery(".wizard-counter").text());;
    var prev =jQuery(this);
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    prev.parents('.wizard-fieldset').removeClass("show","400");
    prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
    currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
    jQuery(document).find('.wizard-fieldset').each(function(){
      if(jQuery(this).hasClass('show')){
        var formAtrr = jQuery(this).attr('data-tab-content');
        jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
          if(jQuery(this).attr('data-attr') == formAtrr){
            jQuery(this).addClass('active');
            var innerWidth = jQuery(this).innerWidth();
            var position = jQuery(this).position();
            jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
          }else{
            jQuery(this).removeClass('active');
          }
        });
      }
    });
  });
  //click on form submit button
  jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
    var parentFieldset = jQuery(this).parents('.wizard-fieldset');
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    parentFieldset.find('.wizard-required').each(function() {
      var thisValue = jQuery(this).val();
      if( thisValue == "" ) {
        jQuery(this).siblings(".wizard-form-error").slideDown();
      }
      else {
        jQuery(this).siblings(".wizard-form-error").slideUp();
      }
    });
  });
  // focus on input field check empty or not
  jQuery(".form-control").on('focus', function(){
    var tmpThis = jQuery(this).val();
    if(tmpThis == '' ) {
      jQuery(this).parent().addClass("focus-input");
    }
    else if(tmpThis !='' ){
      jQuery(this).parent().addClass("focus-input");
    }
  }).on('blur', function(){
    var tmpThis = jQuery(this).val();
    if(tmpThis == '' ) {
      jQuery(this).parent().removeClass("focus-input");
      jQuery(this).siblings('.wizard-form-error').slideDown("3000");
    }
    else if(tmpThis !='' ){
      jQuery(this).parent().addClass("focus-input");
      jQuery(this).siblings('.wizard-form-error').slideUp("3000");
    }
  });
});


// slide up and down need visa

// $('.apply-visa').on('click',function(e) {
//            $('.whole-apply-visa').slideDown();
//            $('.need-visa').slideUp();
          
//          });
// $('.back-button').on('click',function(e) {
//            $('.whole-apply-visa').slideUp();
//            $('.need-visa').slideDown();
          
//          });
// Additional detail textarea

$('.add-strong').click(function(){
  $('.additional-form').toggle("slow");
});

// add css class to parent radio button
$(document).ready(function() {
      $('input:radio[name="group1"]').click(function(){
                 $('.checkbox-div li').removeClass('border-dark');
                 if($(this).is(":checked")) {
                    $(this).parent().parent().parent().addClass('border-dark');    
                } 
                else {
                    $(this).parent().parent().parent().removeClass('border-dark');
                }
            });
        
        });


// Traveller personal detail select dropdown
// $(document).ready(function () {

//         $("#travellerDropDown").change(function (event) {
//            $('.person-detail').removeClass('activeSelect');
//             valDropdown  = $(this).val();
            
//             $("#" +valDropdown).addClass('activeSelect');
            
//         });
//     });

// Payment method select dropown
$(document).ready(function () {

        $("#myDropDown").change(function (event) {
           $('.select-detail').removeClass('activeSelect');
            valDropdown  = $(this).val();
            
            $("#" +valDropdown).addClass('activeSelect');
            
        });
    });

// date range calender
          // $('input[name="dates"]').daterangepicker();


          // for number of Vehicle
         // $("#vehiclePlusBtn").on('click', function() {
         //    $("#vehicleNumber").html(parseInt($('#vehicleNumber').html(), 10)+1);
           
         // });
         // $("#vehicleMinusBtn").on('click', function() {
         //    $("#vehicleNumber").html(parseInt($('#vehicleNumber').html(), 10)-1);
            
         // });

          // for number of Vehicle
         // $("#vehicle-quantityPlusBtn").on('click', function() {
         //    $("#vehicle-quantityNumber").html(parseInt($('#vehicle-quantityNumber').html(), 10)+1);
           
         // });
         // $("#vehicle-quantityMinusBtn").on('click', function() {
         //    $("#vehicle-quantityNumber").html(parseInt($('#vehicle-quantityNumber').html(), 10)-1);
            
         // });

// hotel detail slide dowm
        //   $('.detail-hotel-div').on('click' , function(){
        //   $('#makkah-hotel-detail').slideDown();
        //   $('.step-2-build').slideUp('');
        // });

        //   // hotel detail slide dowm
        //   $('.detail-hotel-div-md').on('click' , function(){
        //   $('#madinah-hotel-detail').slideDown();
        //   $('.step-2-build-ma').slideUp('');
        // });
     

