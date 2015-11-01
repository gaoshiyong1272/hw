/*
 * GSY执行脚本
 * author:gaoshiyong<gaoshiyong1272@vip.163.com>
 * jQuery版本必须在1.42以上
 */

/**
 * [description] 语言包内容
 * @return {[type]} [description]
 */
LANG = window.LANG || {};


//中文简体
LANG.cn = window.LANG.cn || {};
LANG.cn['loading']                             		= '加载中';
LANG.cn['load_tips']                             	= '加载中，请稍后…';
LANG.cn['inter_url']                             	= '请输入请求地址！';
LANG.cn['char']                             		= '字符';
LANG.cn['back_to_top']                           	= '返回顶部';
LANG.cn['you_can_inter_char']                       = '您可以输入@=@char@=@个字';
LANG.cn['your_input_has_exceeded']                  = '您的输入已经超过了@=@char@=@字';
LANG.cn['upload_image_type_error']                  = '上传文件格式有误，请重新上传！';
LANG.cn['upload_image_time_out']                  	= '上传文件超时，请重试！';




/**
 * [description] 加载JOSN组件(JSON.stringify(JSON),JSON.parse(str))
 * @return {[type]} [description]
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3(5 p!==\'w\'){p={}}(6(){\'1y 1z\';6 f(n){7 n<10?\'0\'+n:n}3(5 11.m.q!==\'6\'){11.m.q=6(){7 1e(o.W())?o.1L()+\'-\'+f(o.1I()+1)+\'-\'+f(o.1H())+\'T\'+f(o.1q())+\':\'+f(o.1D())+\':\'+f(o.1C())+\'Z\':x};J.m.q=1B.m.q=1A.m.q=6(){7 o.W()}}y e,A,8,C,N,l;6 L(b){A.1h=0;7 A.M(b)?\'"\'+b.G(A,6(a){y c=N[a];7 5 c===\'H\'?c:\'\\\\u\'+(\'17\'+a.18(0).O(16)).1c(-4)})+\'"\':\'"\'+b+\'"\'}6 z(a,b){y i,k,v,h,B=8,9,2=b[a];3(2&&5 2===\'w\'&&5 2.q===\'6\'){2=2.q(a)}3(5 l===\'6\'){2=l.I(b,a,2)}1x(5 2){E\'H\':7 L(2);E\'P\':7 1e(2)?J(2):\'x\';E\'1w\':E\'x\':7 J(2);E\'w\':3(!2){7\'x\'}8+=C;9=[];3(Q.m.O.1v(2)===\'[w 1u]\'){h=2.h;D(i=0;i<h;i+=1){9[i]=z(i,2)||\'x\'}v=9.h===0?\'[]\':8?\'[\\n\'+8+9.K(\',\\n\'+8)+\'\\n\'+B+\']\':\'[\'+9.K(\',\')+\']\';8=B;7 v}3(l&&5 l===\'w\'){h=l.h;D(i=0;i<h;i+=1){3(5 l[i]===\'H\'){k=l[i];v=z(k,2);3(v){9.1d(L(k)+(8?\': \':\':\')+v)}}}}U{D(k 1f 2){3(Q.m.1g.I(2,k)){v=z(k,2);3(v){9.1d(L(k)+(8?\': \':\':\')+v)}}}}v=9.h===0?\'{}\':8?\'{\\n\'+8+9.K(\',\\n\'+8)+\'\\n\'+B+\'}\':\'{\'+9.K(\',\')+\'}\';8=B;7 v}}3(5 p.V!==\'6\'){A=/[\\\\\\"\\1t-\\1s\\1F-\\1r\\1m\\1n-\\1o\\1p\\1l\\1k\\1j-\\1i\\1b-\\1a\\19-\\15\\Y\\X-\\12]/g;N={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'};p.V=6(a,b,c){y i;8=\'\';C=\'\';3(5 c===\'P\'){D(i=0;i<c;i+=1){C+=\' \'}}U 3(5 c===\'H\'){C=c}l=b;3(b&&5 b!==\'6\'&&(5 b!==\'w\'||5 b.h!==\'P\')){14 13 1E(\'p.V\');}7 z(\'\',{\'\':a})}}3(5 p.R!==\'6\'){e=/[\\1G\\1m\\1n-\\1o\\1p\\1l\\1k\\1j-\\1i\\1b-\\1a\\19-\\15\\Y\\X-\\12]/g;p.R=6(c,d){y j;6 S(a,b){y k,v,2=a[b];3(2&&5 2===\'w\'){D(k 1f 2){3(Q.m.1g.I(2,k)){v=S(2,k);3(v!==1J){2[k]=v}U{1K 2[k]}}}}7 d.I(a,b,2)}c=J(c);e.1h=0;3(e.M(c)){c=c.G(e,6(a){7\'\\\\u\'+(\'17\'+a.18(0).O(16)).1c(-4)})}3(/^[\\],:{}\\s]*$/.M(c.G(/\\\\(?:["\\\\\\/1M]|u[0-1N-1O-F]{4})/g,\'@\').G(/"[^"\\\\\\n\\r]*"|1P|1Q|x|-?\\d+(?:\\.\\d*)?(?:[1R][+\\-]?\\d+)?/g,\']\').G(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=1S(\'(\'+c+\')\');7 5 d===\'6\'?S({\'\':j},\'\'):j}14 13 1T(\'p.R\');}}}());',62,118,'||value|if||typeof|function|return|gap|partial||||||||length||||rep|prototype||this|JSON|toJSON||||||object|null|var|str|escapable|mind|indent|for|case||replace|string|call|String|join|quote|test|meta|toString|number|Object|parse|walk||else|stringify|valueOf|ufff0|ufeff|||Date|uffff|new|throw|u206f||0000|charCodeAt|u2060|u202f|u2028|slice|push|isFinite|in|hasOwnProperty|lastIndex|u200f|u200c|u17b5|u17b4|u00ad|u0600|u0604|u070f|getUTCHours|x9f|x1f|x00|Array|apply|boolean|switch|use|strict|Boolean|Number|getUTCSeconds|getUTCMinutes|Error|x7f|u0000|getUTCDate|getUTCMonth|undefined|delete|getUTCFullYear|bfnrt|9a|fA|true|false|eE|eval|SyntaxError'.split('|'),0,{}));

/**
 * [description] base64解码
 * @return {[type]} [description] (Base64.encode(str),Base64.decode(str))
 */
