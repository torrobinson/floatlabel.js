/*
floatlabel.js
Based on the float label pattern by Matt D. Smith (http://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction)
*/

(function($) {
    $.fn.floatLabel = function( options ) {
        var settings = $.extend({
            leftOffset     : '0',
            topOffset      : '0'
        }, options);

       return this.each( function() {
           $(this).children('input').each(function(){
               
               var width = parseInt($(this).css('width'),10) 
                    +parseInt($(this).css('border-left-width'),10)
                    +parseInt($(this).css('border-right-width'),10)
                    +parseInt($(this).css('padding-left'),10)
                    +parseInt($(this).css('padding-right'),10);
               
               var widthOnly = parseInt($(this).css('width'),10);
               
               var height = parseInt($(this).css('height'),10) 
                    +parseInt($(this).css('border-top-width'),10)
                    +parseInt($(this).css('border-bottom-width'),10)
                    +parseInt($(this).css('padding-top'),10)
                    +parseInt($(this).css('padding-bottom'),10)
                    -parseInt($(this).css('margin-top'),10);
               
                //wrap and add label
                $(this).wrap('<span class="fltlblHolder">');
                $(this).before('<label for="'+$(this).attr('id')+'" class="fltlbl fltlblHide">'+$(this).attr('placeHolder')+'</label>');
               
               $(this).prev('label').css({
                   left          :settings.leftOffset,
                   top           :parseInt(parseInt(settings.topOffset,10) + height*-1).toString()+'px',
                   animationSpeed:150
               });
               
               //transfer margins and width to the container
               $(this).parent('.fltlblHolder').css({
                   margin:  $(this).css('margin'),
                   width:   width
               });
               $(this).css({'margin':0});
               $(this).prev('label').css({'top':'0px'});
               $(this).css({width:widthOnly});
                
               //events
                $(this).keyup(function(ev){
                    if($(this).val()!=''){
                        $(this).prev('label').css({display:'inline-block'}).animate({
                            top           :parseInt(parseInt(settings.topOffset,10) + height*-1).toString()+'px',
                            opacity: 1.0
                        },settings.animationSpeed);
                    }
                    else{
                         $(this).prev('label').animate({
                            top:     '0px',
                            opacity: 0.01
                        },settings.animationSpeed);
                    }
                });
               
               $(this).focus(function(){
                    $(this).prev('label').removeClass('inactive');  
                    $(this).prev('label').addClass('active');  
               });
               $(this).blur(function(){
                    $(this).prev('label').removeClass('active');  
                    $(this).prev('label').addClass('inactive');  
               });
               
           });
            
        });

    }

}(jQuery));