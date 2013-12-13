'use strict';

$(document).ready(function(){

        $(".ui-navbar li ").on("tap",function(){
                $(".ui-navbar li ").removeClass("active_tab");
        $(this).addClass("active_tab");
        })
        // Spread Panel Dynamics

        var panel = $("#spread");
        var position = false;

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
        })

        function swipeStatus(event, phase, direction, distance, fingers)
        {
                if(phase=="move" && direction =="left" && position != true)
                {
                   	panel.css("width",distance+"px");  
                }
                if(distance > 150)
                {       panel.css("width","100%");
                        $(".contribute").fadeIn();
                        position = true;
                }
                if(phase == "end" && distance < 150)
                {
                    $(".contribute").fadeOut();
                	panel.css("width","0%");

                }

        }

});