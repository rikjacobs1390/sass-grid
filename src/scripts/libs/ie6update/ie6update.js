(function(){if(!jQuery.browser){jQuery.browser={};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.msie=!1;var e=navigator.userAgent;jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var t,n;if(-1!=(n=e.indexOf("Opera"))){if(jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=e.substring(n+6),-1!=(n=e.indexOf("Version")))jQuery.browser.fullVersion=e.substring(n+8)}else if(-1!=(n=e.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=e.substring(n+5);else if(-1!=(n=e.indexOf("Chrome")))jQuery.browser.webkit=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=e.substring(n+7);else if(-1!=(n=e.indexOf("Safari"))){if(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=e.substring(n+7),-1!=(n=e.indexOf("Version")))jQuery.browser.fullVersion=e.substring(n+8)}else if(-1!=(n=e.indexOf("Firefox")))jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=e.substring(n+8);else if((t=e.lastIndexOf(" ")+1)<(n=e.lastIndexOf("/")))jQuery.browser.name=e.substring(t,n),jQuery.browser.fullVersion=e.substring(n+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName);if(-1!=(e=jQuery.browser.fullVersion.indexOf(";")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,e);if(-1!=(e=jQuery.browser.fullVersion.indexOf(" ")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,e);jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));jQuery.browser.version=jQuery.browser.majorVersion}})(jQuery);try{document.execCommand("BackgroundImageCache",!0,!0)}catch(err){}window.__noconflict&&jQuery.noConflict();(function(e){e.fn.activebar=function(t){t=e.fn.extend({},e.fn.activebar.defaults,t);if(null===e.fn.activebar.container){var n=e.fn.activebar,r=t,i=e("<div></div>").attr("id","activebar-container");i.css({display:"none",position:"fixed",zIndex:"9999",top:"0px",left:"0px",cursor:"default",padding:"10px","font-size":"9px",background:r.background,borderBottom:"1px solid "+r.border,cursor:"pointer",color:r.fontColor,transition:"background-color 0.3s ease"});e(window).bind("resize",function(){i.width(e(this).width())});e(window).trigger("resize");if(e.browser.msie&&("5"==e.browser.fullVersion.substring(0,1)||"6"==e.browser.fullVersion.substring(0,1)))i.css("position","absolute"),e(window).scroll(function(){i.stop(!0,!0);3==e.fn.activebar.state?i.css("top",e(window).scrollTop()+"px"):i.css("top",e(window).scrollTop()-i.height()+"px")}).resize(function(){e(window).scroll()});i.append(e("<div></div>").attr("class","icon").css({"float":"left",width:"16px",height:"16px",margin:"0 12px 0 5px",padding:"0"}).append('<img src="'+r.icons_path+'icon.png" class="normal">').append('<img src="'+r.icons_path+'icon.png" class="hover">'));i.append(e("<div></div>").attr("class","close").css({"float":"right",margin:"0 5px 0 0 ",width:"16px",height:"16px"}).click(function(t){e.fn.activebar.hide();t.stopPropagation()}).append('<img src="'+r.icons_path+'close.png" class="normal">').append('<img src="'+r.icons_path+'close.png" class="hover">'));i.append(e("<div></div>").attr("class","content").css({margin:"0px 8px",paddingTop:"1px",width:"940px"}));e(".hover",i).hide();e("body").prepend(i);n.container=i}var s=e.fn.activebar.container,o=t;s.unbind("mouseenter mouseleave");s.hover(function(){e(this).css({backgroundColor:o.highlight,color:"#FFFFFF"}).addClass("hover");e(".hover",s).show();e(".normal",s).hide()},function(){e(this).css({backgroundColor:o.background,color:"#000000"}).removeClass("hover");e(".hover",s).hide();e(".normal",s).show()});e(".content",s).css({fontFamily:o.font,fontSize:o.fontSize});e.fn.activebar.hide();e(".content",e.fn.activebar.container).empty();e(this).each(function(){e(".content",e.fn.activebar.container).append(this)});e.fn.activebar.container.unbind("click");null!==t.url&&e.fn.activebar.container.click(function(){window.open(t.url)});e.fn.activebar.container.css("top","-"+e.fn.activebar.container.height()+"px");if(t.preload){var u=0,f=0,l=0,c=0,h=function(){u&&f&&l&&c&&e.fn.activebar.show()};e('<img src="'+t.icons_path+'icon.png" class="normal">').load(function(){u=1;h()});e('<img src="'+t.icons_path+'icon-over.png" class="normal">').load(function(){f=1;h()});e('<img src="'+t.icons_path+'close.png" class="normal">').load(function(){l=1;h()});e('<img src="'+t.icons_path+'close-over.png" class="normal">').load(function(){c=1;h()})}else e.fn.activebar.show()};e.fn.activebar.defaults={background:"#f1f1f1",border:"#e5e5e5",highlight:"#3399ff",font:"Bitstream Vera Sans,verdana,sans-serif",fontColor:"#343434",fontSize:"12px",icons_path:"images/",url:"http://www.microsoft.com/windows/internet-explorer/default.aspx",preload:!0};e.fn.activebar.state=0;e.fn.activebar.container=null;e.fn.activebar.show=function(){if(!(1<e.fn.activebar.state)){e.fn.activebar.state=2;e.fn.activebar.container.css("display","block");var t=e.fn.activebar.container.height();e.fn.activebar.container.animate({top:"+="+t+"px"},20*t,"linear",function(){e.fn.activebar.state=3})}};e.fn.activebar.hide=function(){if(!(2>e.fn.activebar.state)){e.fn.activebar.state=1;var t=e.fn.activebar.container.height();e.fn.activebar.container.animate({top:"-="+t+"px"},20*t,"linear",function(){e.fn.activebar.container.css("display","none");e.fn.activebar.visible=!1})}}})(jQuery);jQuery(document).ready(function(e){e("<div></div>").html(IE6UPDATE_OPTIONS.message||"Internet Explorer mist enkele belangrijke updates om deze site correct weer te geven. Klik hier om de nieuwste versie te downloaden...").activebar(window.IE6UPDATE_OPTIONS)})