// Avoid `console` errors in browsers that lack a console.
(function() {
   var method;
   var noop = function noop() {};
   var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn'
   ];
   var length = methods.length;
   var console = (window.console = window.console || {});

   while (length--) {
      method = methods[length];

      // Only stub undefined methods.
      if (!console[method]) {
         console[method] = noop;
      }
   }
}());

/* Classes for IE-versions without conditional tags */
function getInternetExplorerVersion() {
   var rv = -1;
   if (navigator.appName == 'Microsoft Internet Explorer') {
      var ua = navigator.userAgent;
      var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         rv = parseFloat(RegExp.$1);
   } else if (navigator.appName == 'Netscape') {
      var ua = navigator.userAgent;
      var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         rv = parseFloat(RegExp.$1);
   }
   return rv;
}
var IEversion = getInternetExplorerVersion();
if (IEversion > 0) {
   for (var i = 6; i < 13; i++) {
      if (IEversion < i) $("body").addClass("lt-ie" + i);
   }
}

//getUrlParameter
function getURLParameter(name) {
   return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]);
}

//setEqualHeight
/*use to set equalheight to elements in different containers
  call it with selector example setEqualHeight('.diensten h1');
*/
function setEqualHeight(element) {
    $(element).css('height', 'auto');
    var maxHeight = Math.max.apply(null, $(element).map(function () {
        return $(this).innerHeight();

    }).get());

    $(element).css('height', maxHeight);
}

//####[[[nog updaten en aanpassen naar dezelfde manier als de ie update bar]]]####
/*
	Keistoer Compatibility Bar
	Version: 1.0
	Revision History:
		1.0 (26/07/2013) - Toine: 	- first build
		1.1 (07/01/2014) - Ruud: 	- added feature detection to detect local storage so IE9 also shows compatibility bar
									- updated image and colors
*/
(function() {

   if (navigator.userAgent.indexOf('Trident') !== -1 && (navigator.userAgent.indexOf('MSIE 7.0') !== -1 || typeof(Storage) == "undefined")) {
      //colors:
      var barColor = '#FA0000';
      var fontColor = '#FFF';

      var l = (document.documentElement.lang || '');
      var t;
      if (l == 'en') {
         t = 'To view this page properly close the compatibility mode. You can do this by clicking on this icon:';
      } else {
         t = 'Om deze pagina goed te kunnen bekijken dient u de compatibiliteitsmodus uit te schakelen. Dit doet u door in de adresbalk op het volgende icoon te klikken:';
      }
      var i = '<img style="margin-left:6px;vertical-align:text-top;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzA4NUUzNUU3ODUxMTFFMzg5NUFBMjJCQTc2NUU5OEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzA4NUUzNUY3ODUxMTFFMzg5NUFBMjJCQTc2NUU5OEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMDg1RTM1Qzc4NTExMUUzODk1QUEyMkJBNzY1RTk4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMDg1RTM1RDc4NTExMUUzODk1QUEyMkJBNzY1RTk4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhhMdLEAAAB8SURBVHjahJKBDsAQDETLfMmW1P9/jq+xtVnlNOglMuy8OiRm7nRQay2NgZh3kn8Kuwp9Q8oU6CMTP7dWL5G51mrfPm0j2lJGgoQxkiePgD+RrFkFmx9B0YjJVwDtiAFptsADprIYxgPUvDuBFSCfLsMrvEFUih4S6hVgAOWe2dKqX+wcAAAAAElFTkSuQmCC">';
      $('body').prepend('<div style="display:inline-block;height:34px;line-height:34px;width:100%;background-color:' + barColor + ';text-align:center;position:relative;z-index:99999;color:' + fontColor + '; font-size:13px;">' + t + i + '</div>')
   }
}());


/*
	Retina afbeeldingen
	Author: Troy Mcilvena (http://troymcilvena.com)
	Twitter: @mcilvena
	Date: 24 November 2011
	Version: 1.3

	Revision History:
		1.0 (23/08/2010)	- Initial release.
		1.1 (27/08/2010)	- Made plugin chainable
		1.2 (10/11/2010)	- Fixed broken retina_part setting. Wrapped in self executing function (closure)
		1.3 (29/10/2011)	- Checked if source has already been updated (via mattbilson)
*/

(function($) {
   $.fn.retina = function(retina_part) {
      // Set default retina file part to '@2x'
      // Eg. some_image.jpg will become some_image@2x.jpg
      var settings = {
         'retina_part': '@2x'
      };
      if (retina_part) jQuery.extend(settings, {
         'retina_part': retina_part
      });

      if (window.devicePixelRatio >= 2) {
         this.each(function(index, element) {
            if (!$(element).attr('src')) return;
               var checkForRetina = new RegExp("(.+)(" + settings['retina_part'] + "\\.\\w{3,4})");
               if (checkForRetina.test($(element).attr('src'))) return;

               var new_image_src = $(element).attr('src').replace(/(.+)(\.\w{3,4})$/, "$1" + settings['retina_part'] + "$2");
               $.ajax({
                  url: new_image_src,
                  type: "HEAD",
                  success: function() {
                     $(element).attr('src', new_image_src);
                  }
               });
            });
         }
      return this;
   }
})(jQuery);

