/*
floatlabel.js
Based on the float label pattern by Matt D. Smith (http://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction)
*/

(function($) {
    $.fn.floatLabel = function( options ) {
        var settings = $.extend({
            leftOffset     : '0',
            topOffset      : '0',
            customClass    : ''
        }, options);

       return this.each( function() {
           $(this).children('input').each(function(){
                //prepare
                $(this).wrap('<span class="fltlblHolder">');
                $(this).before('<label for="'+$(this).attr('id')+'" class="fltlbl fltlblHide">'+$(this).attr('placeHolder')+'</label>');
               
               $(this).prev('label').addClass(settings.customClass);
               $(this).prev('label').css({
                   left :settings.offsetx,
                   top  :settings.offsety
               });
                
               //events
                $(this).keyup(function(ev){
                    if($(this).val()!=''){
                        $(this).prev('label').removeClass('fltlblHide');   
                    }
                    else{
                        $(this).prev('label').addClass('fltlblHide');
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