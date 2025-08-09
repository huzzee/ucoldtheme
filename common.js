  $(document).ready(function(e){
    var properties = {
      "email": "bilal@webnet.com.pk",
      "FIRSTNAME": "Bilal",
      "LASTNAME": "Danny",
    }
    var track_event = {
      "id": "cart:1234",
      "data": {
          "total": 280,
          "currency": "USD",
          "url": "www.example.com",
          "items": [{
              "name": "Black shoes",
              "price": 90,
              "quantity": 2,
              "url": "www.example.com/black-shoes",
              "image": "www.example.com/black-shoes.jpg"
          }, {
              "name": "White shirt",
              "price": 100,
              "quantity": 1,
              "url": "www.example.com/shirt",
              "image": "www.example.com/shirt.jpg"
          }]
      }
    }
    sendinblue.track("brower_close", properties, track_event);
    // sendinblue.identify('Browser Close');
  })
  $(document).ready(function(){
          if(window.location.hash === '#modalpassword') {
            setTimeout(()=>{
              $('#modalpassword').modal('open');
            },1000);
          }
        });

         $('.changecurrency').change(function(){
           var currency = $(this).val();
           var html = `<input type="hidden" name="currency" value="`+currency+`" />`;
           $('#currency-form').append(html);
           $('#currency-form').submit();
         })

    //select script

     $(document).ready(function(){
    $('select').formSelect();

    $("#loginform").validate({
      rules: {
        email: {
          required: true,
          email:true,
        },
        password: {
          required: true,
        }
      },
      errorElement : 'span',
    });

    $("#Detailloginform").validate({
      rules: {
        email: {
          required: true,
          email:true,
        },
        password: {
          required: true,
        }
      },
      errorElement : 'span',
    });

    $("#resetform").validate({
      rules: {
        email: {
          required: true,
          email:true,
        },
        whatsapp_no: {
          required: true,
          number:true,
        },
      },
      errorElement : 'span',
    });

    $("#UCRegisterForm").validate({
        rules: {
            name: {
              required: true,
            },
            email: {
              required: true,
              email:true,
            },
            password: {
              required: true,
              minlength: 8
            },
            password_confirm: {
              required: true,
              minlength: 8
            },
            contact_no: {
              required: true,
              number:true,
            },
        },
        errorElement : 'span',
    });

    $("#FNRegisterForm").validate({
        rules: {
            name: {
              required: true,
            },
            email: {
              required: true,
              email:true,
            },
            password: {
              required: true,
              minlength: 8
            },
            password_confirm: {
              required: true,
              minlength: 8
            },
            contact_no: {
              required: true,
              number:true,
            },
        },
        errorElement : 'span',
    });

    $("#DetailUCRegisterForm").validate({
        rules: {
            name: {
              required: true,
            },
            email: {
              required: true,
              email:true,
            },
            password: {
              required: true,
              minlength: 8
            },
            password_confirm: {
              required: true,
              minlength: 8
            },
            contact_no: {
              required: true,
              number:true,
            },
        },
        errorElement : 'span',
    });

    $("#DetailFNRegisterForm").validate({
        rules: {
            name: {
              required: true,
            },
            email: {
              required: true,
              email:true,
            },
            password: {
              required: true,
              minlength: 8
            },
            password_confirm: {
              required: true,
              minlength: 8
            },
            contact_no: {
              required: true,
              number:true,
            },
        },
        errorElement : 'span',
    });

  });
       // Sticky Inner pages header

       $(window).scroll(function(){
          var sticky = $('.sticky'),
          scrolla = $(window).scrollTop();

          if (scrolla >= 100) sticky.addClass('fixed');
          else sticky.removeClass('fixed');
      });



         // Timer code
       //   var endDate = "2021/12/30 17:13:40";
       //   $('.countdown.simple').countdown(endDate)
       //   .on('update.countdown', function(event) {
       //     var format = '%Hh:%Mm:%Ss';
       //     if(event.offset.totalDays > 0) {
       //         format = '%-dday%!d ' + format;
       //     }
       //     if(event.offset.weeks > 0) {
       //         format = '%-wweek%!w ' + format;
       //     }
       //     $(this).html(event.strftime(format));
       // })
       //   .on('finish.countdown', function(event) {
       //     location.reload();
       // });
         
         
         
         // sticky Latest Deal Button 
         $(document).on('click','.view-btn',function(){
           $('.view-sticky-button').toggleClass('activeS');
         // var box=$(this).parent().find('.sticky-form');
         $ ('.overlay-search-2').addClass('active-overlay-2');
         // $ ('.sticky-form').css('transform','translate3d(0px, 0px, 0px)');
         // if(!box.is(':visible')){box.fadeIn(300)}
     });
         
         
         $(document).on('click','.active-overlay-2',function(){
           $('.view-sticky-button').removeClass('activeS');
           $(this).removeClass('active-overlay-2');
       });
         
         $(document).on('click','.closeIcon',function(){
           $('.view-sticky-button').removeClass('activeS');
           $(this).removeClass('active-overlay-2');
       });
         
         
         $(document).on('click', '.view-sticky-button.activeS', function() {
           $('.active-overlay-2').removeClass('active-overlay-2');
       });   



