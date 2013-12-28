'use strict';

$(document).ready(function(){

        var current_ui = "map";

        $(".ui-navbar li ").on("tap",function(){

                $("#"+current_ui).hide();
                var direction_ui = $(this).attr("data-href");
                $("#"+direction_ui).fadeIn('fast');
                current_ui = direction_ui;
                $(".ui-navbar li ").removeClass("active_tab");
                $(this).addClass("active_tab");
        })

        // Spread Panel Dynamics

        var panel = $("#spread");
        var position = false;
        /*
        $(document).swipe({
                        triggerOnTouchEnd : true,
                        swipeStatus : swipeStatus,
                        allowPageScroll:"vertical",
                         threshold:100
        });

        $(".icon-menu").on("tap",function(){
            if(position)
            {
                $(".contribute").fadeOut();
                panel.css("width","0%");
                position = false;
            }
            else
            {
                   panel.css("width","100%");
                    $(".contribute").fadeIn();
                    position = true;
            }
        });
        */
        

        if(localStorage)
        {
            if(localStorage.firstuse  ==  null)
            {
                $('#map').hide();
                $("#setup").hide();
                $('#introduction').show();

            }
            else
            {
                $("#introduction").hide();
                $("#setup").hide();
                $("#map").show(); 
                $(".name_profile").html(localStorage.name);
                $(".adresse_profile").html(localStorage.adresse);
                $(".phone_profile").html('<i style="color:white;font-size:14px;" class="icon-phone"></i>'+ localStorage.phone);
            }
        }
        else
        {
               
        }


        $(".start").click(function(){
            $("#introduction").fadeOut('1200');
            $('#setup').fadeIn('1200');
        });


        function validateEmail(email) { 
  
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }


        $('.save').click(function(){
            var name = $('#name').val();
            var email = $('#email').val();
            var adresse = $("#adresse").val();
            var phone = $("#phone").val();


            if(phone.substring(0,5) != "+2126")
            {   
                return ;
            }
            if(!validateEmail(email))
            {
                return ;
            }

            localStorage.firstuse = "USED";
            localStorage.name = name;
            localStorage.email = email;
            localStorage.adresse = adresse;
            localStorage.phone = phone;
            $("#setup").hide();
            $("#map").fadeIn("1200");

        });


        $(".types").click(function(){
            $(".types").removeClass("activet");
            $(this).addClass("activet");
        });

        $(".rhs").click(function(){
            $(".rhs").removeClass("activerh");
            $(this).addClass("activerh");
        });



        function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);

            

        


    

});