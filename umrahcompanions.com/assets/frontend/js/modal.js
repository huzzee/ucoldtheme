  var input = document.querySelector("#phone4");

        // $(document).ready(function(){ 
        //     $('.main-loader').fadeOut(2000);
        //  })

        $(document).on('click','.active-overlay-form',function(){
          $('.view-sticky-form').removeClass('activeS');
          $(this).removeClass('active-overlay-form');
        });

        $(document).on('click','.closeIcon2',function(){
          if($(this).attr('data-refresh') === undefined || $(this).attr('data-refresh') === false){
            $('.view-sticky-form').removeClass('activeS');
            $(this).removeClass('active-overlay-form');
            $('.overlay-search-form ').removeClass('active-overlay-form');
          }else{
            window.location.reload();
          }
        });

        $(document).on('click', '.overlay-search-form', function() {
          $('.view-sticky-form').removeClass('activeS');
        });

        // Close function
        $(document).ready(function(){
          $(".closeIcon2").click(function(){
            if($(this).attr('data-refresh') === undefined || $(this).attr('data-refresh') === false){
              $('.formTextBtns').slideDown();
              $('.createForm').show();
              $('.backB').show();
              $('.proflmg').hide();
              $('#ResgisterUmrah').hide();
              $('#ResgisterFunadiq').hide();
              $('.form-button1Slide').hide();
              $('.form-button2Slide').hide();
              $('.account-done').hide();
            }else{
              window.location.reload();
            }
          });
        });

        // Overlay setting function
        $(document).on('click', '.overlay-search-form', function() {
          $('.view-sticky-form').removeClass('activeS');
          $('.formTextBtns').slideDown();
          $('.createForm').show();
          $('.backB').show();
          $('.proflmg').hide();
          $('#ResgisterUmrah').hide();
          $('#ResgisterFunadiq').hide();
          $('.form-button1Slide').hide();
          $('.form-button2Slide').hide();
          $('.account-done').hide();
        });

        //Request Button Function slideDown
        $('.form-button1').on('click',function(e) {
          event.preventDefault();
          $('.formTextBtns').slideUp();
          $('.backB').show();
          $('.closeIcon2').hide();
          $('.form-button1Slide').slideDown();
        });

        //Request Button Function slideUp
        $('.backB').on('click',function(e){
          event.preventDefault();
          $('.form-button1Slide').slideUp();
          $('.closeIcon2').show();
          $('.formTextBtns').slideDown(); 
        });

        //Map Script
        $('.proflmg map area').on('click',function(e) {
          event.preventDefault();
          areaDv = $(this).attr('data-map');
        });

        //Request Button Function slideDown
        $('.form-button1').on('click',function(e) {
          event.preventDefault();
          $('.formTextBtns').slideUp();
          $('.backB').show();
          $('.closeIcon2').hide();
          $('.form-button1Slide').slideDown();
        });

        //Request Button Function slideUp
        $('.backB').on('click',function(e){
          event.preventDefault();
          $('.form-button1Slide').slideUp();
          $('.closeIcon2').show();
          $('.formTextBtns').slideDown(); 
        });

        //Map Script
        $('.proflmg map area').on('click',function(e) {
          event.preventDefault();
          areaDv = $(this).attr('data-map');
          console.log($(this).attr('data-map'));
        });

        $(document).ready(function(){
          $(".profilemapDisplay").click(function(){
            $(".proflmg").toggle();
          });
        });

        //umrah Create Account 
        $('.regUmrah').on('click',function(e){
          event.preventDefault();
          $('.createForm').slideUp();
          $('.proflmg').slideUp();
          $('.backB').hide();
          $('.closeIcon2').show();
          $('#ResgisterUmrah').slideDown(); 
        });

        //Funadiq Create Account 
        $('.regFunadiq').on('click',function(e){
          event.preventDefault();
          $('.createForm').slideUp();
          $('.proflmg').slideUp();
          $('.backB').hide();
          $('.closeIcon2').show();
          $('#ResgisterFunadiq').slideDown(); 
        });

        /* Phone */
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
        /* Phone */

        //open login from create account
        $('.open-login').on('click',function(e) {
          $('.form-button2Slide').show();
          $('.form-button1Slide').hide();
        });

        //open create account from login
        $('.open-create').on('click',function(e) {
          $('.form-button1Slide').show();
          $('.createForm').show();
          $('.backB').show();
          $('.closeIcon2').hide();
          $('.form-button2Slide').hide();
          $('#ResgisterUmrah').hide();
          $('#ResgisterFunadiq').hide();
        });

        $('.form-button2').on('click',function(e) {
           event.preventDefault();
           $('.formTextBtns').slideUp();
           $('.form-button2Slide').slideDown();
        });