// LOGIN MODALS
 
            //popup modals
             document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.modal');
               // var instances = M.Modal.init(elems, options);
              });

              // Or with jQuery

              //login register modal
              $(document).ready(function(){
                    $('#prfInput').on('click',function() {
                        $('.proflmg').slideToggle();
                    });
                    $('.modal').modal();
                    $('#modalRegister').modal({
                      dismissible: false, // Modal can be dismissed by clicking outside of the modal
                    });
                    $('.modal select').formSelect();
                    
                    /* Phone 3 */
                        var input = document.querySelector("#phone3");
                        var instance = window.intlTelInput(input, {
                            separateDialCode: true,
                            initialCountry: "auto",
                            geoIpLookup: function(success, failure) {
                                $.get("https://ipinfo.io/", function() {}, "jsonp").always(function(resp) {
                                    var countryCode = (resp && resp.country) ? resp.country : "us";
                                    success(countryCode);
                                });
                            },
                        });
                        var countryData = instance.getSelectedCountryData();
                        $('.country_code').val(countryData.dialCode);
                        input.addEventListener("countrychange",function() {
                            var countryData = instance.getSelectedCountryData();
                            $('.country_code').val(countryData.dialCode);
                        });
                    /* Phone 3 */

                    var input = document.querySelector("#phone4");
                    var instance = window.intlTelInput(input, {
                        separateDialCode: true,
                        initialCountry: "auto",
                        geoIpLookup: function(success, failure) {
                            $.get("https://ipinfo.io/", function() {}, "jsonp").always(function(resp) {
                                var countryCode = (resp && resp.country) ? resp.country : "us";
                                success(countryCode);
                            });
                        },
                    });
                    var countryData = instance.getSelectedCountryData();
                    $('.country_code').val(countryData.dialCode);
                    input.addEventListener("countrychange",function() {
                        var countryData = instance.getSelectedCountryData();
                        $('.country_code').val(countryData.dialCode);
                    });
                     
                     

                    //hide and show login and register modals on click
                    $('#rg-btn').on('click',function(e) {
                        event.preventDefault();
                        $('#modalLogin').modal('close');
                        $('#modalRegister').modal('open');
                        $('.ProfileSelect').val('');
                        $('.createForm').slideDown();
                        $('.ProfileSelect').formSelect();
                    });
                    $('.loginMbtn').on('click',function(e) {
                        event.preventDefault();
                        $('#modalLogin').modal('open');
                        $('#modalRegister').modal('close');   
                        $('.profileInput').slideDown();
                        $('.proflmg').slideUp();
                        $('#fundaiqRegDv').slideUp();
                        $('#travelAgentText').slideUp();
                        $('#umrahRegDv').slideUp();
                        $('#umrahIndiText').slideUp();
                        $('.ProfileSelect').val('');
                        $('.ProfileSelect').formSelect();
                    });

                    $('.registerBtn').on('click',function(e) {
                        event.preventDefault();
                        $('.ProfileSelect').val('');
                        $('.createForm').slideDown();
                        $('.ProfileSelect').formSelect();
                    });
                    $('#forgotModalbtn').on('click',function() {
                        $('.formSuccess').slideUp();
                        $('#modalpassword').modal('open');
                        $('#modalLogin').modal('close');
                        $('.resetDv').show();
                    })

                    //user register profile selection image map
                   $('.proflmg map area').on('click',function(e) {
                        event.preventDefault();
                        areaDv = $(this).attr('data-map');
                        $('.profileInput').slideUp();
                        if(areaDv == 'umrah') {
                           $('#fundaiqRegDv').slideUp();
                           $('#travelAgentText').slideUp();
                           $('#umrahRegDv').slideDown();
                           $('#umrahIndiText').slideDown();
                        }
                        else {
                           $('#fundaiqRegDv').slideDown();
                           $('#travelAgentText').slideDown();
                           $('#umrahRegDv').slideUp();
                           $('#umrahIndiText').slideUp();
                        }                        
                   });

                   $('.ProfileSelect').on('change',function(e){
                    event.preventDefault();
                    var areaDv = $(this).val();
                    if(areaDv == 'umrah') {
                      $('#fundaiqRegDv').slideUp();
                      $('#travelAgentText').slideUp();
                      $('#umrahRegDv').slideDown();
                      $('#umrahIndiText').slideDown();
                    }else {
                      $('#fundaiqRegDv').slideDown();
                      $('#travelAgentText').slideDown();
                      $('#umrahRegDv').slideUp();
                      $('#umrahIndiText').slideUp();
                    }
                    $('.createForm').slideUp();  
                   })

                //forgot password send btn on modal
                // $('.sendmbtn').on('click',function(e) {
                //         event.preventDefault();
                //         $('.resetDv').slideUp();
                //         $('.formSuccess').slideDown();
                // });
                // Check your email to activate your account
               // $('.createbtn').on('click',function(e) {
               //     event.preventDefault();
               //  $('.signWRaps2').slideDown();
               //  $('.signWRaps').slideUp();
               //  $('#fundaiqRegDv').slideUp();
               //  $('#travelAgentText').slideUp();
               //  $('#umrahRegDv').slideUp();
               //  $('#umrahIndiText').slideUp();

               // });

               // resgister slides up on the click of close button 
                $('.modal-close').on('click',function(e) {

                    if($(this).attr('data-refresh') === undefined || $(this).attr('data-refresh') === false){
                        event.preventDefault();
                        $('.signWRaps2').slideUp();
                        $('.signWRaps').slideDown();
                        $('.profileInput').slideDown();
                        $('#fundaiqRegDv').slideUp();
                        $('#travelAgentText').slideUp();
                        $('#umrahRegDv').slideUp();
                        $('#umrahIndiText').slideUp();
                    }else{
                        window.location.reload();
                    }
                    
                });
              });
         //register modal