if(typeof Base64 == 'undefined'){
	;(function(global){"use strict";if(global.Base64)return;var version="2.1.2";var buffer;if(typeof module!=="undefined"&&module.exports){buffer=require("buffer").Buffer}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64tab=function(bin){var t={};for(var i=0,l=bin.length;i<l;i++)t[bin.charAt(i)]=i;return t}(b64chars);var fromCharCode=String.fromCharCode;var cb_utob=function(c){if(c.length<2){var cc=c.charCodeAt(0);return cc<128?c:cc<2048?fromCharCode(192|cc>>>6)+fromCharCode(128|cc&63):fromCharCode(224|cc>>>12&15)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|cc&63)}else{var cc=65536+(c.charCodeAt(0)-55296)*1024+(c.charCodeAt(1)-56320);return fromCharCode(240|cc>>>18&7)+fromCharCode(128|cc>>>12&63)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|cc&63)}};var re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;var utob=function(u){return u.replace(re_utob,cb_utob)};var cb_encode=function(ccc){var padlen=[0,2,1][ccc.length%3],ord=ccc.charCodeAt(0)<<16|(ccc.length>1?ccc.charCodeAt(1):0)<<8|(ccc.length>2?ccc.charCodeAt(2):0),chars=[b64chars.charAt(ord>>>18),b64chars.charAt(ord>>>12&63),padlen>=2?"=":b64chars.charAt(ord>>>6&63),padlen>=1?"=":b64chars.charAt(ord&63)];return chars.join("")};var btoa=global.btoa||function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)};var _encode=buffer?function(u){return new buffer(u).toString("base64")}:function(u){return btoa(utob(u))};var encode=function(u,urisafe){return!urisafe?_encode(u):_encode(u).replace(/[+\/]/g,function(m0){return m0=="+"?"-":"_"}).replace(/=/g,"")};var encodeURI=function(u){return encode(u,true)};var re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g");var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=(7&cccc.charCodeAt(0))<<18|(63&cccc.charCodeAt(1))<<12|(63&cccc.charCodeAt(2))<<6|63&cccc.charCodeAt(3),offset=cp-65536;return fromCharCode((offset>>>10)+55296)+fromCharCode((offset&1023)+56320);case 3:return fromCharCode((15&cccc.charCodeAt(0))<<12|(63&cccc.charCodeAt(1))<<6|63&cccc.charCodeAt(2));default:return fromCharCode((31&cccc.charCodeAt(0))<<6|63&cccc.charCodeAt(1))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var cb_decode=function(cccc){var len=cccc.length,padlen=len%4,n=(len>0?b64tab[cccc.charAt(0)]<<18:0)|(len>1?b64tab[cccc.charAt(1)]<<12:0)|(len>2?b64tab[cccc.charAt(2)]<<6:0)|(len>3?b64tab[cccc.charAt(3)]:0),chars=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(n&255)];chars.length-=[0,0,2,1][padlen];return chars.join("")};var atob=global.atob||function(a){return a.replace(/[\s\S]{1,4}/g,cb_decode)};var _decode=buffer?function(a){return new buffer(a,"base64").toString()}:function(a){return btou(atob(a))};var decode=function(a){return _decode(a.replace(/[-_]/g,function(m0){return m0=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode};if(typeof Object.defineProperty==="function"){var noEnum=function(v){return{value:v,enumerable:false,writable:true,configurable:true}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)}));Object.defineProperty(String.prototype,"toBase64",noEnum(function(urisafe){return encode(this,urisafe)}));Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,true)}))}}})(this);
}


//创建组件
var GSY = window.GSY || {};



/**
 * [log 输出日志,支持原生console和alert输出日志]
 * @return 
 */
GSY.LOG = GSY.log = function() {
	if (typeof(console) == "object" && typeof(console.log) == "function") console.log.apply(console, arguments);
};





/**
 * [GSY.namespace 创建局部命名空间]
 * @param  {[sting]} ns [传入命名空间字符串]
 * @return {[object]}   [返回命名空间对象]
 */
GSY.namespace = function(ns) {
    if (!ns || !ns.length) return null;
	var levels = ns.split(".");
    var nsobj = GSY;
	for (var i=(levels[0] == "GSY") ? 1 : 0; i<levels.length; ++i) {
        nsobj[levels[i]] = nsobj[levels[i]] || {};
        nsobj = nsobj[levels[i]];
    }
	return nsobj;
};

/**
 * [GSY.md5 对字符串进行MD5加密]
 * @param  {[string]} s [需要加密的字符串]
 * @return {[string]}   [返回加密之后的字符串]
 */
GSY.namespace('GSY.md5');
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}(';(u(c){t b=0;t a="";t d=8;q.r.1F=u(e){v q.r.B(q.r.G(q.r.D(e),e.x*d))};q.r.G=u(p,k){p[k>>5]|=1D<<((k)%A);p[(((k+1G)>>>9)<<4)+14]=k;t o=1J;t n=-1K;t m=-1H;t l=1I;z(t g=0;g<p.x;g+=16){t j=o;t h=n;t f=m;t e=l;o=q.r.f(o,n,m,l,p[g+0],7,-1v);l=q.r.f(l,o,n,m,p[g+1],12,-1w);m=q.r.f(m,l,o,n,p[g+2],17,1x);n=q.r.f(n,m,l,o,p[g+3],22,-1A);o=q.r.f(o,n,m,l,p[g+4],7,-1B);l=q.r.f(l,o,n,m,p[g+5],12,1y);m=q.r.f(m,l,o,n,p[g+6],17,-1z);n=q.r.f(n,m,l,o,p[g+7],22,-1L);o=q.r.f(o,n,m,l,p[g+8],7,1V);l=q.r.f(l,o,n,m,p[g+9],12,-1X);m=q.r.f(m,l,o,n,p[g+10],17,-1Y);n=q.r.f(n,m,l,o,p[g+11],22,-24);o=q.r.f(o,n,m,l,p[g+12],7,25);l=q.r.f(l,o,n,m,p[g+13],12,-1Z);m=q.r.f(m,l,o,n,p[g+14],17,-1P);n=q.r.f(n,m,l,o,p[g+15],22,1N);o=q.r.g(o,n,m,l,p[g+1],5,-1T);l=q.r.g(l,o,n,m,p[g+6],9,-S);m=q.r.g(m,l,o,n,p[g+11],14,R);n=q.r.g(n,m,l,o,p[g+0],20,-Z);o=q.r.g(o,n,m,l,p[g+5],5,-V);l=q.r.g(l,o,n,m,p[g+10],9,J);m=q.r.g(m,l,o,n,p[g+15],14,-1c);n=q.r.g(n,m,l,o,p[g+4],20,-1e);o=q.r.g(o,n,m,l,p[g+9],5,1d);l=q.r.g(l,o,n,m,p[g+14],9,-1f);m=q.r.g(m,l,o,n,p[g+3],14,-1h);n=q.r.g(n,m,l,o,p[g+8],20,1g);o=q.r.g(o,n,m,l,p[g+13],5,-19);l=q.r.g(l,o,n,m,p[g+2],9,-18);m=q.r.g(m,l,o,n,p[g+7],14,1a);n=q.r.g(n,m,l,o,p[g+12],20,-1b);o=q.r.h(o,n,m,l,p[g+5],4,-1o);l=q.r.h(l,o,n,m,p[g+8],11,-1n);m=q.r.h(m,l,o,n,p[g+11],16,1p);n=q.r.h(n,m,l,o,p[g+14],23,-1r);o=q.r.h(o,n,m,l,p[g+1],4,-1q);l=q.r.h(l,o,n,m,p[g+4],11,1j);m=q.r.h(m,l,o,n,p[g+7],16,-1i);n=q.r.h(n,m,l,o,p[g+10],23,-1k);o=q.r.h(o,n,m,l,p[g+13],4,1m);l=q.r.h(l,o,n,m,p[g+0],11,-1l);m=q.r.h(m,l,o,n,p[g+3],16,-M);n=q.r.h(n,m,l,o,p[g+6],23,K);o=q.r.h(o,n,m,l,p[g+9],4,-L);l=q.r.h(l,o,n,m,p[g+12],11,-O);m=q.r.h(m,l,o,n,p[g+15],16,N);n=q.r.h(n,m,l,o,p[g+2],23,-H);o=q.r.i(o,n,m,l,p[g+0],6,-W);l=q.r.i(l,o,n,m,p[g+7],10,X);m=q.r.i(m,l,o,n,p[g+14],15,-U);n=q.r.i(n,m,l,o,p[g+5],21,-P);o=q.r.i(o,n,m,l,p[g+12],6,T);l=q.r.i(l,o,n,m,p[g+3],10,-Q);m=q.r.i(m,l,o,n,p[g+10],15,-Y);n=q.r.i(n,m,l,o,p[g+1],21,-I);o=q.r.i(o,n,m,l,p[g+8],6,1s);l=q.r.i(l,o,n,m,p[g+15],10,-1R);m=q.r.i(m,l,o,n,p[g+6],15,-1Q);n=q.r.i(n,m,l,o,p[g+13],21,1S);o=q.r.i(o,n,m,l,p[g+4],6,-1M);l=q.r.i(l,o,n,m,p[g+11],10,-1O);m=q.r.i(m,l,o,n,p[g+2],15,1U);n=q.r.i(n,m,l,o,p[g+9],21,-1W);o=q.r.s(o,j);n=q.r.s(n,h);m=q.r.s(m,f);l=q.r.s(l,e)}v E(o,n,m,l)};q.r.s=u(e,h){t g=(e&y)+(h&y);t f=(e>>16)+(h>>16)+(g>>16);v(f<<16)|(g&y)};q.r.w=u(j,g,f,e,i,h){v q.r.s(q.r.F(q.r.s(q.r.s(g,j),q.r.s(e,h)),i),f)};q.r.f=u(g,f,k,j,e,i,h){v q.r.w((f&k)|((~f)&j),g,f,e,i,h)};q.r.g=u(g,f,k,j,e,i,h){v q.r.w((f&j)|(k&(~j)),g,f,e,i,h)};q.r.h=u(g,f,k,j,e,i,h){v q.r.w(f^k^j,g,f,e,i,h)};q.r.i=u(g,f,k,j,e,i,h){v q.r.w(k^(f|(~j)),g,f,e,i,h)};q.r.B=u(g){t f=b?"1u":"1t";t h="";z(t e=0;e<g.x*4;e++){h+=f.C((g[e>>2]>>((e%4)*8+4))&15)+f.C((g[e>>2]>>((e%4)*8))&15)}v h};q.r.D=u(h){t g=E();t e=(1<<d)-1;z(t f=0;f<h.x*d;f+=d){g[f>>5]|=(h.1C(f/d)&e)<<(f%A)}v g};q.r.F=u(e,f){v(e<<f)|(e>>>(A-f))}})(1E);',62,130,'||||||||||||||||||||||||||GSY|md5||var|function|return|cmn|length|65535|for|32|binl2hex|charAt|str2binl|Array|bit_rol|core|995338651|2054922799|38016083|76029189|640364487|722521979|530742520|421815835|57434055|1894986606|643717713|1069501632|1700485571|1416354905|701558691|198630844|1126891415|1051523|373897302|||||||||51403784|1444681467|1735328473|1926607734|660478335|568446438|405537848|1019803690|1163531501|187363961|155497632|1272893353|1094730640|358537222|681279174|2022574463|378558|1839030562|1530992060|35309556|1873313359|0123456789abcdef|0123456789ABCDEF|680876936|389564586|606105819|1200080426|1473231341|1044525330|176418897|charCodeAt|128|jQuery|val|64|1732584194|271733878|1732584193|271733879|45705983|145523070|1236535329|1120210379|1502002290|1560198380|30611744|1309151649|165796510|718787259|1770035416|343485551|1958414417|42063|40341101|||||1990404162|1804603682'.split('|'),0,{}))