/**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 */
;
(function($) {

    $.fn.equalize = function(options) {
        var $containers = this, // this is the jQuery object
            children = false,
            reset = false,
            equalize,
            type;

        // when options are an object
        if ($.isPlainObject(options)) {
            equalize = options.equalize || 'height';
            children = options.children || false;
            reset = options.reset || false;
        } else { // otherwise, a string was passed in or default to height
            equalize = options || 'height';
        }

        if (!$.isFunction($.fn[equalize])) {
            return false;
        }

        // determine if the height or width is being equalized
        type = (equalize.indexOf('eight') > 0) ? 'height' : 'width';

        return $containers.each(function() {
            var $children = $(this).children(),
                max = 0; // reset for each container
            if (children) {
                $children = $(this).find(children);
            }

            $children.each(function() {
                var $element = $(this),
                    value;
                if (reset) {
                    $element.css(type, '');
                } // remove existing height/width dimension
                value = $element[equalize](); // call height(), outerHeight(), etc.
                if (value > max) {
                    max = value;
                } // update max
            });

            $children.css(type, max + 'px'); // add CSS to children
        });
    };

}(jQuery));

/*
 * jQuery cssParentSelector 1.0.9
 * https://github.com/Idered/cssParentSelector
 *
 * Copyright 2011-2012, Kasper Mikiewicz
 * Released under the MIT and GPL Licenses.
 * Date 2012-02-08
 */
