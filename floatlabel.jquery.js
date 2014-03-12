/*
floatlabel.js
https://github.com/torrobinson/floatlabel.js
by Tor Robinson

Based on the float label pattern 
by Matt D. Smith 
http://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction
*/

jQuery.support.placeholder = (function(){
            var i = document.createElement('input');
            return 'placeholder' in i;
        })();

(function($) {
    $.fn.floatLabel = function( options ) {
        var settings = $.extend({
            leftOffset     : '0px',
            topOffset      : '0px',
            fontSize       : '9px',
            color          : '#0b7dfd',
            colorInactive  : '#c9c9c9'
        }, options);

        return this.each( function() {
           $(this).find('input').each(function(){
               var width = $(this).outerWidth();
               var widthOnly = parseInt($(this).css('width'),10);
               var height = $(this).outerHeight() - parseInt($(this).css('margin-top'),10)+parseInt($(this).css('margin-bottom'),10);
               height = parseInt(parseInt(settings.topOffset,10) + height*-1).toString()+'px';
               
                //wrap input in container and add label
                $(this).wrap('<span class="floatLabelHolder">');
                $(this).before('<label for="'+$(this).attr('id')+'" class="floatLabel floatLabelHide">'+$(this).attr('placeHolder')+'</label>');
               
               $(this).siblings('label').css({
                   left          :settings.leftOffset,
                   top           :height,
                   'font-size'   :settings.fontSize,
                   'color'       :settings.colorInactive
               });
               
               if(!jQuery.support.placeholder){
                    $(this).before('<span class="placeholder">'+$(this).attr('placeHolder')+'</span>');
                    $(this).siblings('.placeholder').css({
                        'left': (parseInt($(this).css('padding-left'),10) + parseInt($(this).css('border-left-width'),10))+'px',
                        'top': (parseInt($(this).css('padding-top'),10) + parseInt($(this).css('border-top-width'),10))+'px',
                    });
                   
                   //passthrough click events
                   $(this).siblings('.placeholder').click(function(e){
                        $(this).siblings('input').focus();
                   });
                   
               }
               
               //transfer input width and margin to container
               $(this).parent('.floatLabelHolder').css({
                   'margin-top':  $(this).css('margin-top'),
                   'margin-right':  $(this).css('margin-right'),
                   'margin-bottom':  $(this).css('margin-bottom'),
                   'margin-left':  $(this).css('margin-left'),
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
                        if(!jQuery.support.placeholder) $(this).siblings('.placeholder').hide();
                        $(this).siblings('label').css({display:'inline-block'}).animate({
                            top    :height,
                            opacity: 1.0
                        },settings.animationSpeed);
                    }
                    else{
                         if(!jQuery.support.placeholder) $(this).siblings('.placeholder').show();
                         $(this).siblings('label').animate({
                            top    : '0px',
                            opacity: 0.01
                        },settings.animationSpeed);
                    }
                });
               
               $(this).focus(function(){
                    $(this).siblings('label').removeClass('inactive').css('color',settings.color);
               });
               $(this).blur(function(){
                    $(this).siblings('label').removeClass('active').css('color',settings.colorInactive);
               });               
           });
        });
    }
}(jQuery));
