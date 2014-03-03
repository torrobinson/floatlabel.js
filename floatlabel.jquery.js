/*
floatlabel.js
Based on the float label pattern by Matt D. Smith (http://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction)
*/

(function($) {
    $.fn.floatLabel = function( options ) {
        var settings = $.extend({
            leftOffset     : '0px',
            topOffset      : '0px',
            fontSize       : '9px',
            color          : '#0b7dfd',
            colorInactive  : '#C9C9C9'
        }, options);
       return this.each( function() {
           $(this).children('input').each(function(){
               var width = $(this).outerWidth();
               var widthOnly = parseInt($(this).css('width'),10);
               var height = $(this).outerHeight() - parseInt($(this).css('margin-top'),10)+parseInt($(this).css('margin-bottom'),10);
               height = parseInt(parseInt(settings.topOffset,10) + height*-1).toString()+'px';
               
                //wrap input in container and add label
                $(this).wrap('<span class="floatLabelHolder">');
                $(this).before('<label for="'+$(this).attr('id')+'" class="floatLabel floatLabelHide">'+$(this).attr('placeHolder')+'</label>');
               
               $(this).prev('label').css({
                   left          :settings.leftOffset,
                   top           :height,
                   'font-size'   :settings.fontSize,
                   'color'       :settings.colorInactive
               });
               
               //transfer input width and margin to container
               $(this).parent('.floatLabelHolder').css({
                   margin:  $(this).css('margin'),
                   width:   width
               });
               $(this).prev('label').css({'top':'0px'});
               $(this).css({
                   width:widthOnly,
                   'margin':0
               });
                
               //bind events
                $(this).keyup(function(ev){
                    if($(this).val()!=''){
                        $(this).prev('label').css({display:'inline-block'}).animate({
                            top    :height,
                            opacity: 1.0
                        },settings.animationSpeed);
                    }
                    else{
                         $(this).prev('label').animate({
                            top    : '0px',
                            opacity: 0.01
                        },settings.animationSpeed);
                    }
                });
               
               $(this).focus(function(){
                    $(this).prev('label').removeClass('inactive').css('color',settings.color);
               });
               $(this).blur(function(){
                    $(this).prev('label').removeClass('active').css('color',settings.colorInactive);
               });               
           });
        });
    }
}(jQuery));