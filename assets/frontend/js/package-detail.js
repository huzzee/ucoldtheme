        setTimeout(function(){
         $('.tabs').tabs();

         $('.dropify').dropify({
           messages: {
             'default': 'Drag and drop a file here of Click to upload',
             'replace': 'Drag and drop a file here of Click to replace',
             'remove':  'Remove',
             'error':   'Ooops, something wrong happended.'
           }
         });

         // date picker
          $(document).ready(function(){
          $('.datepicker').datepicker();
         });
        },1000)

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

$('.apply-visa').on('click',function(e) {
           $('.whole-apply-visa').slideDown();
           $('.need-visa').slideUp();
          
         });
$('.back-button').on('click',function(e) {
           $('.whole-apply-visa').slideUp();
           $('.need-visa').slideDown();
          
         });
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
$(document).ready(function () {

        $("#travellerDropDown").change(function (event) {
           $('.person-detail').removeClass('activeSelect');
            valDropdown  = $(this).val();
            
            $("#" +valDropdown).addClass('activeSelect');
            
        });
    });

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
         $("#vehiclePlusBtn").on('click', function() {
            $("#vehicleNumber").html(parseInt($('#vehicleNumber').html(), 10)+1);
           
         });
         $("#vehicleMinusBtn").on('click', function() {
            $("#vehicleNumber").html(parseInt($('#vehicleNumber').html(), 10)-1);
            
         });

          // for number of Vehicle
         $("#vehicle-quantityPlusBtn").on('click', function() {
            $("#vehicle-quantityNumber").html(parseInt($('#vehicle-quantityNumber').html(), 10)+1);
           
         });
         $("#vehicle-quantityMinusBtn").on('click', function() {
            $("#vehicle-quantityNumber").html(parseInt($('#vehicle-quantityNumber').html(), 10)-1);
            
         });

// hotel detail slide dowm
          $('.detail-hotel-div').on('click' , function(){
          $('#makkah-hotel-detail').slideDown();
          $('.step-2-build').slideUp('');
        });

          // hotel detail slide dowm
          $('.detail-hotel-div-md').on('click' , function(){
          $('#madinah-hotel-detail').slideDown();
          $('.step-2-build-ma').slideUp('');
        });

//////////////
function OpenloginModal(){
  $('.view-sticky-form').toggleClass('activeS');
  $ ('.overlay-search-form').addClass('active-overlay-form');
}

$("#TravelInformation").validate({
  ignore: [],
  rules: {
      'name[]': {
        required: true,
      },
      
      'passport_no[]': {
        required: true,
        number:true,
      },
      'nationality[]': {
        required: true,
      },
      'nic_no[]': {
        required: true,
      },
      'passport_scanned_document[]': {
        required: true,
      },
      'passport_size_photo[]': {
        required: true,
      },
  },
  errorElement : 'span',
});

$("#AdditionalInformation").validate({
  rules: {
    'additional_detail': {
      required: true,
    }
  },
  errorElement : 'span',
});

function TravelInformationfn(){
    var form = $("#TravelInformation");
    if(form.valid()){
        $('.TravelInformation').addClass('m-loader m-loader--light m-loader--right').attr('disabled',true);
        $('#TravelInformation').submit();
    }else{
      $('.apply-visa').trigger('click');
    }
}

