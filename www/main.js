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
        

        

        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };

        var map = new google.maps.Map(document.getElementById("map"),mapOptions);


    

});