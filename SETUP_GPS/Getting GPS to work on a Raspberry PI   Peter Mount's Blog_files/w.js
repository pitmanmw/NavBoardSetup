window.wpcom=window.wpcom||{};window._tkq=window._tkq||[];window._stq=window._stq||[];function st_go(a){window._stq.push(['view',a]);};function ex_go(a){window._stq.push(['extra',a]);};function re_go(a){window._stq.push(['raw',a]);};function linktracker_init(b,p){window._stq.push(['clickTrackerInit',b,p]);};if(!Array.prototype.forEach){Array.prototype.forEach=function(fn,scope){for(var i=0,l=this.length;i<l;i++){fn.call(scope||this,this[i],i,this);}};}
window.wpcom.stats=(function(){var _clickTracker=(function(){var _blog,_post;var _addEvent=function(el,t,cb){if('function'===typeof el.addEventListener){el.addEventListener(t,cb);}else if('object'===typeof el.attachEvent){el.attachEvent('on'+t,cb);}};var _getClickTarget=function(e){if('object'===typeof e&&e.target){return e.target;}else{return window.event.srcElement;}};var _clickTrack=function(e){var d=0;if('object'===typeof InstallTrigger)d=100;if(7===_getIEVer())d=100;_processLink(_getClickTarget(e),d);};var _contextTrack=function(e){_processLink(_getClickTarget(e),0);};var _ignoreAnchor=function(a){var p=a;while('BODY'!==p.nodeName){if('wpcombar'===p.id)return true;if('wpadminbar'===p.id)return true;if('wpadvert'===p.className)return true;if(p.className.indexOf('wpcom-masterbar')>-1)return true;if('undefined'===typeof p.nodeName)return true;if('object'!==typeof p.parentNode)return true;p=p.parentNode;};return false;};var _isSameHost=function(a){var l=document.location;if(l.host===a.host)return true;if(''===a.host)return true;if(l.protocol===a.protocol&&l.host===a.hostname){if('http:'===l.protocol&&l.host+':80'===a.host)return true;if('https:'===l.protocol&&l.host+':443'===a.host)return true;};return false;};var _processLink=function(a,d){try{if('object'!==typeof a)return;while('A'!==a.nodeName){if('undefined'===typeof a.nodeName)return;if('object'!==typeof a.parentNode)return;a=a.parentNode;};if(_isSameHost(a))return;if('javascript:'===a.protocol)return;if(_ignoreAnchor(a))return;window._stq.push(['click',{u:a.href,r:('undefined'!==typeof a.rel)?a.rel:'0',b:('undefined'!==typeof _blog)?_blog:'0',p:('undefined'!==typeof _post)?_post:'0'}]);if(d){var now=new Date();var end=now.getTime()+d;while(true){now=new Date();if(now.getTime()>end){break}}}}catch(e){}};var API={init:function(b,p){_blog=b;_post=p;if(document.body){_addEvent(document.body,'click',_clickTrack);_addEvent(document.body,'contextmenu',_contextTrack);}else if(document){_addEvent(document,'click',_clickTrack);_addEvent(document,'contextmenu',_contextTrack);}}};return API;})();var _getIEVer=function(){var v=0;if('object'===typeof navigator&&navigator.appName=='Microsoft Internet Explorer'){var m=navigator.userAgent.match(/MSIE ([0-9]{1,})[\.0-9]{0,}/);if(null!==m){v=parseInt(m[1]);}};return v;};var _serialize=function(o){var p,q=[];for(p in o){if(o.hasOwnProperty(p)){q.push(encodeURIComponent(p)+'='+encodeURIComponent(o[p]));}};return q.join('&');};var _loadGif=function(t,q,id){var i=new Image();i.src=document.location.protocol+'//pixel.wp.com/'+t+'?'+q+'&rand='+Math.random();if('string'===typeof id&&document.body){i.id=id;document.body.appendChild(i);}};var STQ=function(q){this.a=1;if(q&&q.length){for(var i=0;i<q.length;i++){this.push(q[i]);}}};STQ.prototype.push=function(args){if(args){if("object"===typeof args&&args.length){var cmd=args.splice(0,1);if(API[cmd])API[cmd].apply(null,args);}else if("function"===typeof args){args();}}};var initQueue=function(){if(!window._stq.a){window._stq=new STQ(window._stq);}};var API={view:function(o){o.host=document.location.host;o.ref=document.referrer;_loadGif('g.gif',_serialize(o),'wpstats');},extra:function(o){o.v='wpcom-no-pv';_loadGif('g.gif',_serialize(o),false);},raw:function(o){_loadGif('g.gif',_serialize(o),false);},click:function(o){_loadGif('c.gif',_serialize(o),false);},clickTrackerInit:function(b,p){_clickTracker.init(b,p);}};if(6===_getIEVer()&&'complete'!==document.readyState&&'object'===typeof document.attachEvent){document.attachEvent('onreadystatechange',function(e){if('complete'===document.readyState)window.setTimeout(initQueue,250);});}else{initQueue();};return API;})();window.wpcom.tracks=(function(){var userId,userIdType,userLogin,localCache={},context={},pixel='//pixel.wp.com/t.gif',cookieDomain=null,cookiePrefix='tk_',testCookie='tc',userNameCookie='ni',userAnonCookie='ai',queriesCookie='qs',queriesTTL=1800,queriesPending={};var TKQ=function(q){this.a=1;if(q&&q.length){for(var i=0;i<q.length;i++){this.push(q[i]);}}};TKQ.prototype.push=function(args){if(args){if("object"==typeof args&&args.length){var cmd=args.splice(0,1);if(API[cmd])API[cmd].apply(null,args);}else if("function"==typeof args){args();}}};var initQueue=function(){if(!window._tkq.a){retryQueries();window._tkq=new TKQ(window._tkq);}};var clone=function(obj,target){if(obj==null||'object'!==typeof obj)
return obj;if(target==null||'object'!==typeof target)
target=obj.constructor();for(var key in obj){if(obj.hasOwnProperty(key)){target[key]=clone(obj[key]);}}
return target;};var bot=function(){return!!navigator.userAgent.match(/bingbot|bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\-webcrawler|converacrawler|dataparksearch|findlinks|crawler|Netvibes|Sogou Pic Spider|ICC\-Crawler|Innovazion Crawler|Daumoa|EtaoSpider|A6\-Indexer|YisouSpider|Riddler|DBot|wsr\-agent|Xenu|SeznamBot|PaperLiBot|SputnikBot|CCBot|ProoXiBot|Scrapy|Genieo|Screaming Frog|YahooCacheSystem|CiBra|Nutch/);};var serialize=function(obj){var str=[];for(var p in obj){if(obj.hasOwnProperty(p)){str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));}}
return str.join("&");};var send=function(query){loadIdentity();retryQueries();query._ui=userId;query._ut=userIdType;if(userLogin){query._ul=userLogin;}
var date=new Date();query._ts=date.getTime();query._tz=date.getTimezoneOffset()/60;var nav=window.navigator;var screen=window.screen;query._lg=nav.language;query._pf=nav.platform;query._ht=screen.height;query._wd=screen.width;var sx=(window.pageXOffset!==undefined)?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;var sy=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;query._sx=(sx!==undefined)?sx:0;query._sy=(sy!==undefined)?sy:0;if(document.location!==undefined){query._dl=document.location.toString();}
if(document.referrer!==undefined){query._dr=document.referrer;}
clone(context,query);getPixel(serialize(query));};var getPixel=function(query){if(!bot()){if(query in queriesPending){return;}
queriesPending[query]=true;var img=new Image();saveQuery(query);img.query=query;img.onload=function(){delete queriesPending[query];if(img){removeQuery(img.query);}};img.src=pixel+'?'+query+'&_rt='+(new Date).getTime()+'&_=_';}};var saveQuery=function(query){removeQuery(query);var queries=getQueries();queries.push(query);saveQueries(queries);};var saveQueries=function(queries){while(queries.join(" ").length>2048){queries=queries.slice(1);}
set(queriesCookie,queries.join(" "),queriesTTL);};var removeQuery=function(query){var i,toSave=[],queries=getQueries();for(i=0;i<queries.length;++i){if(query!=queries[i]){toSave.push(queries[i]);}}
saveQueries(toSave);};var getQueries=function(){var queries=get(queriesCookie);return queries?queries.split(' '):[];};var retryQueries=function(){getQueries().forEach(getPixel);};var newAnonId=function(){var randomBytesLength=18,randomBytes=[];if(window.crypto&&window.crypto.getRandomValues){randomBytes=new Uint8Array(randomBytesLength);window.crypto.getRandomValues(randomBytes);}else{for(var i=0;i<randomBytesLength;++i){randomBytes[i]=Math.floor(Math.random()*256);}}
return btoa(String.fromCharCode.apply(String,randomBytes));}
var get=function(key){return getCookie(key)||localCache[key];};var set=function(key,value,ttl){localCache[key]=value;setCookie(key,value,ttl);};var getCookie=function(key){var name=cookiePrefix+encodeURIComponent(key).replace(/[\-\.\+\*]/g,"\\$&"),pattern=new RegExp("(?:(?:^|.*;)\\s*"+name+"\\s*\\=\\s*([^;]*).*$)|^.*$");return decodeURIComponent(document.cookie.replace(pattern,"$1"))||null;};var checkCookieDomain=function(domain){var time=(new Date).getTime();document.cookie=cookiePrefix+testCookie+"="+time+"; domain="+domain+"; path=/;";return getCookie(testCookie)==time;};var getCookieDomain=function(){if(cookieDomain==null){cookieDomain='';var host=document.location.host.toLowerCase().split(':')[0],tokens=host.split('.'),tryDomain;if(typeof TRACKS_COOKIE_DOMAIN!="undefined"){cookieDomain=TRACKS_COOKIE_DOMAIN;}else{for(var i=1;i<=tokens.length;++i){tryDomain='.'+tokens.slice(-i).join('.');if(checkCookieDomain(tryDomain)){cookieDomain=tryDomain;break;}}}
if(cookieDomain!=''){cookieDomain="; domain="+cookieDomain;}}
return cookieDomain;};var setCookie=function(key,value,seconds){var name=cookiePrefix+encodeURIComponent(key),date=new Date();if('undefined'===typeof seconds){seconds=15768E4;}
date.setTime(date.getTime()+seconds*1E3);document.cookie=name+"="+encodeURIComponent(value)+
getCookieDomain()+"; path=/; expires="+date.toUTCString();};var recordEvent=function(eventName,eventProps){if('_setProperties'===eventName){return;}
eventProps=eventProps||{};eventProps._en=eventName;send(eventProps);};var identifyUser=function(newUserId,newUserLogin){if(newUserLogin){userLogin=newUserLogin;}
if(userId===newUserId){return;}
userId=newUserId;userIdType='wpcom:user_id';set(userNameCookie,userId);var anonId=get(userAnonCookie);if(anonId){send({_en:'_aliasUser',anonId:anonId});}
set(userAnonCookie,"",-1);};var clearIdentity=function(){userId=null;userLogin=null;set(userNameCookie,'',-1);set(userAnonCookie,'',-1);loadIdentity();};var setProperties=function(properties){properties._en='_setProperties';send(properties);};var loadIdentity=function(){if(userId){return;}
userId=loadWpcomIdentity();if(userId){userIdType='wpcom:user_id';}else{userIdType='anon';userId=get(userAnonCookie);if(!userId){userId=newAnonId();set(userAnonCookie,userId);}}};var loadWpcomIdentity=function(){var wpcomCookie=getCookie('wordpress')||getCookie('wordpress_sec')||getCookie('wordpress_loggedin');if(wpcomCookie){return get(userNameCookie);}};var storeContext=function(c){if('object'!==typeof c){return;}
context=c;};var API={storeContext:storeContext,identifyUser:identifyUser,recordEvent:recordEvent,setProperties:setProperties,clearIdentity:clearIdentity};initQueue();return API;})();