(function(a) {
    a.fn.cssParentSelector = function() {
        for (var z = 0, n, k, A = {
            hover: "mouseover mouseout",
            checked: "click",
            focus: "focus blur",
            active: "mousedown mouseup",
            selected: "change",
            changed: "change"
        }, t = {
            mousedown: "mouseout"
        }, u = {
            mouseup: "mouseout"
        }, l = {
            after: "appendTo",
            before: "prependTo"
        }, b, p, q, d, v, g, w, m, e, h, j, x = [/[\w\s\.\-\:\=\[\]\(\)\'\*\"\^#]*(?=!)/, /[\w\s\.\-\:\=\[\]\(\)\,\*\^$#>!]+/, /[\w\s\.\-\:\=\[\]\'\,\"#>]*\{{1}/, /[\w\s\.\-\:\=\'\*\|\?\^\+\/\\;#%]+\}{1}/], B = RegExp, r = "", s = 0; s < x.length; s++) r += x[s].source;
        var C = new B(r, "gi"),
            y = function(f) {
                f = f.replace(/(\/\*([\s\S]*?)\*\/)/gm, "");
                if (p = f.match(C)) {
                    b = "";
                    for (n = -1; p[++n], style = p[n];)
                        if (q = style.split("{")[0].split(","), e = "{" + style.split(/\{|\}/)[1].replace(/^\s+|\s+$[\t\n\r]*/g, "") + "}", "{}" !== e) {
                            e = e.replace(/;/g, " !important;");
                            for (k = -1; q[++k], d = a.trim(q[k]);) k && (b += ","), /!/.test(d) ? (v = a.trim(d.split("!")[0].split(":")[0]), g = a.trim(d.split("!")[1].split(">")[0].split(":")[0]) || []._, h = a.trim(d.split(">")[0].split("!")[0].split(":")[1]) || []._, j = g ? a.trim(d.split(">")[0].split("!")[1].split(":")[1]) || []._ : []._, w = a(a.trim(d.split(">")[1]).split(":")[0]), m = (d.split(">")[1].split(/:+/)[1] || "").split(" ")[0] || []._, w.each(function(d) {
                                var c = a(this).parent(v);
                                h && (c = l[h] ? a("<div></div>")[l[h]](c) : c.filter(":" + h));
                                g && (c = c.find(g));
                                g && j && (c = l[j] ? a("<div></div>")[l[j]](c) : c.filter(":" + j));
                                var e = "CPS" + z++,
                                    f = function(b) {
                                        b && t[b.type] && a(c).one(t[b.type], function() {
                                            a(c).toggleClass(e)
                                        });
                                        b && u[b.type] && a(c).off(u[b.type]);
                                        a(c).toggleClass(e)
                                    };
                                d && (b += ",");
                                b += "." + e;
                                !m ? f() : a(this).on(A[m] || m, f)
                            })) : b += d;
                            b += e
                        }
                    a('<style type="text/css">' + b + "</style>").appendTo("head")
                }
            };
        a("link[rel=stylesheet], style").each(function() {
            a(this).is("link") ? a.get(this.href).success(function(a) {
                y(a)
            }) : y(a(this).text())
        })
    };
    a().cssParentSelector()
})(jQuery);



//preload
/*
 * jQuery-Plugin "preloadCssImages"
 * by Scott Jehl, scott@filamentgroup.com
 * http://www.filamentgroup.com
 * reference article: http://www.filamentgroup.com/lab/update_automatically_preload_images_from_css_with_jquery/
 * demo page: http://www.filamentgroup.com/examples/preloadImages/index_v2.php
 *
 * Copyright (c) 2008 Filament Group, Inc
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 *
 * Version: 5.0, 10.31.2008
 * Changelog:
 * 	02.20.2008 initial Version 1.0
 *    06.04.2008 Version 2.0 : removed need for any passed arguments. Images load from any and all directories.
 *    06.21.2008 Version 3.0 : Added options for loading status. Fixed IE abs image path bug (thanks Sam Pohlenz).
 *    07.24.2008 Version 4.0 : Added support for @imported CSS (credit: http://marcarea.com/). Fixed support in Opera as well.
 *    10.31.2008 Version: 5.0 : Many feature and performance enhancements from trixta
 * --------------------------------------------------------------------
 */

jQuery.preloadCssImages = function(k) {
    function m() {
        clearTimeout(q);
        if (c && c.length && c[e]) {
            e++;
            if (k.statusTextEl) {
                var a = c[e] ? "Now Loading: <span>" + c[e].split("/")[c[e].split("/").length - 1] : "Loading complete";
                jQuery(k.statusTextEl).html('<span class="numLoaded">' + e + '</span> of <span class="numTotal">' + c.length + '</span> loaded (<span class="percentLoaded">' + (100 * (e / c.length)).toFixed(0) + '%</span>) <span class="currentImg">' + a + "</span></span>")
            }
            k.statusBarEl && (a = jQuery(k.statusBarEl).width(), jQuery(k.statusBarEl).css("background-position", -(a - (a * e / c.length).toFixed(0)) + "px 50%"));
            r()
        }
    }

    function r() {
        if (c && c.length && c[e]) {
            var a = new Image;
            a.src = c[e];
            a.complete ? m() : jQuery(a).bind("error load onreadystatechange", m);
            q = setTimeout(m, k.errorDelay)
        }
    }

    function s(a, e) {
        for (var n = !1, p = [], m = [], h, d = a.length; d--;) {
            var f = "";
            if (e && e[d]) h = e[d];
            else {
                h = a[d].href ? a[d].href : "window.location.href";
                if (h.match(/^https?:\/\//)) continue;
                h = h.split("/");
                h.pop();
                (h = h.join("/")) && (h += "/")
            } if (a[d].cssRules || a[d].rules) {
                l = a[d].cssRules ? a[d].cssRules : a[d].rules;
                for (var g = l.length; g--;)
                    if (l[g].style && l[g].style.cssText) {
                        var b = l[g].style.cssText; - 1 != b.toLowerCase().indexOf("url") && (f += b)
                    } else l[g].styleSheet && (p.push(l[g].styleSheet), n = !0)
            }
            if (f = f.match(/[^\("]+\.(gif|jpg|jpeg|png)/g))
                for (g = f.length; g--;) b = "/" == f[g].charAt(0) || f[g].match("://") ? f[g] : h + f[g], -1 == jQuery.inArray(b, c) && c.push(b);
            if (!n && a[d].imports && a[d].imports.length)
                for (f = 0, g = a[d].imports.length; f < g; f++) b = a[d].imports[f].href, b = b.split("/"), b.pop(), (b = b.join("/")) && (b += "/"), b = "/" == b.charAt(0) || b.match("://") ? b : h + b, m.push(b), p.push(a[d].imports[f])
        }
        if (p.length) return s(p, m), !1;
        for (n = k.simultaneousCacheLoading; n--;) setTimeout(r, n)
    }
    k = jQuery.extend({
        statusTextEl: null,
        statusBarEl: null,
        errorDelay: 999,
        simultaneousCacheLoading: 2
    }, k);
    var e = 0,
        c = [],
        l, q;
    s(document.styleSheets);
    return c
};


/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function() {
    function a(a) {
        this._value = a
    }

    function b(a, b, c, d) {
        var e, f, g = Math.pow(10, b);
        return f = (c(a * g) / g).toFixed(b), d && (e = new RegExp("0{1," + d + "}$"), f = f.replace(e, "")), f
    }

    function c(a, b, c) {
        var d;
        return d = b.indexOf("$") > -1 ? e(a, b, c) : b.indexOf("%") > -1 ? f(a, b, c) : b.indexOf(":") > -1 ? g(a, b) : i(a._value, b, c)
    }

    function d(a, b) {
        var c, d, e, f, g, i = b,
            j = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            k = !1;
        if (b.indexOf(":") > -1) a._value = h(b);
        else if (b === q) a._value = 0;
        else {
            for ("." !== o[p].delimiters.decimal && (b = b.replace(/\./g, "").replace(o[p].delimiters.decimal, ".")), c = new RegExp("[^a-zA-Z]" + o[p].abbreviations.thousand + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), d = new RegExp("[^a-zA-Z]" + o[p].abbreviations.million + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), e = new RegExp("[^a-zA-Z]" + o[p].abbreviations.billion + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), f = new RegExp("[^a-zA-Z]" + o[p].abbreviations.trillion + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), g = 0; g <= j.length && !(k = b.indexOf(j[g]) > -1 ? Math.pow(1024, g + 1) : !1); g++);
            a._value = (k ? k : 1) * (i.match(c) ? Math.pow(10, 3) : 1) * (i.match(d) ? Math.pow(10, 6) : 1) * (i.match(e) ? Math.pow(10, 9) : 1) * (i.match(f) ? Math.pow(10, 12) : 1) * (b.indexOf("%") > -1 ? .01 : 1) * ((b.split("-").length + Math.min(b.split("(").length - 1, b.split(")").length - 1)) % 2 ? 1 : -1) * Number(b.replace(/[^0-9\.]+/g, "")), a._value = k ? Math.ceil(a._value) : a._value
        }
        return a._value
    }

    function e(a, b, c) {
        var d, e, f = b.indexOf("$"),
            g = b.indexOf("("),
            h = b.indexOf("-"),
            j = "";
        return b.indexOf(" $") > -1 ? (j = " ", b = b.replace(" $", "")) : b.indexOf("$ ") > -1 ? (j = " ", b = b.replace("$ ", "")) : b = b.replace("$", ""), e = i(a._value, b, c), 1 >= f ? e.indexOf("(") > -1 || e.indexOf("-") > -1 ? (e = e.split(""), d = 1, (g > f || h > f) && (d = 0), e.splice(d, 0, o[p].currency.symbol + j), e = e.join("")) : e = o[p].currency.symbol + j + e : e.indexOf(")") > -1 ? (e = e.split(""), e.splice(-1, 0, j + o[p].currency.symbol), e = e.join("")) : e = e + j + o[p].currency.symbol, e
    }

    function f(a, b, c) {
        var d, e = "",
            f = 100 * a._value;
        return b.indexOf(" %") > -1 ? (e = " ", b = b.replace(" %", "")) : b = b.replace("%", ""), d = i(f, b, c), d.indexOf(")") > -1 ? (d = d.split(""), d.splice(-1, 0, e + "%"), d = d.join("")) : d = d + e + "%", d
    }

    function g(a) {
        var b = Math.floor(a._value / 60 / 60),
            c = Math.floor((a._value - 60 * b * 60) / 60),
            d = Math.round(a._value - 60 * b * 60 - 60 * c);
        return b + ":" + (10 > c ? "0" + c : c) + ":" + (10 > d ? "0" + d : d)
    }

    function h(a) {
        var b = a.split(":"),
            c = 0;
        return 3 === b.length ? (c += 60 * Number(b[0]) * 60, c += 60 * Number(b[1]), c += Number(b[2])) : 2 === b.length && (c += 60 * Number(b[0]), c += Number(b[1])), Number(c)
    }

    function i(a, c, d) {
        var e, f, g, h, i, j, k = !1,
            l = !1,
            m = !1,
            n = "",
            r = !1,
            s = !1,
            t = !1,
            u = !1,
            v = !1,
            w = "",
            x = "",
            y = Math.abs(a),
            z = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            A = "",
            B = !1;
        if (0 === a && null !== q) return q;
        if (c.indexOf("(") > -1 ? (k = !0, c = c.slice(1, -1)) : c.indexOf("+") > -1 && (l = !0, c = c.replace(/\+/g, "")), c.indexOf("a") > -1 && (r = c.indexOf("aK") >= 0, s = c.indexOf("aM") >= 0, t = c.indexOf("aB") >= 0, u = c.indexOf("aT") >= 0, v = r || s || t || u, c.indexOf(" a") > -1 ? (n = " ", c = c.replace(" a", "")) : c = c.replace("a", ""), y >= Math.pow(10, 12) && !v || u ? (n += o[p].abbreviations.trillion, a /= Math.pow(10, 12)) : y < Math.pow(10, 12) && y >= Math.pow(10, 9) && !v || t ? (n += o[p].abbreviations.billion, a /= Math.pow(10, 9)) : y < Math.pow(10, 9) && y >= Math.pow(10, 6) && !v || s ? (n += o[p].abbreviations.million, a /= Math.pow(10, 6)) : (y < Math.pow(10, 6) && y >= Math.pow(10, 3) && !v || r) && (n += o[p].abbreviations.thousand, a /= Math.pow(10, 3))), c.indexOf("b") > -1)
            for (c.indexOf(" b") > -1 ? (w = " ", c = c.replace(" b", "")) : c = c.replace("b", ""), g = 0; g <= z.length; g++)
                if (e = Math.pow(1024, g), f = Math.pow(1024, g + 1), a >= e && f > a) {
                    w += z[g], e > 0 && (a /= e);
                    break
                }
        return c.indexOf("o") > -1 && (c.indexOf(" o") > -1 ? (x = " ", c = c.replace(" o", "")) : c = c.replace("o", ""), x += o[p].ordinal(a)), c.indexOf("[.]") > -1 && (m = !0, c = c.replace("[.]", ".")), h = a.toString().split(".")[0], i = c.split(".")[1], j = c.indexOf(","), i ? (i.indexOf("[") > -1 ? (i = i.replace("]", ""), i = i.split("["), A = b(a, i[0].length + i[1].length, d, i[1].length)) : A = b(a, i.length, d), h = A.split(".")[0], A = A.split(".")[1].length ? o[p].delimiters.decimal + A.split(".")[1] : "", m && 0 === Number(A.slice(1)) && (A = "")) : h = b(a, null, d), h.indexOf("-") > -1 && (h = h.slice(1), B = !0), j > -1 && (h = h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o[p].delimiters.thousands)), 0 === c.indexOf(".") && (h = ""), (k && B ? "(" : "") + (!k && B ? "-" : "") + (!B && l ? "+" : "") + h + A + (x ? x : "") + (n ? n : "") + (w ? w : "") + (k && B ? ")" : "")
    }

    function j(a, b) {
        o[a] = b
    }

    function k(a) {
        var b = a.toString().split(".");
        return b.length < 2 ? 1 : Math.pow(10, b[1].length)
    }

    function l() {
        var a = Array.prototype.slice.call(arguments);
        return a.reduce(function(a, b) {
            var c = k(a),
                d = k(b);
            return c > d ? c : d
        }, -1 / 0)
    }
    var m, n = "1.5.3",
        o = {},
        p = "en",
        q = null,
        r = "0,0",
        s = "undefined" != typeof module && module.exports;
    m = function(b) {
        return m.isNumeral(b) ? b = b.value() : 0 === b || "undefined" == typeof b ? b = 0 : Number(b) || (b = m.fn.unformat(b)), new a(Number(b))
    }, m.version = n, m.isNumeral = function(b) {
        return b instanceof a
    }, m.language = function(a, b) {
        if (!a) return p;
        if (a && !b) {
            if (!o[a]) throw new Error("Unknown language : " + a);
            p = a
        }
        return (b || !o[a]) && j(a, b), m
    }, m.languageData = function(a) {
        if (!a) return o[p];
        if (!o[a]) throw new Error("Unknown language : " + a);
        return o[a]
    }, m.language("en", {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        },
        ordinal: function(a) {
            var b = a % 10;
            return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"
        },
        currency: {
            symbol: "$"
        }
    }), m.zeroFormat = function(a) {
        q = "string" == typeof a ? a : null
    }, m.defaultFormat = function(a) {
        r = "string" == typeof a ? a : "0.0"
    }, "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(a, b) {
        "use strict";
        if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof a) throw new TypeError(a + " is not a function");
        var c, d, e = this.length >>> 0,
            f = !1;
        for (1 < arguments.length && (d = b, f = !0), c = 0; e > c; ++c) this.hasOwnProperty(c) && (f ? d = a(d, this[c], c, this) : (d = this[c], f = !0));
        if (!f) throw new TypeError("Reduce of empty array with no initial value");
        return d
    }), m.fn = a.prototype = {
        clone: function() {
            return m(this)
        },
        format: function(a, b) {
            return c(this, a ? a : r, void 0 !== b ? b : Math.round)
        },
        unformat: function(a) {
            return "[object Number]" === Object.prototype.toString.call(a) ? a : d(this, a ? a : r)
        },
        value: function() {
            return this._value
        },
        valueOf: function() {
            return this._value
        },
        set: function(a) {
            return this._value = Number(a), this
        },
        add: function(a) {
            function b(a, b) {
                return a + c * b
            }
            var c = l.call(null, this._value, a);
            return this._value = [this._value, a].reduce(b, 0) / c, this
        },
        subtract: function(a) {
            function b(a, b) {
                return a - c * b
            }
            var c = l.call(null, this._value, a);
            return this._value = [a].reduce(b, this._value * c) / c, this
        },
        multiply: function(a) {
            function b(a, b) {
                var c = l(a, b);
                return a * c * b * c / (c * c)
            }
            return this._value = [this._value, a].reduce(b, 1), this
        },
        divide: function(a) {
            function b(a, b) {
                var c = l(a, b);
                return a * c / (b * c)
            }
            return this._value = [this._value, a].reduce(b), this
        },
        difference: function(a) {
            return Math.abs(m(this._value).subtract(a).value())
        }
    }, s && (module.exports = m), "undefined" == typeof ender && (this.numeral = m), "function" == typeof define && define.amd && define([], function() {
        return m
    })
}).call(this);

/*!
 * numeral.js language configuration
 * language : belgium-dutch (be-nl)
 * author : Dieter Luypaert : https://github.com/moeriki
 */
! function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: " mln",
            billion: " mld",
            trillion: " bln"
        },
        ordinal: function(a) {
            var b = a % 100;
            return 0 !== a && 1 >= b || 8 === b || b >= 20 ? "ste" : "de"
        },
        currency: {
            symbol: "€ "
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("be-nl", a)
}(),
/*!
 * numeral.js language configuration
 * language : simplified chinese
 * author : badplum : https://github.com/badplum
 */
function() {
    var a = {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: "千",
            million: "百万",
            billion: "十亿",
            trillion: "兆"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "¥"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("chs", a)
}(),
/*!
 * numeral.js language configuration
 * language : czech (cs)
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "tis.",
            million: "mil.",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "Kč"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("cs", a)
}(),
/*!
 * numeral.js language configuration
 * language : danish denmark (dk)
 * author : Michael Storgaard : https://github.com/mstorgaard
 */
function() {
    var a = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "mio",
            billion: "mia",
            trillion: "b"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "DKK"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("da-dk", a)
}(),
/*!
 * numeral.js language configuration
 * language : German in Switzerland (de-ch)
 * author : Michael Piefel : https://github.com/piefel (based on work from Marco Krage : https://github.com/sinky)
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "CHF"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("de-ch", a)
}(),
/*!
 * numeral.js language configuration
 * language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
 * author : Marco Krage : https://github.com/sinky
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "€"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("de", a)
}(),
/*!
 * numeral.js language configuration
 * language : english united kingdom (uk)
 * author : Dan Ristic : https://github.com/dristic
 */
function() {
    var a = {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        },
        ordinal: function(a) {
            var b = a % 10;
            return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"
        },
        currency: {
            symbol: "£"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("en-gb", a)
}(),
/*!
 * numeral.js language configuration
 * language : spanish Spain
 * author : Hernan Garcia : https://github.com/hgarcia
 */
function() {
    var a = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "mm",
            billion: "b",
            trillion: "t"
        },
        ordinal: function(a) {
            var b = a % 10;
            return 1 === b || 3 === b ? "er" : 2 === b ? "do" : 7 === b || 0 === b ? "mo" : 8 === b ? "vo" : 9 === b ? "no" : "to"
        },
        currency: {
            symbol: "€"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("es", a)
}(),
/*!
 * numeral.js language configuration
 * language : spanish
 * author : Hernan Garcia : https://github.com/hgarcia
 */
function() {
    var a = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "mm",
            billion: "b",
            trillion: "t"
        },
        ordinal: function(a) {
            var b = a % 10;
            return 1 === b || 3 === b ? "er" : 2 === b ? "do" : 7 === b || 0 === b ? "mo" : 8 === b ? "vo" : 9 === b ? "no" : "to"
        },
        currency: {
            symbol: "$"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("es", a)
}(),
/*!
 * numeral.js language configuration
 * language : Estonian
 * author : Illimar Tambek : https://github.com/ragulka
 *
 * Note: in Estonian, abbreviations are always separated
 * from numbers with a space
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: " tuh",
            million: " mln",
            billion: " mld",
            trillion: " trl"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "€"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("et", a)
}(),
/*!
 * numeral.js language configuration
 * language : Finnish
 * author : Sami Saada : https://github.com/samitheberber
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "M",
            billion: "G",
            trillion: "T"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "€"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("fi", a)
}(),
/*!
 * numeral.js language configuration
 * language : french (Canada) (fr-CA)
 * author : Léo Renaud-Allaire : https://github.com/renaudleo
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "M",
            billion: "G",
            trillion: "T"
        },
        ordinal: function(a) {
            return 1 === a ? "er" : "e"
        },
        currency: {
            symbol: "$"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("fr-CA", a)
}(),
/*!
 * numeral.js language configuration
 * language : french (fr-ch)
 * author : Adam Draper : https://github.com/adamwdraper
 */
function() {
    var a = {
        delimiters: {
            thousands: "'",
            decimal: "."
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        },
        ordinal: function(a) {
            return 1 === a ? "er" : "e"
        },
        currency: {
            symbol: "CHF"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("fr-ch", a)
}(),
/*!
 * numeral.js language configuration
 * language : french (fr)
 * author : Adam Draper : https://github.com/adamwdraper
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        },
        ordinal: function(a) {
            return 1 === a ? "er" : "e"
        },
        currency: {
            symbol: "€"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("fr", a)
}(),
/*!
 * numeral.js language configuration
 * language : Hungarian (hu)
 * author : Peter Bakondy : https://github.com/pbakondy
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "E",
            million: "M",
            billion: "Mrd",
            trillion: "T"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: " Ft"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("hu", a)
}(),
/*!
 * numeral.js language configuration
 * language : italian Italy (it)
 * author : Giacomo Trombi : http://cinquepunti.it
 */
function() {
    var a = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "mila",
            million: "mil",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "º"
        },
        currency: {
            symbol: "€"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("it", a)
}(),
/*!
 * numeral.js language configuration
 * language : japanese
 * author : teppeis : https://github.com/teppeis
 */
function() {
    var a = {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: "千",
            million: "百万",
            billion: "十億",
            trillion: "兆"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "¥"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("ja", a)
}(),
/*!
 * numeral.js language configuration
 * language : netherlands-dutch (nl-nl)
 * author : Dave Clayton : https://github.com/davedx
 */
function() {
    var a = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "mln",
            billion: "mrd",
            trillion: "bln"
        },
        ordinal: function(a) {
            var b = a % 100;
            return 0 !== a && 1 >= b || 8 === b || b >= 20 ? "ste" : "de"
        },
        currency: {
            symbol: "€ "
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("nl-nl", a)
}(),
/*!
 * numeral.js language configuration
 * language : polish (pl)
 * author : Dominik Bulaj : https://github.com/dominikbulaj
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "tys.",
            million: "mln",
            billion: "mld",
            trillion: "bln"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "PLN"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("pl", a)
}(),
/*!
 * numeral.js language configuration
 * language : portuguese brazil (pt-br)
 * author : Ramiro Varandas Jr : https://github.com/ramirovjr
 */
function() {
    var a = {
        delimiters: {
            thousands: ".",
            decimal: ","
        },
        abbreviations: {
            thousand: "mil",
            million: "milhões",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "º"
        },
        currency: {
            symbol: "R$"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("pt-br", a)
}(),
/*!
 * numeral.js language configuration
 * language : portuguese (pt-pt)
 * author : Diogo Resende : https://github.com/dresende
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "º"
        },
        currency: {
            symbol: "€"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("pt-pt", a)
}(),
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "тыс.",
            million: "млн",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "₴"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("ru-UA", a)
}(),
/*!
 * numeral.js language configuration
 * language : russian (ru)
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "тыс.",
            million: "млн",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "руб."
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("ru", a)
}(),
/*!
 * numeral.js language configuration
 * language : slovak (sk)
 * author : Ahmed Al Hafoudh : http://www.freevision.sk
 */
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "tis.",
            million: "mil.",
            billion: "b",
            trillion: "t"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "€"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("sk", a)
}(),
/*!
 * numeral.js language configuration
 * language : thai (th)
 * author : Sathit Jittanupat : https://github.com/jojosati
 */
function() {
    var a = {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: "พัน",
            million: "ล้าน",
            billion: "พันล้าน",
            trillion: "ล้านล้าน"
        },
        ordinal: function() {
            return "."
        },
        currency: {
            symbol: "฿"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("th", a)
}(),
/*!
 * numeral.js language configuration
 * language : turkish (tr)
 * author : Ecmel Ercan : https://github.com/ecmel, Erhan Gundogan : https://github.com/erhangundogan, Burak Yiğit Kaya: https://github.com/BYK
 */
function() {
    var a = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        },
        b = {
            delimiters: {
                thousands: ".",
                decimal: ","
            },
            abbreviations: {
                thousand: "bin",
                million: "milyon",
                billion: "milyar",
                trillion: "trilyon"
            },
            ordinal: function(b) {
                if (0 === b) return "'ıncı";
                var c = b % 10,
                    d = b % 100 - c,
                    e = b >= 100 ? 100 : null;
                return a[c] || a[d] || a[e]
            },
            currency: {
                symbol: "₺"
            }
        };
    "undefined" != typeof module && module.exports && (module.exports = b), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("tr", b)
}(),
function() {
    var a = {
        delimiters: {
            thousands: " ",
            decimal: ","
        },
        abbreviations: {
            thousand: "тис.",
            million: "млн",
            billion: "млрд",
            trillion: "блн"
        },
        ordinal: function() {
            return ""
        },
        currency: {
            symbol: "₴"
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = a), "undefined" != typeof window && this.numeral && this.numeral.language && this.numeral.language("uk-UA", a)
}();

numeral.language('nl-nl');
numeral.defaultFormat('$0,0.00');



/**
	Timeout: replacement (eigenlijk een wrapper) voor setTimeout / clearTimeout. Voorbeeld:
	var timeout = new Timeout(function() { alert('keistoer'); }, 1000);
	timeout.clear();
	console.log(timeout.cleared); // true
	Hierdoor kan je du altijd checken of de timeout gecleared is of nog aan het lopen is, wat niet kan met de gewone timeout function.
*/
function Timeout(fn, interval, scope, args) {
    scope = scope || window;
    var self = this;
    var wrap = function() {
        self.clear();
        fn.apply(scope, args || arguments);
    }
    this.id = setTimeout(wrap, interval);
}
Timeout.prototype.id = null
Timeout.prototype.cleared = false;
Timeout.prototype.clear = function() {
    clearTimeout(this.id);
    this.cleared = true;
    this.id = null;
};



/* Placeholders.js v3.0.2 */
(function(t) {
    "use strict";

    function e(t, e, r) {
        return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0
    }

    function r(t, e) {
        var r, n;
        for (r = 0, n = t.length; n > r; r++)
            if (t[r] === e) return !0;
        return !1
    }

    function n(t, e) {
        var r;
        t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }

    function a(t, e) {
        try {
            return t.type = e, !0
        } catch (r) {
            return !1
        }
    }
    t.Placeholders = {
        Utils: {
            addEventListener: e,
            inArray: r,
            moveCaret: n,
            changeType: a
        }
    }
})(this),
function(t) {
    "use strict";

    function e() {}

    function r() {
        try {
            return document.activeElement
        } catch (t) {}
    }

    function n(t, e) {
        var r, n, a = !!e && t.value !== e,
            u = t.value === t.getAttribute(V);
        return (a || u) && "true" === t.getAttribute(D) ? (t.removeAttribute(D), t.value = t.value.replace(t.getAttribute(V), ""), t.className = t.className.replace(R, ""), n = t.getAttribute(F), parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(F)), r = t.getAttribute(P), r && (t.type = r), !0) : !1
    }

    function a(t) {
        var e, r, n = t.getAttribute(V);
        return "" === t.value && n ? (t.setAttribute(D, "true"), t.value = n, t.className += " " + I, r = t.getAttribute(F), r || (t.setAttribute(F, t.maxLength), t.removeAttribute("maxLength")), e = t.getAttribute(P), e ? t.type = "text" : "password" === t.type && M.changeType(t, "text") && t.setAttribute(P, "password"), !0) : !1
    }

    function u(t, e) {
        var r, n, a, u, i, l, o;
        if (t && t.getAttribute(V)) e(t);
        else
            for (a = t ? t.getElementsByTagName("input") : b, u = t ? t.getElementsByTagName("textarea") : f, r = a ? a.length : 0, n = u ? u.length : 0, o = 0, l = r + n; l > o; o++) i = r > o ? a[o] : u[o - r], e(i)
    }

    function i(t) {
        u(t, n)
    }

    function l(t) {
        u(t, a)
    }

    function o(t) {
        return function() {
            m && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) ? M.moveCaret(t, 0) : n(t)
        }
    }

    function c(t) {
        return function() {
            a(t)
        }
    }

    function s(t) {
        return function(e) {
            return A = t.value, "true" === t.getAttribute(D) && A === t.getAttribute(V) && M.inArray(C, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
        }
    }

    function d(t) {
        return function() {
            n(t, A), "" === t.value && (t.blur(), M.moveCaret(t, 0))
        }
    }

    function g(t) {
        return function() {
            t === r() && t.value === t.getAttribute(V) && "true" === t.getAttribute(D) && M.moveCaret(t, 0)
        }
    }

    function v(t) {
        return function() {
            i(t)
        }
    }

    function p(t) {
        t.form && (T = t.form, "string" == typeof T && (T = document.getElementById(T)), T.getAttribute(U) || (M.addEventListener(T, "submit", v(T)), T.setAttribute(U, "true"))), M.addEventListener(t, "focus", o(t)), M.addEventListener(t, "blur", c(t)), m && (M.addEventListener(t, "keydown", s(t)), M.addEventListener(t, "keyup", d(t)), M.addEventListener(t, "click", g(t))), t.setAttribute(j, "true"), t.setAttribute(V, x), (m || t !== r()) && a(t)
    }
    var b, f, m, h, A, y, E, x, L, T, N, S, w, B = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
        C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
        k = "#ccc",
        I = "placeholdersjs",
        R = RegExp("(?:^|\\s)" + I + "(?!\\S)"),
        V = "data-placeholder-value",
        D = "data-placeholder-active",
        P = "data-placeholder-type",
        U = "data-placeholder-submit",
        j = "data-placeholder-bound",
        q = "data-placeholder-focus",
        z = "data-placeholder-live",
        F = "data-placeholder-maxlength",
        G = document.createElement("input"),
        H = document.getElementsByTagName("head")[0],
        J = document.documentElement,
        K = t.Placeholders,
        M = K.Utils;
    if (K.nativeSupport = void 0 !== G.placeholder, !K.nativeSupport) {
        for (b = document.getElementsByTagName("input"), f = document.getElementsByTagName("textarea"), m = "false" === J.getAttribute(q), h = "false" !== J.getAttribute(z), y = document.createElement("style"), y.type = "text/css", E = document.createTextNode("." + I + " { color:" + k + "; }"), y.styleSheet ? y.styleSheet.cssText = E.nodeValue : y.appendChild(E), H.insertBefore(y, H.firstChild), w = 0, S = b.length + f.length; S > w; w++) N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x && (x = x.nodeValue, x && M.inArray(B, N.type) && p(N));
        L = setInterval(function() {
            for (w = 0, S = b.length + f.length; S > w; w++) N = b.length > w ? b[w] : f[w - b.length], x = N.attributes.placeholder, x ? (x = x.nodeValue, x && M.inArray(B, N.type) && (N.getAttribute(j) || p(N), (x !== N.getAttribute(V) || "password" === N.type && !N.getAttribute(P)) && ("password" === N.type && !N.getAttribute(P) && M.changeType(N, "text") && N.setAttribute(P, "password"), N.value === N.getAttribute(V) && (N.value = x), N.setAttribute(V, x)))) : N.getAttribute(D) && (n(N), N.removeAttribute(V));
            h || clearInterval(L)
        }, 100)
    }
    M.addEventListener(t, "beforeunload", function() {
        K.disable()
    }), K.disable = K.nativeSupport ? e : i, K.enable = K.nativeSupport ? e : l
}(this);

/**
 * jQuery FocusPoint; version: 1.1.1
 * Author: http://jonathonmenz.com
 * Source: https://github.com/jonom/jquery-focuspoint
 * Copyright (c) 2014 J. Menz; MIT License
 * @preserve
 */
!function($){var t={reCalcOnWindowResize:!0,throttleDuration:17},n=function(t){var n=t.find("img").attr("src");t.data("imageSrc",n),i(n,function(n,i){t.data({imageW:i.width,imageH:i.height}),r(t)})},i=function(t,n){$("<img />").one("load",function(){n(null,{width:this.width,height:this.height})}).attr("src",t)},a=function(t,n){var i=!1;return function(){var a=Array.prototype.slice.call(arguments,0);return i?!1:(i=!0,void setTimeout(function(){i=!1,t.apply(null,a)},n))}},o=function(t,n,i,a,o){var r=Math.floor(n/2),e=(a+1)/2,u=Math.floor(i/t),f=Math.floor(e*u);o&&(f=u-f);var c=f-r,s=u-f,h=n-r;return h>s&&(c-=h-s),0>c&&(c=0),-100*c/n+"%"},r=function(t){var i=t.data("imageW"),a=t.data("imageH"),r=t.data("imageSrc");if(!i&&!a&&!r)return n(t);var e=t.width(),u=t.height(),f=parseFloat(t.data("focusX")),c=parseFloat(t.data("focusY")),s=t.find("img").first(),h=0,d=0;if(!(e>0&&u>0&&i>0&&a>0))return!1;var l=i/e,w=a/u;s.css({"max-width":"","max-height":""}),i>e&&a>u&&s.css(l>w?"max-height":"max-width","100%"),l>w?h=o(w,e,i,f):w>l&&(d=o(l,u,a,c,!0)),s.css({top:d,left:h})},e=$(window),u=function(t,n){var i=n.throttleDuration?a(function(){r(t)},n.throttleDuration):function(){r(t)},o=!1;return r(t),{adjustFocus:function(){return r(t)},windowOn:function(){return o?void 0:(e.on("resize",i),o=!0)},windowOff:function(){return o?(e.off("resize",i),o=!1,!0):void 0}}};$.fn.focusPoint=function(n){if("string"==typeof n)return this.each(function(){var t=$(this);t.data("focusPoint")[n]()});var i=$.extend({},t,n);return this.each(function(){var t=$(this),n=u(t,i);t.data("focusPoint")&&t.data("focusPoint").windowOff(),t.data("focusPoint",n),i.reCalcOnWindowResize&&n.windowOn()})},$.fn.adjustFocus=function(){return this.each(function(){r($(this))})}}(jQuery);






/* ============================================================================================================================================================ */
/* SMART RESIZE FUNCTION */
/* ============================================================================================================================================================ */  
(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 250);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');