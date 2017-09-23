/**!
 * @Name:        Grid
 * @Description: Flexbox Grid
 * @Keywords:    Flexbox,Grid
 * @version:     v1.0.0
 * -----------------------------------------------------
 * @Autor:       Rik Jacobs
 * @Email:       info@rikjacobs.com
 * @Url:         http://www.rikjacobs.com/
 */
$(document).ready(function(){$(".fouc").fadeIn("slow"),$(".clickable").click(function(t){t.stopPropagation(),"_blank"==$(this).find("a").attr("target")?window.open($(this).find("a").attr("href")):document.location.href=$(this).find("a").attr("href")});for(var t=$("a").length-1;t>=0;t--)"_blank"==$("a:eq("+t+")").attr("target")&&$("a:eq("+t+")").attr({rel:"nofollow"});$.preloadCssImages()}),$(window).smartresize(function(){});