function SaveAdditionalDetail(){
  var form = $("#AdditionalInformation");
  console.log(form);
  if(form.valid()){
    var url = $('#AdditionalInformation').attr('action');
    $.ajax({
        url:url,
        type:'POST',
        success:function(data){
            $('.ResendMail').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
            $.toast().reset('all');   
            $("body").removeAttr('class');
            $.toast({
                heading: 'Success',
                text: 'Email Has Been Send',
                icon: 'success',
                position: 'top-right',
                loaderBg:'#1b3a6d',
                class: 'jq-has-icon jq-toast-success',
                hideAfter: 3500, 
                stack: 6,
                showHideTransition: 'slide'
            });
        },
        error: function (data) {
            $.toast().reset('all');   
            $("body").removeAttr('class');
            $.toast({
                heading: 'Error',
                text: 'Something went Wrong',
                icon: 'error',
                position: 'top-right',
                loaderBg:'#7a5449',
                class: 'jq-has-icon jq-toast-danger',
                hideAfter: 3500, 
                stack: 6,
                showHideTransition: 'slide'
            });
            $('.RegisterMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
        }
    });
  }
}

/* Register Function */
    function SaveAdditionalDetail(){
      var form = $("#AdditionalInformation");

      if(form.valid()){
        $(document).ready(function(){
          $('.AddDetailMbtnSubmit').addClass('m-loader m-loader--light m-loader--right').attr('disabled',true);

          setTimeout(()=>{
            var registerForm = form;
            var formData = registerForm.serialize();
            var url = $('#AdditionalInformation').attr('action');
            $.ajax({
              url:url,
              type:'POST',
              data:formData,
              success:function(data){
                $.toast().reset('all');   
                $("body").removeAttr('class');
                $.toast({
                  heading: 'Success',
                  text: 'Additional Detail Save',
                  icon: 'success',
                  position: 'top-right',
                  loaderBg:'#1b3a6d',
                  class: 'jq-has-icon jq-toast-success',
                  hideAfter: 3500, 
                  stack: 6,
                  showHideTransition: 'slide'
                });

                $('.AddDetailMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
              },
              error: function (data) {
                  $.toast().reset('all');   
                  $("body").removeAttr('class');
                  var error = '';
                  var i = 1;
                  $('.invalid-feedback').html('');
                  $.each(data.responseJSON.errors,function(index,value){
                      $('#'+index+'-error').html('<strong>'+value[0]+'</strong>');
                      error = error+' '+i+' : '+value[0]+'<br/>';
                      i = i+1;
                  });
                  $.toast({
                      heading: 'Error',
                      text: error,
                      icon: 'error',
                      position: 'top-right',
                      loaderBg:'#7a5449',
                      class: 'jq-has-icon jq-toast-danger',
                      hideAfter: 9900, 
                      stack: 6,
                      showHideTransition: 'slide'
                  });
                  $('.AddDetailMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
              }
            })
          },1000)
        });

      }

        

        
        //     $(document).ready(function(){

        //         

        //         setTimeout(()=>{
        //             var registerForm = form;
        //             var formData = registerForm.serialize();
        //             var url = '{{ url('front/register') }}';

        //             $.ajax({
        //                 url:url,
        //                 type:'POST',
        //                 data:formData,
        //                 success:function(data){
        //                     $('.RegisterMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
        //                     $('.signWRaps2').slideDown();
        //                     $('.account-done').slideDown();
        //                     $('.signWRaps').slideUp();
        //                     $('#fundaiqRegDv').slideUp();
        //                     $('#travelAgentText').slideUp();
        //                     $('#umrahRegDv').slideUp();
        //                     $('#umrahIndiText').slideUp();
        //                     $('#ResgisterUmrah').slideUp();
        //                     $('.form-button1Slide').slideUp();

        //                     $('.signWRaps2 .main-heading').html('Hi '+data.name+'! <span class="lightHeading">Check your email to activate your account</span>');
        //                     $('.signWRaps2 .textSuccess').html('<p>We just sent a link to <a href="#" class="emailAdd">'+data.email+'.</a> Didn’t receive the email?</p><a href="javascript:void(0)" class="btn waves-effect waves-light h-btn-done viewBtn ResendMail" data-user_id="'+data.id+'" onclick="resendmail('+data.id+')">Resend</a>');

        //                     $('.account-done .main-heading').html('Hi '+data.name+'! <span class="lightHeading">Check your email to activate your account</span>');
        //                     $('.account-done .textSuccess').html('<p>We just sent a link to <a href="#" class="emailAdd">'+data.email+'.</a> Didn’t receive the email?</p><a href="javascript:void(0)" class="btn waves-effect waves-light h-btn-done viewBtn ResendMail" data-user_id="'+data.id+'" onclick="resendmail('+data.id+')">Resend</a>');
                            
        //                     $('.modal-close').attr('data-refresh',true);
        //                     $('.closeIcon2').attr('data-refresh',true);
        //                 },
        //                 error: function (data) {
        //                     $.toast().reset('all');   
        //                     $("body").removeAttr('class');
        //                     var error = '';
        //                     var i = 1;
        //                     $('.invalid-feedback').html('');
        //                     $.each(data.responseJSON.errors,function(index,value){
        //                         $('#'+index+'-error').html('<strong>'+value[0]+'</strong>');
        //                         error = error+' '+i+' : '+value[0]+'<br/>';
        //                         i = i+1;
        //                     });
        //                     $.toast({
        //                         heading: 'Error',
        //                         text: error,
        //                         icon: 'error',
        //                         position: 'top-right',
        //                         loaderBg:'#7a5449',
        //                         class: 'jq-has-icon jq-toast-danger',
        //                         hideAfter: 9900, 
        //                         stack: 6,
        //                         showHideTransition: 'slide'
        //                     });
        //                     $('.RegisterMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
        //                 }
        //             });

        //         },2000);

        //     })
        // }
    }
/* Register Function */
