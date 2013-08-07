/*! kcharts - v1.2 - 2013-08-07 12:47:35 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/basechart/index",function(t,e){function a(t){for(var e={X:0,Y:0};t;)e.X+=t.offsetLeft,e.Y+=t.offsetTop,t=t.offsetParent;return e}var r=t.all,n=function(){};return t.extend(n,e,{init:function(e){var a,n,i=this;if(e&&e.renderTo){a=i._cfg=t.mix({zIndex:0,yAxis:{},canvasAttr:{x:60,y:60},defineKey:{},zoomType:"x"},e),i._$ctnNode=r(e.renderTo),i._$ctnNode.css({"-webkit-text-size-adjust":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)"}),i.createContainer(),t.mix(i,{_datas:{cur:{},total:{}},_points:{},_centerPoints:[],_pointsX:[],_pointsY:[],_gridsX:[],_gridsY:[],_areas:[],_axisX:null,_axisY:null,_labelX:[],_labelY:[],_evtEls:[],_gridPoints:[],_multiple:!1,stackable:!1});for(var s in Array.prototype)delete Array.prototype[s];if(n=a.series||null,"barchart"==i.chartType&&(a.xAxis.min=0,a.yAxis.min=0),!n||0>=n.length||!n[0].data)return;n.length>1?i._multiple=!0:void 0;for(var s in n)i._datas.total[s]={index:s,data:n[s].data},i._datas.cur[s]={index:s,data:n[s].data};i.dataFormat()}},removeData:function(t){var e=this;delete e._datas.cur[t],e.dataFormat()},recoveryData:function(t){var e=this;e._datas.cur[t]=e._datas.total[t],e.dataFormat()},createContainer:function(){var e=this,a=e._$ctnNode,r=t.mix(e._cfg.canvasAttr),n=r.width||a.width()-2*r.x,i=r.height||a.height()-2*r.y,s=r.x,o=r.y,l=n,c=i,d={x:s,y:o},f={x:s+n,y:o},h={x:s,y:o+c},u={x:s+n,y:o+c};e._innerContainer={x:s,y:o,width:l,height:c,tl:d,tr:f,bl:h,br:u}},getInnerContainer:function(){return this._innerContainer},getAllDatas:function(){var e,a=this,r=a._cfg,n=[],i=r.zoomType,s=arguments[0],o=a.getDataType();if(r.stackable)for(var l in a._datas.cur){"object"==o&&r.defineKey.y&&r.defineKey.x?e=a.getArrayByKey(a._datas.cur[l].data,r.defineKey.y):t.isArray(a._datas.cur[l].data)&&(e=a._datas.cur[l].data);for(var c in e)n[c]=n[c]?e[c]-0+(n[c]-0):e[c]}else for(var l in a._datas.cur)"object"==o&&r.defineKey.y&&r.defineKey.x?e=a.getArrayByKey(a._datas.cur[l].data,r.defineKey.y):t.isArray(a._datas.cur[l].data)&&(e="xy"==i?a.getArrayByKey(a._datas.cur[l].data,s):a._datas.cur[l].data),n.push(e.join(","));return n.length?n.join(",").split(","):[]},getDataType:function(){var e=this;if(e._datas.total[0]&&e._datas.total[0].data)for(var a in e._datas.total[0].data){if(t.isPlainObject(e._datas.total[0].data[a]))return"object";if(t.isNumber(e._datas.total[0].data[a]-0))return"number"}},_getScales:function(e,a){var r=this;if(a.text&&t.isArray(a.text))return a.text;var n=a.max-0,i=a.min-0,s=a.num||5,o=Math.max.apply(null,e),l=Math.min.apply(null,e),c=.1*(o-l)||1*f||10,d=n||0==n?n>=o?n:o+c:o+c,f=i||0==i?l>=i?i:l-c:l-c;return r.getScales(d,f,s)},dataFormat:function(){var e,a,r,n,i,s,o,l=this,c=l._cfg,d=c.zoomType,f=l._innerContainer,h=f.width,u=f.height,p=f.x,_=f.y;l._pointsY=[],l._pointsX=[],"x"==d?(e=l.getAllDatas(),o=r=l.coordNum=l._getScales(e,c.yAxis),i=l.data2GrapicData(r,!1,!0)):"y"==d?(a=l.getAllDatas(),o=n=l.coordNumX=l._getScales(a,c.xAxis),s=l.data2GrapicData(n,!0,!1)):"xy"==d&&(e=l.getAllDatas(0),a=l.getAllDatas(1),o=r=l.coordNum=l._getScales(e,c.xAxis),n=l.coordNumX=l._getScales(a,c.yAxis),i=l.data2GrapicData(r,!1,!1),s=l.data2GrapicData(n,!0,!0));var x=function(e,a,r){var n=c.series[a],i=Math.max.apply(null,r),s=Math.min.apply(null,r),o=c.defineKey,f=o.x,x=o.y,g=[],y=0,b=l.getDataType();if("x"==d)if(f&&x&&"object"==b)for(var v in l._pointsX)e[y]&&c.xAxis.text[v]==e[y][f]?(g[v]={x:l._pointsX[v].x,y:l.data2Grapic(e[y][x],i,s,u,_,!0),dataInfo:e[y],index:Math.round(v)},y++):g[v]={x:l._pointsX[v].x,index:Math.round(v)};else for(var v in l._pointsX)g[v]=""===e[v]||null===e[v]?{x:l._pointsX[v].x,index:Math.round(v)}:{x:l._pointsX[v].x,y:l.data2Grapic(e[v],i,s,u,_,!0),dataInfo:{y:e[v],x:c.xAxis.text[v]},index:Math.round(v)};else if("y"==d)if(f&&x&&t.isPlainObject(l._datas.total[0].data[0]))for(var v in l._pointsY)e[y]&&c.yAxis.text[v]==e[y][f]?(g[v]={x:l.data2Grapic(e[y][x],i,s,h,p),y:l._pointsY[v].y,dataInfo:{y:e[y]},index:Math.round(v)},y++):g[v]={y:l._pointsY[v].y,index:Math.round(v)};else for(var v in l._pointsY)g[v]={x:l.data2Grapic(e[v],i,s,h,p),y:l._pointsY[v].y,dataInfo:{y:e[v],x:c.yAxis.text[v]},index:Math.round(v)};else if("xy"==d){var m=l.data2GrapicData(l.getArrayByKey(n.data,0)),w=l.data2GrapicData(l.getArrayByKey(n.data,1),!0,!0);for(var v in n.data)g[v]={x:m[v],y:w[v],dataInfo:{y:e[v]},index:Math.round(v)}}return g};if("x"==d){for(var g in i)l._pointsY[g]={number:r[g]+"",y:i[g],x:p};try{l._gridPoints=l.getSplitPoints(p,_+u,p+h,_+u,c.xAxis.text.length,!0),l._pointsX=l.getCenterPoints(l._gridPoints)}catch(y){throw Error("未配置正确的xAxis.text数组")}}else if("y"==d){for(var g in s)l._pointsX[g]={number:n[g]+"",y:_+u,x:s[g]};try{l._pointsY=l.getSplitPoints(p,_,p,_+u,c.yAxis.text.length+1)}catch(y){throw Error("未配置正确的yAxis.text数组")}}else if("xy"==d){for(var g in s)l._pointsY[g]={number:n[g]+"",y:s[g],x:p};for(var g in i)l._pointsX[g]={number:r[g]+"",y:_+u,x:i[g]}}for(var g in l._datas.cur)l._points[g]=x(l._datas.cur[g].data,g,o)},data2GrapicData:function(e,a,r){if(void 0!==e){var n,i=this,s=i._innerContainer,o=a?s.x:s.y,l=s.height,c=s.width,d=i._cfg.zoomType,f=a?Math.max.apply(null,i.coordNumX):Math.max.apply(null,i.coordNum),h=a?Math.min.apply(null,i.coordNumX):Math.min.apply(null,i.coordNum),u=[];if("xy"==d?n=a?l:c:"x"==d?n=l:"y"==d&&(n=c),t.isArray(e)){for(var p in e)u.push(i.data2Grapic(e[p],f,h,n,o,r));return u}return i.data2Grapic(e,f,h,n,o,r)}},data2Grapic:function(t,e,a,r,n,i){return 0>=e-a?void 0:i?r*(1-(t-a)/(e-a))+n:r*(t-a)/(e-a)+n},getSplitPoints:function(t,e,a,r,n,i){var s=(a-t)/n,o=(r-e)/n,l=[];i&&l.push({x:t,y:e});for(var c=0;n-1>c;c++)l.push({x:t+(c+1)*s,y:e+(c+1)*o});return i&&l.push({x:a,y:r}),l},getCenterPoints:function(t){var e=[],a=t.length;if(a>1)for(var r=0;a-1>r;r++)e[r]={x:(t[r].x+t[r+1].x)/2,y:(t[r].y+t[r+1].y)/2};return e},getScales:function(e,a,r){t.log(arguments);var n,i,s,o,l,c,d,f=this,h=Math.log,u=Math.pow,p=[],_=0;if(!(a>=e)){for(n=(e-a)/r,s=Math.floor(h(n)/h(10))+1,i=n/u(10,s),i=i>0&&.1>=i?.1:i>.1&&.2>=i?.2:i>.2&&.25>=i?.25:i>.25&&.5>=i?.5:1,o=i*u(10,s),d=(e+a)/2-(e+a)/2%o,l=c=d;l>a;)l-=o;for(;e>c;)c+=o;if(f.isFloat(o)){var x=o+"";x.indexOf(".")>-1&&(_=x.split(".")[1].length>4?4:x.split(".")[1].length)}for(var g=l;c>=g;g+=o)p.push(parseFloat(g).toFixed(_));return p}},arraySort:function(t,e,a){return t.sort(function(t,r){return e?"object"==typeof t&&"object"==typeof r?r[a]-t[a]:r-t:"object"==typeof t&&"object"==typeof r?t[a]-r[a]:t-r})},getArrayByKey:function(e,a){var r=[];for(var n in e)(e[n][a]||t.isNumber(e[n][a]))&&r.push(e[n][a]);return r},isFloat:function(t){return/^([+-]?)\d*\.\d+$/.test(t)},obj2Array:function(t,e){var a=[];for(var r in t)a.push(e?t[e]:t[r]);return a},getObjKeys:function(t){var e=[];for(b in t)e.push(b);return e},isInSide:function(t,e,a,r,n,i){return t>a&&a- -n>t&&e>r&&r- -i>e?!0:!1},getOffset:function(t){var e,r,n,i=t.currentTarget;return t.offsetX?{offsetX:t.offsetX,offsetY:t.offsetY}:(r=a(i),e={X:window.pageXOffset+t.clientX,Y:window.pageYOffset+t.clientY},n={offsetX:e.X-r.X,offsetY:e.Y-r.Y})}}),n},{requires:["base"]});