/**
 * 创建配置类对象
 */
GSY.namespace('GSY.config');
GSY.config._setting = {};


/**
 * [GSY.config.get description]  获取配置信息，如果没有找到该配置返回null
 * @param  {[string]} key [description] 配置名字
 * @return {[type]}     [description] 	返回配置信息(String)
 */
GSY.config.get = function(key) {
	return GSY.config._setting[key] ? GSY.config._setting[key] : null;
};


/**
 * [GSY.config.set description] 写入配置信息
 * @param {[string]} key   [description] 配置名字
 * @param {[string]} value [description] 配置信息
 */
GSY.config.set = function(key, value) {
	if ($.isPlainObject(key)) {
		$.extend(GSY.config._setting, key);
	} else {
		GSY.config._setting[key] = value;
	}
};

GSY.config.set('host',location.protocol + '//' + location.hostname + '/');
GSY.config.set('debug',true);
GSY.config.set('version','2014121001');
GSY.config.set('domain', function(){
	var domain = '';
	var arr = window.location.hostname.split('.');
	if(arr.slice(-1) == 'com'){
		domain = arr.slice(-2).join('.');
	}
	
	return domain;
}());



/**
 * 创建数组类对象
 */
GSY.namespace('GSY.arr');

/**
 * [unique description] 数组去重
 * @param  {[type]} arr [description] 参数类型为数组
 * @return {[type]}     [description]
 */
GSY.arr.unique = function(arr) {
	//判断是不是数组
	if (Object.prototype.toString.call(arr).toLowerCase() !== "[object array]") {	
		return;
	} 
	var h = {},
		n = [],
		len = arr.length;
	for (var i = 0; i < len; i++) {
		if (!h[arr[i]]) {
			h[arr[i]] = true;
			n.push(arr[i]);
		}
	}
	return n;
};

/**
 * [arrindexOf description] 返回指定元素在数组中首次出现的位置
 * @param  {[type]} arr [description] 数组
 * @param  {[type]} el  [description] 元素
 * @return {[type]}     [description]
 */
GSY.arr.indexOf = function(arr, el) {
	if (Array.prototype.indexOf) {
		return arr.indexOf(el)
	} else {
		for (var i = 0, len = arr.length; i < len; i++) {
			if (arr[i] === el) {
				return i;
			} 		
		}
		return -1;
	}
};

/**
 * [arr description] 返回最小值和最大值并返回该位置(只针对数字类型数组)
 * @param  {[array]} arr  [description] 需要操作的数组
 * @param  {[boolean]} type [description] 返回值状态   true（默认） - 最大值  false - 最小值 
 * @return {[object]}      [description]  返回json格式数据
 */
GSY.arr.minAndMax = function(arr , type){
	type = type == undefined ? true : type;
	var index , len = arr.length;
	if(type) var data = Math.max.apply({},arr);
	else var data = Math.min.apply({},arr);
	for(var i = 0 ; i < len; i++){
		if(arr[i] == data){ index = i; break; }
	}
	return {data : data , index : index}
};



/**
 * 创建工具类对象
 */
GSY.namespace('GSY.util');

/**
 * [getUrlParam description] 获取url地址或者指定字符串中参数,只获取链接地址中的第一次出现的key的值作为返回值
 * @param  {[string]} key  [description] 键值名称
 * @param  {[string]} stri [description]
 * @return {[type]}      [description]
 */
GSY.util.getUrlParam = function(key,str){
	var val = null;
	var tempStr = str == undefined ? window.location.search.substring(1) : str.split('?')[1];
	if(tempStr.length != 0){
		var arr = tempStr.split('&');
		var len = arr.length;
		for(i=0 ; i < len ; i++){
			if(arr[i].split('=')[0] == key){
				val = arr[i].split('=')[1];
				break;
			}
		}
	}
	return val;
};

//从浏览器中启用调试模式
if(GSY.util.getUrlParam('debug') == 1){
	GSY.config.set('debug',true);	
};


//关闭debug模式
if(GSY.util.getUrlParam('closeecho') == 1){
	GSY.config.set('debug',false);		
}




/**
 * [GSY.util.ajax description] 异步请求地址,假如是不同地址会强制跨域
 * @param options.url(String)  请求连接地址必选是完整的链接地址 （必选）
 * @param options.type (String) 请求类型 默认 - post
 * @param options.data(String)  请求参数 （可选）
 * @param options.textType (String)  返回数据类型 默认是json 支持格式为jQuery模式
 * @param options.success (function)  请求成功处理方法 （可选）
 * @param options.error (function)  请求失败处理方法（可选）
 * @return {[type]} [description]
 */
GSY.util.ajax = function(options){

	if(!options.url) {
		alert(OASGetLangVal('inter_url'));
		return;
	}

	//设置默认参数
	var definOpt = {
		url : null,
		type : 'post',
		dataType : 'json',
		data : {},
		success : null,
		error : null,
		timeout : 120000,
		cache : false
	} 

	//合并参数
	var opt = $.extend({},definOpt,options); 
	
	//设置请求方式
	opt.type = opt.type == 'get' ? 'GET' : 'POST';
	
	//判断是否为同域
	var host = location.protocol + '//' + location.hostname;
	var crossdomain = opt.url.substr(0, host.length) == host ? false : true;
	if(crossdomain) {
		if(opt.data.jsonpCallback) opt.jsonpCallback = opt.data.jsonpCallback;
		opt.type = 'GET';
		opt.dataType = "jsonp";
		opt.jsonp = "callback";
	}
	$.ajax(opt);
};


