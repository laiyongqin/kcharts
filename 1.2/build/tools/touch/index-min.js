/*! kcharts - v1.2 - 2013-08-07 12:47:35 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/tools/touch/index",function(l){function t(l,t){if(!(l.touches.length>1)){var e=l.changedTouches,r=e[0],i=document.createEvent("MouseEvent");i.initMouseEvent(t,!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),l.target.dispatchEvent(i)}}function e(l){var e=n(l);s||e||(s=!0,t(l,"mouseover"),t(l,"mousemove"),t(l,"mousedown"))}function r(l){s&&(t(l,"mousemove"),a=!0)}function i(l){s&&(t(l,"mouseup"),a&&t(l,"mouseout"),a=!1,s=!1)}function n(l){return"INPUT"==l.target.tagName.toUpperCase()?!0:!1}if(!l.UA.ie){var s,a=!1;document.addEventListener("touchstart",e,!0),document.addEventListener("touchmove",r,!0),document.addEventListener("touchend",i,!0)}});