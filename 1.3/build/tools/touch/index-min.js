/*! kcharts - v1.3 - 2014-01-09 2:22:58 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/tools/touch/index",function(t){function l(t,l){if(!(t.touches.length>1)){var e=t.changedTouches,r=e[0],i=document.createEvent("MouseEvent");i.initMouseEvent(l,!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(i)}}function e(t){var e=n(t);a||e||(a=!0,l(t,"mouseover"),l(t,"mousemove"),l(t,"mousedown"))}function r(t){a&&(l(t,"mousemove"),s=!0)}function i(t){a&&(l(t,"mouseup"),s&&l(t,"mouseout"),s=!1,a=!1)}function n(t){return"INPUT"==t.target.tagName.toUpperCase()?!0:!1}if(!t.UA.ie){var a,s=!1;document.addEventListener("touchstart",e,!0),document.addEventListener("touchmove",r,!0),document.addEventListener("touchend",i,!0)}});