/**
 * [GSY.util.tab description] tab切换类操作
 * @param  {[string]} opt.eType   [description] 事件类型 hover 和 click  默认 click
 * @param  {[object]} opt.tabEleParent  [description] 	切换元素对象 
 * @param  {[object]} opt.contEleParent [description]   被切换元素对象
 * @param  {[string]} opt.css [description]   			切换当前元素样式
 * @param  {[type]} opt.callback [description]   		切换后回调方法
 */
GSY.util.tab = function(options){
	var defin = {
		eType : 'click',
		tabEleParent : null,
		contEleParent : null,
		css : 'active',
		callback : null,
		stop : true,
		actStop : true
	}
	var opt = $.extend({} , defin , options ? options : {});
	if(opt.eType != 'click' && opt.eType != 'hover' ) return;
	opt.tabEleParent.children()[opt.eType](function(e){
		if(opt.actStop && $(this).hasClass(opt.css)) return false;
		var index = $(this).index();
		$(this).addClass(opt.css).siblings().removeClass(opt.css);
		opt.contEleParent.children().eq(index).show().siblings().hide();
		if(typeof opt.callback == 'function' ) opt.callback(opt,$(this),opt.contEleParent.children().eq(index),opt.contEleParent.children().eq(index));
		if(opt.stop){
			e.stopPropagation();
			return false;	
		}
	});	
};


/**
 * [getEleData description] 解析元素属性特定字符串，并转换为特定对象格式返回
 * @param  {[object]} element [description]  元素对象
 * @param  {[string]} attr    [description]	 元素属性名称
 * @return {[object]}         [description]  返回json格式
 */
GSY.util.getEleData = function(element,attr){
	var json = {} , temp = [] , len , klen;
	var str = $(element).attr( attr ? attr : 'data-post');
	if(!str) return {};
	temp = str.split('&');
	len = temp.length;
	for(var i = 0; i < len ; i++){
		var a = temp[i].split('=');
		if(a.length > 2){
			var key = a[0];
			var arr = a.slice(1);
			var val = arr.join('=');
		}else{
			var key = a[0];
			var val = a[1];
		}
		json[key] = val;
	}
	return json;
};


/**
 * [getEleInfo description] 获取元素对象高，宽，坐标值,没有找对元素节点对象返回null
 * @param  {[object]} element 	[description] 	元素节点
 * @param  {[boolean]} outType 	[description] 	高度是否包含元素padding、margin、border
 * @return {[type]}         [description] 		返回json格式对象，包括（高，宽，坐标值信息）假如是window,返回滚动条高度
 */
GSY.util.getEleInfo = function(element,outType){
	outType = outType == undefined ? false :  outType;
	var json = {};
	if(element === undefined) element = $(window); 
	if($(element).length == 0) return {};
	if(element.get(0) == window){
		json.h = $(element).height();
		json.w = $(element).width();
		json.st = $(element).scrollTop();
		json.sl = $(element).scrollLeft();
	}else{
		if(outType) {
			json.h = $(element).outerHeight();
			json.w = $(element).outerWidth();
		}else{
			json.h = $(element).height();
			json.w = $(element).width();	
		}
	}
	if(element.get(0) == window) return json;
	json.t = Math.floor($(element).offset().top);
	json.l = Math.floor($(element).offset().left);
	return json;
};

/**
 * [countdown description] 倒计时(时间戳为精确到秒级时间)
 * @param  {[string]} curTime      [description] 服务器当前时间戳
 * @param  {[string]} startTime    [description] 服务器开始时间戳
 * @param  {[string]} endTime      [description] 服务器结束时间戳
 * @param  {[function]} callback   [description] 回调处理方法
 * @return {[object]}              [description] 返回时间对象 {d:0,h:0,m:0,s:0}或者 开始事件对象 或者 结束事件对象
 */
GSY.util.countdown = function(startTime,curTime,endTime,callback){
	var timeer = null;
	var day = 24*60*60;
	var hour = 60*60;
	var minute = 60;

	//转换时间戳
	var cur = new Date((typeof curTime == 'number' ? curTime : parseInt(curTime))*1000);
	var start = new Date((typeof startTime == 'number' ? startTime : parseInt(startTime))*1000);
	var end = new Date((typeof endTime == 'number' ? endTime : parseInt(endTime))*1000);
	
	var temp = curTime;
	var timeObj = {}; 
	timeer = setInterval(function(){

		//当倒计时结束时候处理
		if(temp > endTime){
			timeObj.code = 'end';
			timeObj.date = end;
			clearInterval(timeer);
		} 

		//当倒计时未开始是处理
		else if(temp < startTime){
			timeObj.code = 'unstart';
			timeObj.date = start;
			clearInterval(timeer);
		}

		//倒计时正常运行处理
		else{
			var surplus = endTime - temp;
			timeObj.code = 'start';
			timeObj.d = Math.floor(surplus/day);
			timeObj.h = Math.floor(surplus%day/hour);
			timeObj.m = Math.floor(surplus%day%hour/minute);
			timeObj.s = Math.floor(surplus%day%hour%minute);
		}

		if(typeof callback == 'function') callback(timeObj);
		temp++;
	},1000);
};


/**
 * [random description] 生成随机数
 * @param  {[number]} min [description] 生成最小数字
 * @param  {[number]} max [description] 生成最大数字
 * @return {[number]}     [description] 返回随机数
 */
GSY.util.random = function(min, max){
	var Range = max - min;
    var Rand = Math.random();
    return(min + Math.round(Rand * Range));
};



/**
 * [arr description] 添加数组类对象操作并兼容以前的对象
 * @return {[object]}
 */
GSY.util.arr = GSY.arr.minAndMax;
GSY.util.arrindexOf = GSY.arr.indexOf;
GSY.util.unique = GSY.arr.unique;




/**
 * [showBrowser description] 查看浏览器相关信息
 * @return {[type]} [description]
 */
GSY.util.browser = function(){
	if(GSY.util.getUrlParam('liulanqi')) {
		var maxNum = GSY.util.getUrlParam('num') ? parseInt(GSY.util.getUrlParam('num')) : 30;
		var i = 0,str = '';
		for(key in window.navigator){
			str += key +"==>" + window.navigator[key] + "\n";
			if(i > maxNum) break;
			i++;
		}
		alert(str);
	};
};
GSY.util.browser();



/**
 * [pasteEvents description]扩展jQuery粘贴事件
 * @param  {[Number]} delay [description] 延时时间
 * @return {[type]}       [description]
 */
$.fn.pasteEvents = function( delay ) {
	if (delay === undefined) delay = 300;
	return $(this).each(function() {
		var $el = $(this);
		$el.bind("paste", function() {
			$el.trigger("prepaste");
			setTimeout(function() { $el.trigger("postpaste"); }, delay);
		});

	});
};

/**
 * [paste description] 绑定复制粘贴事件
 * @param  {[Objcet - jQuery]} element [description] 文字输入框DOM对象
 * @return {[type]}         [description]
 */
GSY.util.paste = function(element,fn){
	if(!element.attr('data-paste')){
		element.attr('data-paste',true);
		$(element).bind("postpaste", function(){
			if(typeof fn == 'function') fn(element);
			else $(element).keyup();
		}).pasteEvents();	
	} 
};


/**
 * [fous description] 文本和文本域焦点事件
 * @param  {[Objcet]} element [description] 发生焦点事件源对象
 * @param  {[String]} string  [description] 初始字符串
 * @return {[type]}         [description]
 */
GSY.util.fous = function(element,string,color){
	color = color == undefined ? '#999' : color;
	GSY.util.paste(element);
	var val = $(element).val();
	if(val == string) $(element).val('').css('color','#444');
	else $(element).css('color','#444');
	$(element).blur(function(){
		var val = $(this).val();
		if(val == '') $(element).val(string).css('color',color);
	});
};



