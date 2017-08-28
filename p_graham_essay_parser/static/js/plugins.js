// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
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

// Place any jQuery/helper plugins in here.
function atvImg(){function e(e,t,a,r,n,o){var i=l.scrollTop||s.scrollTop,d=l.scrollLeft,c=t?e.touches[0].pageX:e.pageX,m=t?e.touches[0].pageY:e.pageY,v=a.getBoundingClientRect(),f=a.clientWidth||a.offsetWidth||a.scrollWidth,g=a.clientHeight||a.offsetHeight||a.scrollHeight,h=320/f,u=.52-(c-v.left-d)/f,p=.52-(m-v.top-i)/g,y=m-v.top-i-g/2,E=c-v.left-d-f/2,C=(u-E)*(.07*h),I=(y-p)*(.1*h),N="rotateX("+I+"deg) rotateY("+C+"deg)",x=Math.atan2(y,E),b=180*x/Math.PI-90;0>b&&(b+=360),-1!=a.firstChild.className.indexOf(" over")&&(N+=" scale3d(1.07,1.07,1.07)"),a.firstChild.style.transform=N,o.style.background="linear-gradient("+b+"deg, rgba(255,255,255,"+(m-v.top-i)/g*.4+") 0%,rgba(255,255,255,0) 80%)",o.style.transform="translateX("+u*n-.1+"px) translateY("+p*n-.1+"px)";for(var L=n,S=0;n>S;S++)r[S].style.transform="translateX("+u*L*(2.5*S/h)+"px) translateY("+p*n*(2.5*S/h)+"px)",L--}function t(e,t){t.firstChild.className+=" over"}function a(e,t,a,r,n){var l=t.firstChild;l.className=l.className.replace(" over",""),l.style.transform="",n.style.cssText="";for(var s=0;r>s;s++)a[s].style.transform=""}var r=document,n=r.documentElement,l=r.getElementsByTagName("body")[0],s=r.getElementsByTagName("html")[0],o=window,i=r.querySelectorAll(".atvImg"),d=i.length,c="ontouchstart"in o||navigator.msMaxTouchPoints;if(!(0>=d))for(var m=0;d>m;m++){var v=i[m],f=v.querySelectorAll(".atvImg-layer"),g=f.length;if(!(0>=g)){for(;v.firstChild;)v.removeChild(v.firstChild);var h=r.createElement("div"),u=r.createElement("div"),p=r.createElement("div"),y=r.createElement("div"),E=[];v.id="atvImg__"+m,h.className="atvImg-container",u.className="atvImg-shine",p.className="atvImg-shadow",y.className="atvImg-layers";for(var C=0;g>C;C++){var I=r.createElement("div"),N=f[C].getAttribute("data-img");I.className="atvImg-rendered-layer",I.setAttribute("data-layer",C),I.style.backgroundImage="url("+N+")",y.appendChild(I),E.push(I)}h.appendChild(p),h.appendChild(y),h.appendChild(u),v.appendChild(h);var x=v.clientWidth||v.offsetWidth||v.scrollWidth;v.style.transform="perspective("+3*x+"px)",c?(o.preventScroll=!1,function(r,n,l,s){v.addEventListener("touchmove",function(t){o.preventScroll&&t.preventDefault(),e(t,!0,r,n,l,s)}),v.addEventListener("touchstart",function(e){o.preventScroll=!0,t(e,r)}),v.addEventListener("touchend",function(e){o.preventScroll=!1,a(e,r,n,l,s)})}(v,E,g,u)):!function(r,n,l,s){v.addEventListener("mousemove",function(t){e(t,!1,r,n,l,s)}),v.addEventListener("mouseenter",function(e){t(e,r)}),v.addEventListener("mouseleave",function(e){a(e,r,n,l,s)})}(v,E,g,u)}}}
