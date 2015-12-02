/*
 *  Twitter Bootstrap Input Number
 *
 *  jQuery plugin that allows you to transform number inputs into
 *  HTML elements making them compatible with Internet Explorer 10
 *  and higher.
 *
 *  Version v0.1.0
 *  Author: Ionică Bizău
 *
 *  Open issues here: https://github.com/IonicaBizau/twbs-input-number/issues?state=open
 *  Fork me: https://github.com/IonicaBizau/twbs-input-number
 *  Follow me: https://github.com/IonicaBizau
 *
 *  License: The MIT Licence
 *  Copyright © 2013 - Ionică Bizău
 * */

(function(e){e.fn.twbsNumberInput=function(t){function i(){if(r.selector){n=e(r.selector)}n.each(function(){var t=e(this);var n=t.addClass("input-number").clone(true);n.attr("type","text");var r=e("<span>").addClass("twbs-input-number");r.append(n);var i=e("<button>").addClass("btn btn-mini");var s=i.clone().append("<i class='icon icon-plus'></i>").on("click",function(){o(e(this));return false});var a=i.clone().append("<i class='icon icon-minus'></i>").on("click",function(){u(e(this));return false});var f=e("<div class='buttons'>").addClass("btn-group btn-group-vertical number-btn").append(s).append(a);n.after(f);t.replaceWith(r)})}function s(e){return $input=e.parent().prev()}function o(e){var t=s(e);var n=parseInt(f(t));++n;a(t,n)}function u(e){var t=s(e);var n=parseInt(f(t));--n;a(t,n)}function a(e,t){var n=e;var r=l(n);if(r.max&&r.min){if(t<=r.max&&t>=r.min){n.val(t);n.trigger("change")}return}if(r.min){if(t>=r.min){n.val(t);n.trigger("change")}return}if(r.max){if(t<=r.max){n.val(t);n.trigger("change")}return}n.val(t);n.trigger("change")}function f(t){var n=t;return e(n).val()||0}function l(t){var n=t;return{min:e(n).attr("min"),max:e(n).attr("max")}}var n=this;var r=e.extend({check:true},t);if(r.check){i()}return this}})(jQuery)