/* Login Function */
    function login(){

        var form = $("#loginform");

        if(form.valid()){
            $(document).ready(function(){

                $('.loginMbtnSubmit').addClass('m-loader m-loader--light m-loader--right').attr('disabled',true);

                setTimeout(()=>{
                    var loginForm = $("#loginform");
                    var formData = loginForm.serialize();
                    var url = 'login.html';

                    $.ajax({
                        url:url,
                        type:'POST',
                        data:formData,
                        success:function(data){
                          if(data === 'message'){
                            $.toast({
                              heading: 'Success',
                              text: 'Password Reset Email Has Been Send',
                              icon: 'success',
                              position: 'top-right',
                              loaderBg:'#22bb33',
                              class: 'jq-has-icon jq-toast-success',
                              hideAfter: 3500, 
                              stack: 6,
                              showHideTransition: 'slide'
                            });
                            setTimeout(()=>{
                              location.reload();
                            },3500);

                          }else if(data.errormessage){
                            $.toast().reset('all');   
                            $("body").removeAttr('class');
                            $.toast({
                              heading: 'Error',
                              text: data.errormessage,
                              icon: 'error',
                              position: 'top-right',
                              loaderBg:'#7a5449',
                              class: 'jq-has-icon jq-toast-danger',
                              hideAfter: 3500, 
                              stack: 6,
                              showHideTransition: 'slide'
                            });
                          }else{
                            location.reload();
                          }
                          
                          $('.loginMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                        },
                        error: function (data) {
                            $.toast().reset('all');   
                            $("body").removeAttr('class');
                            $.toast({
                              heading: 'Error',
                              text: 'These credentials do not match our records.',
                              icon: 'error',
                              position: 'top-right',
                              loaderBg:'#7a5449',
                              class: 'jq-has-icon jq-toast-danger',
                              hideAfter: 3500, 
                              stack: 6,
                              showHideTransition: 'slide'
                            });
                            $('.loginMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                        }
                    });

                },2000);

            })
        }
    }
/* Login Function */


/* Login Function */
    function login1(){

        var form = $("#Detailloginform");

        if(form.valid()){
            $(document).ready(function(){

                $('.loginMbtnSubmit').addClass('m-loader m-loader--light m-loader--right').attr('disabled',true);

                setTimeout(()=>{
                    var loginForm = $("#Detailloginform");
                    var formData = loginForm.serialize();
                    var url = 'login.html';

                    $.ajax({
                        url:url,
                        type:'POST',
                        data:formData,
                        success:function(data){
                            location.reload();
                            $('.loginMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                        },
                        error: function (data) {
                            $.toast().reset('all');   
                            $("body").removeAttr('class');
                            $.toast({
                                heading: 'Error',
                                text: 'These credentials do not match our records.',
                                icon: 'error',
                                position: 'top-right',
                                loaderBg:'#7a5449',
                                class: 'jq-has-icon jq-toast-danger',
                                hideAfter: 3500, 
                                stack: 6,
                                showHideTransition: 'slide'
                            });
                            $('.loginMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                        }
                    });

                },2000);

            })
        }
    }
/* Login Function */

$(document).on('change','.ResetRadioBtn',function(e){
  if($(e.target).val() == 'whatsapp'){
    $('.InputEmail').fadeOut(200);
    $('.InputWhatsapp').fadeIn(200);
  }else{
    $('.InputEmail').fadeIn(200);
    $('.InputWhatsapp').fadeOut(200);
  }
})

/* Password Reset Function */
    function passreset(){

        var form = $("#resetform");

        // $('.resetDv').slideUp();
        // $('.formSuccess').slideDown();

        if(form.valid()){
            $('.sendmbtn').addClass('m-loader m-loader--light m-loader--right').attr('disabled',true);

            var loginForm = $("#resetform");
            var formData = loginForm.serialize();
            var url = 'forget-password.html';

            $.ajax({
                url:url,
                type:'POST',
                data:formData,
                success:function(data){
                  if(data.errormessage){
                    $('.sendmbtn').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                    $.toast().reset('all');   
                    $("body").removeAttr('class');
                    $.toast({
                      heading: 'Error',
                      text: data.errormessage,
                      icon: 'error',
                      position: 'top-right',
                      loaderBg:'#7a5449',
                      class: 'jq-has-icon jq-toast-danger',
                      hideAfter: 3500, 
                      stack: 6,
                      showHideTransition: 'slide'
                    });
                  }else{
                    if(data.data*1 == 1)
                  {
                    $('.sendmbtn').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                    $('.resetDv').slideUp();
                    $('.formSuccess').slideDown();
                  }
                  else{
                    $('.sendmbtn').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                    $.toast().reset('all');   
                    $("body").removeAttr('class');
                    $.toast({
                      heading: 'Error',
                      text: 'Something Went Wrong!',
                      icon: 'error',
                      position: 'top-right',
                      loaderBg:'#7a5449',
                      class: 'jq-has-icon jq-toast-danger',
                      hideAfter: 3500, 
                      stack: 6,
                      showHideTransition: 'slide'
                    });
                  }
                    
                  }
                  // location.reload();
                  
                },
                error: function (data) {
                    if(data.responseJSON.errors.email[0] !== undefined){
                        $.toast().reset('all');   
                        $("body").removeAttr('class');
                        $.toast({
                          heading: 'Error',
                          text: data.responseJSON.errors.email[0],
                          icon: 'error',
                          position: 'top-right',
                          loaderBg:'#7a5449',
                          class: 'jq-has-icon jq-toast-danger',
                          hideAfter: 3500, 
                          stack: 6,
                          showHideTransition: 'slide'
                        });
                    }else{
                        $.toast().reset('all');   
                        $("body").removeAttr('class');
                        $.toast({
                          heading: 'Error',
                          text: 'Something Went Wrong',
                          icon: 'error',
                          position: 'top-right',
                          loaderBg:'#7a5449',
                          class: 'jq-has-icon jq-toast-danger',
                          hideAfter: 3500, 
                          stack: 6,
                          showHideTransition: 'slide'
                        });
                    }

                    $('.sendmbtn').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                }
            });
        }

    }
/* Password Reset Function */

/* Register Function */
    function register(type){

        if(type == 'uc'){
            var form = $("#UCRegisterForm");
        }else{
            var form = $("#FNRegisterForm");
        }

        

        if(form.valid()){
            $(document).ready(function(){

                $('.RegisterMbtnSubmit').addClass('m-loader m-loader--light m-loader--right').attr('disabled',true);

                setTimeout(()=>{
                    var registerForm = form;
                    var formData = registerForm.serialize();
                    var url = 'front/register.html';

                    $.ajax({
                        url:url,
                        type:'POST',
                        data:formData,
                        success:function(data){
                            $('.RegisterMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                            $('.signWRaps2').slideDown();
                            $('.account-done').slideDown();
                            $('.signWRaps').slideUp();
                            $('#fundaiqRegDv').slideUp();
                            $('#travelAgentText').slideUp();
                            $('#umrahRegDv').slideUp();
                            $('#umrahIndiText').slideUp();
                            $('#ResgisterUmrah').slideUp();
                            $('.form-button1Slide').slideUp();

                            $('.signWRaps2 .main-heading').html('Hi '+data.name+'! <span class="lightHeading">Check your email to activate your account</span>');
                            $('.signWRaps2 .textSuccess').html('<p>We just sent a link to <a href="#" class="emailAdd">'+data.email+'.</a> Didn’t receive the email?</p><a href="javascript:void(0)" class="btn waves-effect waves-light h-btn-done viewBtn ResendMail" data-user_id="'+data.id+'" onclick="resendmail('+data.id+')">Resend</a>');

                            $('.account-done .main-heading').html('Hi '+data.name+'! <span class="lightHeading">Check your email to activate your account</span>');
                            $('.account-done .textSuccess').html('<p>We just sent a link to <a href="#" class="emailAdd">'+data.email+'.</a> Didn’t receive the email?</p><a href="javascript:void(0)" class="btn waves-effect waves-light h-btn-done viewBtn ResendMail" data-user_id="'+data.id+'" onclick="resendmail('+data.id+')">Resend</a>');
                            
                            $('.modal-close').attr('data-refresh',true);
                            $('.closeIcon2').attr('data-refresh',true);
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
                            $('.RegisterMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                        }
                    });

                },2000);

            })
        }
    }
/* Register Function */

/* Register Function */
    function register1(type){

        if(type == 'uc'){
            var form = $("#DetailUCRegisterForm");
        }else{
            var form = $("#DetailFNRegisterForm");
        }
        if(form.valid()){
            $(document).ready(function(){

                $('.RegisterMbtnSubmit').addClass('m-loader m-loader--light m-loader--right').attr('disabled',true);

                setTimeout(()=>{
                    var registerForm = form;
                    var formData = registerForm.serialize();
                    var url = 'front/register.html';

                    $.ajax({
                        url:url,
                        type:'POST',
                        data:formData,
                        success:function(data){
                            $('.RegisterMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                            $('.signWRaps2').slideDown();
                            $('.account-done').slideDown();
                            $('.signWRaps').slideUp();
                            $('#fundaiqRegDv').slideUp();
                            $('#travelAgentText').slideUp();
                            $('#umrahRegDv').slideUp();
                            $('#umrahIndiText').slideUp();
                            $('#ResgisterUmrah').slideUp();
                            $('.form-button1Slide').slideUp();

                            $('.signWRaps2 .main-heading').html('Hi '+data.name+'! <span class="lightHeading">Check your email to activate your account</span>');
                            $('.signWRaps2 .textSuccess').html('<p>We just sent a link to <a href="#" class="emailAdd">'+data.email+'.</a> Didn’t receive the email?</p><a href="javascript:void(0)" class="btn waves-effect waves-light h-btn-done viewBtn ResendMail" data-user_id="'+data.id+'" onclick="resendmail('+data.id+')">Resend</a>');

                            $('.account-done .main-heading').html('Hi '+data.name+'! <span class="lightHeading">Check your email to activate your account</span>');
                            $('.account-done .textSuccess').html('<p>We just sent a link to <a href="#" class="emailAdd">'+data.email+'.</a> Didn’t receive the email?</p><a href="javascript:void(0)" class="btn waves-effect waves-light h-btn-done viewBtn ResendMail" data-user_id="'+data.id+'" onclick="resendmail('+data.id+')">Resend</a>');
                            
                            $('.modal-close').attr('data-refresh',true);
                            $('.closeIcon2').attr('data-refresh',true);
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
                            $('.RegisterMbtnSubmit').removeClass('m-loader m-loader--light m-loader--right').attr('disabled',false);
                        }
                    });

                },2000);

            })
        }
    }
/* Register Function */

function resendmail(id){ $('.ResendMail').addClass('m-loader m-loader--light m-loader--right').attr('disabled',true);
    var url = 'https://umrahcompanions.com/resend-email/'+id;

    $.ajax({
        url:url,
        type:'GET',
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