$(document).ready(function() {

   // flash of unstyled content fadeIn
   $('.fouc').fadeIn('slow');

   // add class cliclable to clickable elements so full block is clickable + check if target is _blank
   $('.clickable').click(function(e) {
      e.stopPropagation();
      if ($(this).find('a').attr('target') == '_blank') {
         window.open($(this).find('a').attr('href'));
      } else {
         document.location.href = $(this).find('a').attr('href');
      }
   });

   //add rel="nofollow" to every external link for SEO purposes
   for (var i = $('a').length - 1; i >= 0; i--) {
      if ($('a:eq(' + i + ')').attr('target') == '_blank') {
         $('a:eq(' + i + ')').attr({
            rel: "nofollow"
         });
      }
   };

   /*//if mobile optimized
   //check for high res images for retina display (iPhone4/iPhone4/iPhone5s)
   //high res images must have same filename with "@2x" attached example: logo@2x.png
   //high res image must be 200% and width properly set through css
   // http://troymcilvena.com/post/998277515/jquery-retina
   $('img.retina').retina();*/

   //if focuspoint is used for responsive images   https://github.com/jonom/jquery-focuspoint
   //include div around img ex. <div class="focuspoint" data-focus-x="0.331" data-focus-y="-0.224" data-image-w="400" data-image-h="300">
   /*$('.focuspoint').focusPoint();*/

   // Preload CSS images
   $.preloadCssImages();
   
});

/* ============================================================================================================================================================ */
/* SMART WINDOW RESIZE */
/* ============================================================================================================================================================ */   
$(window).smartresize(function(){
   // console.log('Resize');
});