/**
 * [maxCharTips description] 错误闪烁效果
 * @param  {[Objcet]} element   [description] input和textarea 对象
 * @param  {[String]} tipsColor [description] 闪烁提示颜色值 （可选项）
 * @param  {[String]} Color     [description] 闪烁之后颜色值 （可选项）
 * @return {[type]}           [description]
 */
GSY.util.maxCharTips = function(element,tipsColor,Color){
	var c = typeof color != "undefined" ? color : '';
	var tc = typeof tipsColor != "undefined" ? tipsColor : '#f9cbcb';
	var flag = 6;
	var time = setInterval(function(){
		if(flag < 1) {clearInterval(time);return}
		if(flag%2 == 0) $(element).css('background', tc);
		else $(element).css('background',c);
		flag--
	},100);
	element.focus();
};



/**
 * [maxChar description] 设置文本域最大输入字符数（keyup事件）
 * @param  json.e(Object - jQuery)  文本对象
 * @param  json.p(String)  共用父节点选择器字串
 * @param  json.t(String)  提示数字元素节点选择器字串
 * @param  json.s(String)  可以发送按钮样式名字
 * @param  json.d(String)  验证不通过按钮样式名字
 * @param  json.b(String)  发送按钮选择器选择器字串
 * @param  json.a(Number)  不启用文本框高度自动增加模式 0 - 不启用
 * @param  json.c(function)  当字数没有超出设定值时调用该方法
 * @param  json.f(function)  当字数超出设定值时调用该方法
 * @return
 */
GSY.util.maxChar = function(options){

	var defin = {
		e : null,					//文本对象
		p : '.js_all_smail',		//共用父节点
		t : '.textTips',			//提示数字元素节点
		s : 'sr-btn-green' ,		//可以发送按钮样式
		d : 'sr-btn-disabled',		//验证不通过按钮样式
		b : '.gPostBtn',			//发送按钮选择器
		a : 0,						//0不启用文本框高度自动增加模式,
		c : null,					//当字数没有超出设定值时调用该方法
		f : null,					//当字数超出设定值时调用该方法
		n : true                   	//是否需要数字提示
	}

	var opt = $.extend({},defin,options);

	if(!opt.n) return;

	/**
	 * 字符处理
	 */
	var haddleStr = function(num,type){		
		if(type) var arr = OASGetLangVal('you_can_inter_char').split('@=@');
		else var arr = OASGetLangVal('your_input_has_exceeded').split('@=@');
		var len = arr.length;
		var str = '';
		if(!type) num = Math.abs(num);
		for(var i = 0 ; i < len ; i++){
			if(arr[i] == 'char') str += '<em>' + num + '</em>';
			else str += '<span>' + arr[i] + '</span>' ;
		}
		return str;
	};

	

	var parent = $(opt.e).closest(opt.p),btn = parent.find(opt.b),tips = parent.find(opt.t);
	var maxStr = $(opt.e).attr('maxlenth');
	var val = $.trim($(opt.e).val());
	
	//文本框为空处理
	if(val == '') {
		var html = haddleStr(maxStr,true);
		tips.html(html);
		btn.removeClass(opt.s).addClass(opt.d);
		$(opt.e).attr('sendpost',false);
		if(opt.a) GSY.util.txtAutoHeight($(opt.e),20);
		return;
	}

	var strlen = GSY.str.len(val);
	if(opt.a) GSY.util.txtAutoHeight($(opt.e),20);
	var surplusChar = maxStr - strlen;

	//当没有超过文本规定长度处理
	if(surplusChar >= 0){
		if(typeof opt.c === 'function') opt.c(opt,tips);
		var html = haddleStr(surplusChar,true);
		tips.html(html);
		btn.removeClass(opt.d).addClass(opt.s);
		$(opt.e).attr('sendpost',true);

	//当超过文本规定长度处理
	}else{
		if(typeof opt.c === 'function') opt.c(opt,tips);
		var html = haddleStr(surplusChar,false);
		tips.html(html).find('em').css({color : '#f00'});
		btn.removeClass(opt.s).addClass(opt.d);
		$(opt.e).attr('sendpost',false);
	}
};


/**
 * [txtAutoHeight description] 文本域自适应高度(keyup事件)
 * @param  {[type]} element   [description] 文本域对象
 * @param  {[type]} minHeight [description] 最小高度
 * @return {[type]}           [description]
 */
GSY.util.textearaAutoHeight = function(element,minHeight){
	var id = "#oas-textareaDiv";
	if($(id).length > 0) $(id).remove();
	var w = $(element).width();
	var line = $(element).css('line-height');
	if($(id).length == 0) {
		var html = $('<textarea class="oas-textarea" id="oas-textareaDiv" style="margin:0; padding:0; border:0; position:absolute;top:-9999px;left:-9999px;"></textarea>').css({width:w,height:minHeight});
		$('body').append(html);
	}else var html = $(id);
	html.val(element.val());
	var h = html.get(0).scrollHeight > minHeight ? html.get(0).scrollHeight : minHeight;
	$(element).css('height',h);
	element.unbind('blur').blur(function(){
		html.remove();
	});
};


/**
 * [loadCss description] 动态加载样式表并不会重复加载样式表(通过设置样式ID避免重复加载)
 * @param  {[string]} str [description]  样式表路径或者样式内容
 * @param  {[string]} id  [description]  样式表id （可选）
 * @param  {[boolean]} type  [description]  样式加载类型 false -> url加载方法  true -> 内嵌样式模式
 * @return {[type]}     [description]
 */
GSY.util.loadCssCount = 0;
GSY.util.loadCss = function(str,id,type){
	//加载类型
	type = !type ? false : true; 

	//设置id
	if(!id) id = 'link_' + GSY.util.loadCssCount;
	else id = id;

	//判断样式表是否存在
	if($('#'+id).length > 0) return; 

	//生成样式对象
	if(type){
		var style = document.createElement('style');
		style.type = "text/css";
		style.id = id;
		
		//IE  
		if(style.styleSheet){
        	style.styleSheet.cssText = str;  
    	
    	// w3c
    	} else {  
        	var cssText = document.createTextNode(str);  
        	style.appendChild(cssText);  
   		} 
	}else{
		var style = document.createElement('link');
		style.type = "text/css";
		style.rel = "stylesheet";
		style.id = id;
		style.charset = "utf-8";
		style.href = str
		
	}
	document.getElementsByTagName('head').item(0).appendChild(style);
	GSY.util.loadCssCount++;
};



/**
 * 创建字符类对象
 */
GSY.namespace('GSY.str');
/**
 * [encode description] 转义html中的标签<>符号]
 * @param  {[string]} html [description] 需要转义的html字符串
 * @return {[string]}      [description] 返回转义完成的html字符串
 */
GSY.str.encode = function(html){
	var newStr = '';
	newStr = html.replace(/\</g, '&lt;');
	newStr = newStr.replace(/\>/g, '&gt;');
	return newStr;	
};


/**
 * [filter description] 去掉HTML所有标签
 * @param  {[string]} html     [description] 需要过滤的HTML字符串
 * @param  {[string]} allowed  [description] 被允许通过的一个或多个标签字符串'<b><div><i>'
 * @return {[type]}         [description]
 */
GSY.str.filter = function (html, allowed) {
	var allowed =  allowed == undefined  ? '' : allowed;
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return html.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
};


/**
 * [len description] 获取字符长度 , 英文长度为1，汉字长度为2
 * @param  {[boolean]} type [description] false - 返回英文模式长度(默认)  true - 返回汉字模式长度
 * @return {[type]}      [description]
 */
GSY.str.len = function(str,type){
	var flag = type == undefined ? false : type;
	var count= 0;
	for(var i = 0; i < str.length; i++) {
		if(str.charCodeAt(i) > 255) {
			count += 2
		} else {
			count++
		}
	}
	if(!flag) return count;
	if(Math.round(count/2) == 1) var strlenth = 1;
	else var strlenth = Math.round(count/2);
	return strlenth;
};


