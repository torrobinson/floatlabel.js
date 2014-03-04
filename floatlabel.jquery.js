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
        
        var usePHFallback = !'placeholder' in document.createElement('input'); 
        
        return this.each( function() {
           $(this).children('input').each(function(){
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
               
               if(usePHFallback){
                    $(this).before('<span class="placeholder">'+$(this).attr('placeHolder')+'</span>');
                    $(this).siblings('.placeholder').css({
                        'margin-left': parseInt($(this).css('padding-left'),10) + parseInt($(this).css('border-left'),10),
                        'margin-top': parseInt($(this).css('padding-top'),10) + parseInt($(this).css('border-top'),10),
                    });
                   
                   //passthrough click events
                   $(this).siblings('.placeholder').click(function(e){
                        $(this).siblings('input').focus();
                   });
                   
               }
               
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
                        if(usePHFallback) $(this).siblings('.placeholder').hide();
                        $(this).siblings('label').css({display:'inline-block'}).animate({
                            top    :height,
                            opacity: 1.0
                        },settings.animationSpeed);
                    }
                    else{
                         if(usePHFallback) $(this).siblings('.placeholder').show();
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