/**
 * [cut description] 指定截取字符串长度(区分中英文)
 * @param  {[string]} str [description] 需要截取的字符串
 * @param  {[number]} len [description] 需要截取的字符长度
 * @param  {[number]} type [description] 需要截取的字符长度
 * @return {[type]}     [description] 新的字符串长度
 */
GSY.str.cut = function(str,len,type) {
	var wlen = GSY.str.len(str,false), newstr = '';
	if(type != undefined) var fix = '...';
	else  var fix = '';
	if(wlen > len){
		var c = str.replace(/&/g, " ").replace(/[^\x00-\xff]/g, "&&");
		newstr = str.slice(0, c.slice(0, len).replace(/&&/g, " ").replace(/&/g, "").length) + fix;
	}else {
		newstr = str;
	}
	return newstr;
};



/**
 * [deEncode description] 给指定的字符串长进行编码或者解码
 * @param  {[string]} str  [description] 需要编码或者解码的字符串
 * @param  {[boolean]} type [description] 编码或者解码  false（默认）: 解码   true : 编码
 * @return {[string]}      [description] 返回编码或解码后的新字符串
 */
GSY.str.deEncode = function(str,type){
	var flag = type == undefined ? false : type;
	var newStr = '';
	if(flag){
		newStr = encodeURIComponent(str);
		newStr = newStr.replace(/\*/g, '%2A');
		newStr = newStr.replace(/\!/g, '%21');
		newStr = newStr.replace(/\(/g, '%28');
		newStr = newStr.replace(/\)/g, '%29');
		newStr = newStr.replace(/\'/g, '%27');
	}else{
		newStr = decodeURIComponent(str);
	};
	return newStr;
};

/**
 * 创建cookie对象
 */
GSY.namespace('GSY.cookie');

/**
 * [get description] 读取cookie值
 * @param  {[string]} key     [description] cookie键值名称
 * @param  {[object]} options [description] cookie可选对象
 * @return {[string]}         [description] 返回cookie键值所对应的的值，没有值返回null
 */
GSY.cookie.get = function (key, options) {
	options = options || {};
	var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
	return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

/**
 * [remove description] 删除指定键值所对应的cookie值
 * @param  {[type]} key     [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
GSY.cookie.remove = function (key,options) {
	GSY.cookie.set(key, null , options ? options : {});
};


/**
 * [set description] 添加指定名称cookie值 , 过期时间小时制
 * @param {[type]} key   [description]
 * @param {[type]} value [description]
 * @param {[type]} opt   [description] cookie相关属性，
 */
GSY.cookie.set = function (key, value, options) {
	options = $.extend({},{
    	domain : '',
    	path : '/'
    }, options);

	//删除cookie操作处理
    if (value === null) {
        options.expires = -1;
    }

    //设置过期时间
    if (typeof options.expires === 'number') {
		var seconds = options.expires, t = options.expires = new Date();
        t.setTime(t.getTime() + seconds*1000*60*60);
    }

    //强制转换为字符串格式
    value = '' + value;

    //设置cookie信息
    return (document.cookie = [
        encodeURIComponent(key), '=',
        options.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '',
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
    ].join(''));
};


/**
 * [description] 绑定input 和 textarea 焦点和失去焦点事件
 * @return {[type]} [description]
 */
;(function(){
	var foucsCss = 'blur';
	$('input[data-type=blur],textarea[data-type=blur],select[data-type=blur]').focus(function(e) {
		$(this).addClass(foucsCss);
	}).blur(function(e) {
		$(this).removeClass(foucsCss);
	});;
})();


/**
 * [description] 计算table奇偶样式
 * @return {[type]} [description]
 */
;(function(){
	var table = $('.oas-table');
	if(table.length == 0) return;

	//设置table元素奇偶样式
	var setCss = function(element){
		element.find('tr').each(function(index, el) {
			if(index%2 !== 0) $(this).addClass('bg');		
		});
	}

	//循环所有table元素
	table.each(function(index, el) {
		setCss($(this));		
	});
})();


/**
 * 创建其他类型对象
 */
GSY.namespace('GSY.other');


/**
 * [windowMask description] 窗帘式滑动效果
 * @param  {[object]} options [description] 相关选项
 * @return {[type]}         [description]
 */
GSY.other.windowMask = function(options){
	(function(){

		//初始化值
		var defined = {
			parent : null,	//鼠标需要滑动元素父节点
			hide : null,  	//隐藏元素对象选择器名称
			speed : 200 , 	//窗帘式滑动动画速度
			delay : 200   	//鼠标滑过延时时间
		} , timeer = null , animateflag = false;

		//合并选项卡
		var opt = $.extend({} , defined , options ? options : {});
		if ($(opt.parent).length == 0) return;

		//判断hide选择器是否出现"."
		opt.hide = /^\.[a-zA-Z$]{1}\S*$/.test(opt.hide) ? opt.hide : '.' + opt.hide;

		//动画处理方法
		var animate = function(el,type){
			el.animate({bottom: type}, opt.speed);
			timeer = null;
			animateflag = true
		}

		//鼠标滑过事件处理
		$(opt.parent).hover(function(){
			var hide = $(this).find(opt.hide);
			timeer = setTimeout(function(){
				animate(hide,-1);
			},opt.delay);
		},function(){
			var hide = $(this).find(opt.hide);
			
			//当动画还未执行，就离开当前元素了，需要停止定时器
			if(timeer) {
				clearTimeout(timeer);
				timeer = null;
			}

			//假如动画已经执行，鼠标离开需要会原点
			if(animateflag) {
				animate(hide,-(hide.outerHeight(true) + 3));
				animateflag = false;
			}
		});
	})(options);
};



/**
 * 弹窗组件效果操作方法
 * @param
 * @return
 */
;(function($){
	var _zindex = 5000; //5000;
	var _count = 0;
	var _over = true;
	var dialogNoRemoveSave = {}  //存储实例化对象模型
	var _load = '<div class="cxg-dialog-load"><p></p></div>';
	var _lastDialog = null;
	var _defaults = {
	    id : false,				
	    title : '窗口模式',
	    showClose : true,
	    time : 0,
	    mask : true,
	    width : 350,
	    element : null,
	    btn : null,
	    btnAlign : 'right',
	    align : 'center',
	    drag : true,
	    fixTop : 0,
	    checkLogin : false,
	    remove : true,
	    dir : 'down',
	    css : 'dialogCss',
	    icoAlign : 'center',
	    eType : 'show',
	    active : 0,
	    actCss : 'active',
	    hideTitle : false,
		tpl : 'card_html',
	    shortcut : true,
	    type : 'post',
		arrow : null,
		loadType : null,
		maskbg : '#000',
		css : '',
		staticHost : ''
	};



    //创建事件代理元素对象
    var _BtnEleHtml = '<div style="display:none"></div>';

    //构造方法
	var fDialog = function(content,options){
		this.options = $.extend({},_defaults,options);
		this.content = content;									//存储当前对话框内容部分
		this.count = _count;									//存储当前对话框计算器
		this.zIndex = _zindex									//存储当前对话框层级关系
		this.getBtnEleId = 'definElemenetDiv_' + this.count;  	//创建代理按钮id名称
		this.getBtnEle = null;									//存储代理按钮或者触发按钮对象
		this.dialogBox = null;									//存储弹层对象
		this.dialogBoxId = null;								//存储弹层对象ID
		this.dialogCont = null;									//存储弹层内容区域对象
		this.dialogContHeight = null;							//存储弹层内容区域高度
		this.dialogClose = null;								//存储弹层关闭按钮对象
		this.dialogTitle = null;								//存储弹层标题对象
		this.maskELement = null;								//存储弹层遮罩层对象
		this.timeHider = null;									//存储定时器句柄
		this.saveRet = null;									//存储后台返回值
		this.bodyHeight = 0;
	}

	//方法扩展
	fDialog.prototype = {
		
		/**
		 * [autoClose description] 自动关闭按钮处理方法
		 * @param  {[type]} element [description]
		 * @return {[type]}         [description]
		 */
		autoClose : function(){
			var that = this;
			if(this.options.time !== 0) {
				that.timeHider = setTimeout(function(){
					that.close();
				},this.options.time);
			}	
		},
		
		//当窗口弹出事件为隐藏的时候处理方法
		tower : function(){
			var count = this.options.element.attr('data-count');

			//获取当前触发对象实例化
			that = dialogNoRemoveSave['cxg-dialog-cont-' + count];
			that.maskDiv();
			that.setDialogStyle();
		},
		
		/**
		 * [init description] 初始化窗口操作
		 * @return {[type]} [description]
		 */
		init : function(){
			var that = this; 

			//层级计算器
			_zindex++;
			_count++;

			//给窗口设置关联数字
			this.getBtnEle.attr('data-count',this.count);

			//给窗口设置基础样式和存储结构各个对象
			this.dialogBox = $(this[this.options.tpl]()).css({'width':this.options.width,'z-index': this.zIndex}).addClass('cxg-dialog-tips').focus();
			this.dialogBoxId = this.options.id ? this.options.id : ('cxg-dialog-' + this.count);
			this.dialogBox.attr({id:this.dialogBoxId,'data-count':this.count});
			this.dialogCont = this.dialogBox.find('.cxg-dialog-content');
			this.dialogClose = this.dialogBox.find('.cxg-close a');
			this.dialogTitle = this.dialogBox.find('.cxg-title-c');

			//内容初始化
			if(that.content && this.options.loadType){
				this.dialogCont[this.options.loadType](that.content);
			} else {
				this.dialogCont.html(that.content);
			}

			//是否开启窗口标题显示
			if(that.options.hideTitle) this.dialogBox.find('.cxg-title').hide();
			else this.dialogBox.find('.cxg-title-c').html(that.options.title);

			//初始化关闭按钮
			this.dialogClose.attr('data-count',that.count);
			if(!that.options.showClose) this.dialogClose.hide();

			//是否启用ESC键关闭窗口
			if(this.options.shortcut){
				$(document).unbind('keydown').keydown(function(e){
					if(e.which == ' 27'){
						that.close();
					};			
				});
			}

			//设置页面发生改变的时候处理方法
			this.resize();

			//插入页面
			$('body').append(this.dialogBox);

			//初始化绑定事件
			this.closeCode();

			//绑定页面发生变化处理
			this.bodyHeightScroll();
		},

		/**
		 * [getElement description] 获取触发按钮元素对象或者创建事件代理元素对象
		 * @return {[type]} [description]
		 */
		getElement : function(){
			
			//当用户未传入触发按钮对象处理，创建对象返回对象
			if(!this.options.element || this.options.element.get(0) == window){
				//当用户没有传输触发按钮对象的时候，关闭对话框方式强制转化为销毁对话框方式
				this.options.remove = true;
				var el = $(_BtnEleHtml).attr('id',this.getBtnEleId);
				$('body').append(el);
				this.getBtnEle = el;
			
			//当用户传入触发按钮对象处理，直接返回对象
			}else{
				this.getBtnEle = this.options.element;	
			}
		}, 

		/**
		 * [close description] 关闭方法
		 * @return {[type]} [description]
		 */
		close : function(){
			this.dialogClose.click();
		},
		
		/**
		 * [closeCode description] 绑定关闭事件
		 * @return {[type]}
		 */
		closeCode : function(){
			var that = this;

			//手动关闭处理方法
			this.dialogClose.click(function(e){
				
				//取消自动关闭定时器
				if(that.timeHider) {
					clearTimeout(that.timeHider);
					that.timeHider = null;
				}

				//绑定关闭回调函数
				that.options.that = that;
				if(typeof that.options.closeCallback == 'function') that.options.closeCallback(that.dialogBox,that.options,that.saveRet);
				
				//是否销毁窗口和遮罩层
				if(that.options.url && !that.saveRet) that.options.remove = true; 
				if(that.options.remove) {
					that.getBtnEle.removeAttr('data-count');
					that.dialogBox.remove();
					if(that.maskELement) {
						that.options.mask = false;
						that.maskELement.remove();}
				}else {
					that.dialogBox.hide();
					if(that.maskELement) that.maskELement.hide();
				}

				//如果是动态生成的事件代理节点，直接销毁
				if($('#' + that.getBtnEleId).length >= 0) {
					$('#' + that.getBtnEleId).remove();	
				}

				//销毁窗体改变事件
				if(that.options.remove) GSY.config.resizeCode['GSYDialogResize_' + that.count] = null;

				//取消默认事件和冒泡事件
				e.stopPropagation();
				e.preventDefault();
			});
		},

		/**
		 * [bodyHeightScroll description] 当页面发生变化的时候处理
		 * @return {[type]} [description] 
		 */
		bodyHeightScroll : function(){
			var that = this;
			setInterval(function(){
				var maskHeight = Math.max($(window).height(),$('body').outerHeight(true));
				if(that.bodyHeight != maskHeight){
					that.maskDiv();
				}
			},1000);	
		},
		
		/**
		 * [maskDiv description] 生成遮罩层
		 * @return {[type]} [description]
		 */
		maskDiv : function(){
			if(!this.options.mask) return;

			//获取页面高度
			var count = this.count;
			var maskHeight = Math.max($(window).height(),$('body').outerHeight(true));
			var maskEleHtml = '<div id="cxg-dialog-mask-opacity-'+ count +'" class="cxg-dialog-mask-opacity"></div>';
			this.maskELement = $('#cxg-dialog-mask-opacity-' + count);
			this.bodyHeight = maskHeight;


			var css = {
				height : maskHeight,
				'background-color' : this.options.maskbg,
				'z-index' : this.zIndex -1
			}
			
			if(this.maskELement.length > 0 ){
				this.maskELement.css(css).show();
			}else{
				this.maskELement = $(maskEleHtml);
				$('body').append(this.maskELement);
				this.maskELement.css(css);
			}
		},
		
		/**
		 * [setDialogStyle description] 设置元素块居中样式
		 * @param {[type]} animateType [description]
		 */
		setDialogStyle : function(animateType){
			var that = this;
			this.dialogBox.show();
			var winInfo = that.getElementInfo($(window));
			var eleInfo = that.getElementInfo(this.dialogBox,true);
			var left = parseInt((winInfo.w - eleInfo.w)/2);
			var top = parseInt((winInfo.h - eleInfo.h)/2) + winInfo.st;
			if(top < that.options.fixTop) top = that.options.fixTop;
			
			//load标显示操作
			if(animateType == 1){
				
				
				//初始化窗体位置
				this.dialogBox.css({height:0,width:0,top:winInfo.st+parseInt(winInfo.h/2),left:parseInt(winInfo.w/2),overflow:'hidden'});
				
				//动画操作
				this.dialogBox.animate({height: eleInfo.h, width: eleInfo.w,top:top,left:left}, 100,function(){
					that.dialogBox.children().css({height:that.dialogBox.children().height()});
					that.dialogContHeight = eleInfo.h - that.dialogCont.height();//存储内容高度值
				});

			//获取到内容之后操作操作
			}else if(animateType==2){

				that.dialogBox.children().css({height:'100%'});
				
				//计算高度和top值
				var scrollHeight = this.dialogContHeight + this.dialogCont.height(); 
				var scrollTop = parseInt((winInfo.h - scrollHeight)/2) + winInfo.st;
				if(scrollTop < that.options.fixTop) scrollTop = that.options.fixTop;
				
				//动画操作
				this.dialogBox.animate({height: scrollHeight,top:scrollTop}, 100,function(){
					that.dialogBox.children().css({height:'auto'});
				});	
			}else{
				this.dialogBox.css({top:top,left:left});	
			}
		},

		/**
		 * [drag description] 绑定拖拽功能
		 * @return {[type]} [description]
		 */
		drag :  function(){
			var that = this;
			if(!this.options.drag) return;

			//设置X，Y坐标
			var defineX = 0,defineY = 0;
			this.dialogTitle.css('cursor','move');
			this.dialogTitle.unbind('mousedown mouseup').mousedown(function(e){
				var title = $(this);
				var winInfo = that.getElementInfo($(window));
				var eleInfo = that.getElementInfo(that.dialogBox,true);	
				var titleInfo = that.getElementInfo(title,true);
				$('body').css({'cursor':'move'});

				//当页面窗口高度小于弹层高度的时候不处理
				if(winInfo.h <= eleInfo.h) return false;

				//设置默认位置X，Y坐标
				defineX = e.pageX - eleInfo.l + 8;
				defineY = e.pageY - eleInfo.t + 8;

				//不满足条件跳出
				if(defineX >= titleInfo.w || defineY >= titleInfo.h) return;

				//禁止选择事件
				if($.browser.msie){ //IE
	                $('body').get(0).onselectstart = function(){return false;}
	            }else{ //dom
	            	$('body').addClass('cxg-scroll-noSelect');	
	            }


				//绑定移动事件
				$(document).mousemove(function(e){

					//计算移动初始位置
					var x = e.pageX - defineX
					var y = e.pageY - defineY;


					//计算移动过程中位置
					if(x <= 0) x = 0;
					if(x >= winInfo.w - eleInfo.w) x = winInfo.w - eleInfo.w;
					if(y <= winInfo.st + that.options.fixTop) y = winInfo.st + that.options.fixTop;
					if(y >= (winInfo.st + winInfo.h) -  eleInfo.h) y = (winInfo.st + winInfo.h) - eleInfo.h;


					//绑定取消事件
					$(document).unbind('mouseup').mouseup(function(){
						$(document).unbind('mousemove');
						$('body').css({cursor:'auto'});

						//取消禁止选择事件
						if($.browser.msie){//IE
							$('body').get(0).onselectstart = null;
			            }else{ //dom
			            	$('body').removeClass('cxg-scroll-noSelect');	
			            }
					});


					//设置弹层坐标值
					that.dialogBox.css({left:x,top:y});
				});
			});
		},
		
		/**
		 * [card_html description] 模板文件
		 * @return {[type]} [description]
		 */
		card_html : function(){
			var html = '<div class="cxg-dialog-box">';
				html +='	<div class="cxg-dialog-box-cont">';
				html +='		<div class="cxg-dialog-bg"></div>';
				html +='		<div class="cxg-dialog-layerBox">';
				html +='			<div class="cxg-title"><div class="cxg-title-c"></div><div class="cxg-close"><a dialog_count="0" href="javascript:void(0)"></a></div></div>';
				html +='			<div class="cxg-dialog-content"></div>';
				html +='		</div>';
				html +='	</div>';
				html +='</div>';
			return $(html); 
		},
		
		/**
		 * [resize description] 获取对象高宽和屏幕坐标
		 * @return {[type]} [description]
		 */
		getElementInfo : GSY.util.getEleInfo,

		/**
		 * [resize description] 页面发生改变的时候处理
		 * @return {[type]} [description]
		 */
		resize : function(){
			var that = this;
			GSY.config.resizeCode['GSYDialogResize_' + that.count] = function(){
				if(that.dialogBox.is(':hidden')) return;
				that.maskDiv();
				that.setDialogStyle();
			}	
		},

		/**
		 * [box description] 后台弹出框操作处理方法
		 * @return {[type]} [description]
		 */
		box : function(){
			var that = this;

			//获取触发按钮元素对象或者创建事件代理元素对象
			this.getElement();
			
			//检测是否传入入请求地址
			if(!that.options.url){
				GSY.util.echo('请传入地址！','dialog')
				return;
			}

			//当弹层框没有销毁的时候处理
			if(this.options.element && this.options.element.attr('data-count')) {
				this.tower();
				return;
			}

			
			//初始化窗口页面
			this.init();

			//设置预加载LOAD标
			this.load = $(_load);
			this.dialogCont.html(this.load);
			this.load.find('p').css({height:parseInt(this.options.width/2.5)});

			//创建遮罩层
			this.maskDiv();

			//绑定拖拽功能
			this.drag();

			//延时处理方法
			var handle = function(){

				if(that.dialogBox.css('top') == '-9999px'){
					//重置弹层样式
					that.setDialogStyle(1);

					//与后台交互处理方法
					GSY.util.ajax({
						type : that.options.type,
						url : that.options.url,
						data : that.options.data,
						success : function(ret){
							var time = 200;
							if(GSY.config.get('debug')) time = 2000;
							setTimeout(function(){
								that.saveRet = ret;
								if(ret && (ret.code == 1)){ 
									that.dialogCont.html(ret.data.html);
									that.setDialogStyle(2);
									that.options.that = that;
									that.autoClose(); //绑定自动关闭处理事件
									if(typeof(that.options.callback) == 'function') that.options.callback(that.dialogBox,that.options,ret);
									dialogNoRemoveSave['cxg-dialog-cont-' + that.count] = that;
								}	
							},time);	
						},
						error : function(ret){
							alert(ret.responseText);	
						}
					});
				}else{
					setTimeout(function(){handle()},100);		
				}
			};

			//加载方法
			handle();	
		},

		//提示类弹出
		tips : function(){
			var that = this;

			//获取触发按钮元素对象或者创建事件代理元素对象
			this.getElement();
			
			//当弹层框没有销毁的时候处理
			if(this.options.element && this.options.element.attr('data-count')) {
				this.tower();
				return;
			}
			
			//初始化窗口页面
			this.init();
			this.dialogCont.html(this.content);

			//创建遮罩层
			this.maskDiv();

			//绑定拖拽功能
			this.drag();

			//延时处理方法
			var handle = function(){
				if(that.dialogBox.css('top') == '-9999px'){
					//重置弹层样式
					that.setDialogStyle();
				}else{
					setTimeout(function(){handle()},100);		
				}
			};

			//加载方法
			handle();
			
			//弹出之后，如果传入回调方法时，绑定回调事件
			if(typeof that.options.callback == 'function'){
				that.options.that = this;
				that.options.callback(this.dialogBox,that.options);
				dialogNoRemoveSave['cxg-dialog-cont-' + that.count] = that;
			}
		}
	};


	//对象实例化
	GSY.namespace('GSY.dialog');
	GSY.dialog.show = function(content, options) {
		if(_lastDialog) {
	        _lastDialog = null;
	    }
		_lastDialog = new fDialog(content, options);
		return _lastDialog;
	};

	//提示类弹出处理方法
	GSY.dialog.tips = function(content,options){
		var options = options || {};
		GSY.dialog.show(content,options);
		_lastDialog.tips();
	};

	//后台弹出框操作处理方法
	GSY.dialog.box = function(options){
		var options = options || {};
		GSY.dialog.show('',options);
		_lastDialog.box();
	};
})(jQuery);



/**
 * [description] 减少滚动事件和窗口大小改变频率处理方法
 * @return {[type]} [description]
 */
;(function(){
	var time = 200;   
	
	//存储窗口滚动事件处理方法
	GSY.config.scrollCode = {};
	var scrollTimeer = null;
	$(window).scroll(function(e){
		if(scrollTimeer) clearTimeout(scrollTimeer);
		scrollTimeer = setTimeout(function(){
			for( var key in GSY.config.scrollCode){
				if(typeof GSY.config.scrollCode[key] == 'function') {
					GSY.config.scrollCode[key]();
				}
			}
		},time);
	});

	//存储窗口大小改变事件处理方法
	GSY.config.resizeCode = {};
	var resizeTimeer = null;
	$(window).resize(function(e){
		if(resizeTimeer) clearTimeout(resizeTimeer);
		resizeTimeer = setTimeout(function(){
			for( var key in GSY.config.resizeCode){
				if(typeof GSY.config.resizeCode[key] == 'function') {
					GSY.config.resizeCode[key]();
				}
			}
		},time);
	});
})();








