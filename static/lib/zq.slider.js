
/*
 * 焦点图局脚本，依赖于jQuery
 * author:gaoshiyong<gaoshiyong1272@vip.163.com>
 */

/**
 * [slider description] banner和广告切换图片效果（动画类型为：淡入淡出和左右滑动效果）
 * @param  {[number]} 	options.width [description] 		外框宽度
 * @param  {[number]} 	options.height [description] 		外框高度
 * @param  {[object]} 	options.parentEle [description] 	公共父节点
 * @param  {[number]} 	options.time [description] 			启用自动播放模式  0 表示不启用  大于0其他值为播放周期时间
 * @param  {[boolean]} 	options.isNext [description] 		启用显示左右滚动按钮  false：不显示  true：显示
 * @param  {[string]}	options.icoType [description]		icon显示方式  number：数字显示方式  dot：原点显示方法 
 * @param  {[string]} 	options.align [description] 		icon 显示对齐方向  center left right
 * @param  {[number]} 	options.icoShow [description] 		icon 显示当前第几个   默认显示第一个
 * @param  {[string]} 	options.type [description]			动画处理效果  fade：淡入淡出效果  animate：动画滑动效果
 * @param  {[number]} 	options.scrollTime [description] 	动画延时动画处理事件
 * @param  {[string]} 	options.iconEventTpye [description] icon事件类型 支持【click,mouseover】
 * @return {[object]}   [description] 返回当前对象
 */
;(function($){
	var _lastObj = null;
	var createFlag = false;
	var _css = '.cxg-slider-box {position: relative;}'	
		_css+= '.cxg-slider-box li a { width: 100%; height:100%; display: block; vertical-align: top;}';
		_css+= '.cxg-slider-box li a img { width: 100%; height: 100%; }';
		_css+= '.cxg-slider-box .cxg-slider-ico { position: absolute; font-size: 0; }';
		_css+= '.cxg-slider-box .cxg-slider-ico span { cursor: pointer; opacity: 0.6;  filter: alpha(opacity=60); background: #fff; font-size: 12px; display: inline-block; vertical-align: top; text-align: center; }';
		_css+= '.cxg-slider-box .cxg-slider-ico span.cxg-slider-number { width: 18px; height: 18px; line-height: 18px; border:1px solid #ccc; color: #333;}';
		_css+= '.cxg-slider-box .cxg-slider-ico span.cxg-slider-dot { cursor: pointer; width: 1em; height: 1em; background: #000; border-radius: 50%; }';
		_css+= '.cxg-slider-box .cxg-slider-ico span.active { cursor: default; background: #f60; color: #fff; font-weight: bold;}';
		_css+= '.cxg-slider-box a.cxg-slider-btn { opacity: 0.4; filter: alpha(opacity=40); position: absolute; display: inline-block; vertical-align: top; width: 24px; height: 22px;  }';
		_css+= '.cxg-slider-box a.cxg-slider-btn:hover { opacity: 0.8; filter: alpha(opacity=80);}';
		_css+= '.cxg-slider-box a.next { background-position: -37px 0;}';
		_css+= '.cxg-slider-box a.prev { background-position:0 0;}';


	//设置默认值
	var define = {
		width : null ,			//外框宽度
		height : null,			//外框高度
		parentEle : null,		//公共父节点
		time : 0,				//启用自动滚动模式  0 表示不启用
		isNext : true,			//启用显示左右滚动按钮  false 不显示  true 显示
		icoType :  'number',  	// icon显示方式  number 数字显示方式  dot 原点显示方法 
		prefix : 'cxg-slider',	//前缀名字,
		align : 'left',			//icon 显示对齐方向
		icoShow : 1 ,			//icon 默认当前显示第几个
		type : 'fade',			//动画效果  fade：淡入淡出效果  animate：动画滑动效果 
		scrollTime : 700, 		//动画延时动画处理
		isIcoShow : true,		//是否隐藏icon显示
		iconEventTpye : 'click',//icon 事件类型
		html : '<div class="cxg-slider-box-cont"></div>',
		bottom : 10,	 		//icon盒子里底部的距离（可以设置正负值）
		margin : 5 ,
		btnNextImg : null,		//下一页翻译按钮图片
		btnPrevImg : null,		//上一页翻译按钮图片,
		btnNum : 10,			//按钮里左右两侧距离（可以设置正负值）
		host_static : ''
	}

	/**
	 * [slider description] 构造图片切换效果构筑起
	 * @return {[type]} [description]
	 */
	var slider = function(options){
		this.options = $.extend({}, define , options);
		this.active = 0;
		this.resizeObject = {}
		this.saveWidth = this.options.width;
		this.createCss();
		this.btnFlag = false;
		this.iconFlag = false;
	}

	/**
	 * [prototype description]  扩展图片切换效果方法
	 * @type {Object}
	 */
	slider.prototype = {

		/**
		 * [inti description] 初始化相关事件
		 * @return {[type]} [description]
		 */
		inti : function(){
			var that = this;

			//判断没有找到元素或者没有传入高度和宽度的时候处理
			if(this.options.parentEle.length == 0 || !this.options.width || !this.options.height ) return this;
			if(this.options.parentEle.find('li').length <= 1 ) return this;

			//重置dom结构和样式设置
			this.wrap = $(this.options.html).append(this.options.parentEle.children());
			this.options.parentEle.append(this.wrap);
			this.resetDom();
			
			//存在图片列表信息并初始化icon显示样式和创建样式表
			this.createIcoStyle();

			//初始化左右滚屏按钮样式
			this.createBtnStyle();

			//动画效果
			this.options.width = this.saveWidth == '100%' ? $(window).width() : this.options.width;
			if(this.options.type == 'slider'){
				this.sliderCode();
			}else{
				this.fade();	
			}


			//全屏事件处理
			if(this.saveWidth == '100%'){
				//当页面发生变化时候处理事件
				this.resizeObject['CXGResizeWindow'] = function(){
					that.options.width = that.saveWidth == '100%' ? $(window).width() : that.options.width;

					//滑动类型处理
					if(that.options.type == 'slider'){
						that.wrap.find('ul').css({'width':that.options.width * that.parentChildLen,height:that.options.height,'margin-left':-1*that.active*that.options.width});	
						that.list.each(function(index, el) {
							$(this).show().css({float:'left', width:that.options.width,height:that.options.height});
						});
					}else{
						that.list.each(function(index, el) {
							if(index !== that.active){
								$(this).css({opacity : 0});
							}
						});	
					} 

					that.wrap.css({width : that.options.width,height : that.options.height,overflow:'hidden'});
					that.options.parentEle.css({width : that.options.width,height : that.options.height});
					that.animate(that.active);
					that.createIcoStyle();
					that.createBtnStyle();
					
					that.autoCode();

				}

				//窗口发生变化初始化
				this.reSize();	
			}
		},
		
		/**
		 * [resetDom description] 重置dom结构和样式设置
		 * @return {[type]} [description]
		 */
		resetDom : function(){
			this.wrap.css({width : this.options.width,height : this.options.height,overflow:'hidden'});
			this.options.parentEle.css({width : this.options.width,height : this.options.height});
			this.list = this.wrap.find('li');
			this.parentChildLen = this.list.length;
			this.active = (this.options.icoShow <= 0 || this.options.icoShow > this.parentChildLen) ?  0 : (this.options.icoShow - 1);
			this.list.eq(this.active).show();
		},

		/**
		 * [createCss description] 创建样式表
		 * @return {[type]} [description]
		 */
		createCss : function(){

			//已经生产样式表
			if(createFlag) return;
			createFlag = true;


			//创建样式表
			var style = document.createElement('style');
			style.type = "text/css";

			//IE  
			if(style.styleSheet) style.styleSheet.cssText = _css;  
			
			// w3c
			else {  
				var cssText = document.createTextNode(_css);  
				style.appendChild(cssText);  
			}
			document.getElementsByTagName('head').item(0).appendChild(style);
		},

		/**
		 * [description] 初始化icon显示样式
		 * @return {[type]} [description]
		 */
		createIcoStyle : function(){
			

			//不显示icon操作按钮
			if(!this.options.isIcoShow)return;
			
			//只创建一次icon节点
			if(!this.iconFlag){
				this.icon = $('<div class="cxg-slider-ico"></div>');
			
				//生成icon显示元素
				var iconStr = '';
				var iconStyle = this.options.prefix + '-' + this.options.icoType;
				for(var i = 1; i <= this.parentChildLen ; i++){
					if(this.options.icoType == 'number') iconStr += '<span class="'+ iconStyle +'">'+ i +'</span>';
					else iconStr += '<span class="'+ iconStyle +'"></span>';
				}
				this.icon.html(iconStr);
				this.icon.children().eq(this.active).addClass('active');

				//插入页面中并显示
				this.options.parentEle.append(this.icon);
				this.iconFlag = true;
			}

			//icon 显示对齐方向
			var margin = this.options.margin*2;
			var padding = parseInt(this.icon.children().css('padding-left')) + parseInt(this.icon.children().css('padding-right'));
			var border = parseInt(this.icon.children().css('border-left-width')) + parseInt(this.icon.children().css('border-left-width'));
			var childWidth = (this.icon.children().width() + margin + padding + border)*this.parentChildLen;
			if(this.options.align == 'right'){
				this.icon.css({right : this.options.bottom}).children().css({'margin-left' : this.options.margin*2});
			}else if(this.options.align == 'center'){
				this.icon.children().css({margin :'0 ' + this.options.margin + 'px'});
				var left = this.wrap.width()/2 - childWidth/2;
				this.icon.css({left:left});
			}else{
				this.icon.css({left : this.options.bottom}).children().css({'margin-right' : 10});
			}

			//设置icon页面样式
			this.icon.css({width:childWidth,height:this.icon.children().width(),bottom:this.options.bottom});
		},

		/**
		 * [createBtnStyle description] 初始化左右滚屏按钮样式
		 * @return {[type]} [description]
		 */
		createBtnStyle : function(){
			var that = this;
			if(!this.options.isNext) return;

			//只创建一次按钮节点
			if(!this.btnFlag){
				this.nextBtn = $('<a class="cxg-slider-btn next" href="javascript:;"></a>');
				this.prevBtn = $('<a class="cxg-slider-btn prev" href="javascript:;"></a>');
				this.options.parentEle.append(this.nextBtn,this.prevBtn);	
				this.btnFlag = true;
			}

			if(this.options.btnNextImg){
				var nextImg = new Image();
				var prevImg = '<img alt="prev" src="' + this.options.btnPrevImg + '">';
				nextImg.alt = 'next';
				nextImg.onload = function(){
					var width = this.width;
					var height = this.height;
					var top =  that.wrap.height()/2 - height/2;
					that.nextBtn.css({right:that.options.btnNum,top:top,width:width,height:height,background:'none'}).html(this);
					that.prevBtn.css({left:that.options.btnNum,top:top,width:width,height:height,background:'none'}).html(prevImg);
				};
				nextImg.src = this.options.btnNextImg;
				return;
			}

			var top = this.wrap.height()/2 - this.nextBtn.height()/2;
			this.nextBtn.css({right:this.options.btnNum,top:top});
			this.prevBtn.css({left:this.options.btnNum,top:top});
		},

		/**
		 * [animate description] 功能动画处理
		 * @param  {[type]} index [description] 当前索引值
		 * @return {[type]}       [description]
		 */
		animate : function(index){
			var that = this;

			//设置当前状态
			that.icon.find('span').eq(index).addClass('active').siblings().removeClass('active');
			
			//动画处理
			if(this.options.type == 'slider'){
				var marLeft = -that.options.width * index;
				var ulBox = this.options.parentEle.find('ul');
				ulBox.animate({'margin-left' : marLeft}, that.options.scrollTime , function() {
					that.status = false;	
					that.active = index;	
				});
			}else{
				that.list.eq(that.active).hide().css({opacity:0});
				that.list.eq(index).show().animate({opacity:1},that.options.scrollTime,function(){
					that.status = false;
					that.active = index;
				});	
			}
		},

		/**
		 * [scrollNext description] 左右滚动按钮事件处理
		 * @return {[type]} [description]
		 */
		scrollNext : function(){
			var that = this;
			if(!this.options.isNext) return;
			
			//显示下一个事件处理
			this.nextBtn.click(function(){
				var index = that.active + 1 >= that.parentChildLen ? 0 : that.active + 1;
				that.animate(index);	
			});	

			//显示上一个事件处理
			this.prevBtn.click(function(){
				var index = that.active - 1 < 0 ? that.parentChildLen - 1 : that.active - 1;
				that.animate(index);	
			});	
		},

		/**
		 * [autoCode description] 动画自动播放处理方法
		 * @return {[type]} [description]
		 */
		autoCode : function(){
			var that = this;
			var i = 0
			if(!this.options.time) return; //关闭自动播放事件

			//播放定时器处理
			var auto = function(){
				that.timer = setInterval(function(){
					var index = that.active + 1 >= that.parentChildLen ? 0 : that.active + 1;
					that.animate(index);
					i++;	
				},that.options.time);	
			}

			//当移动到元素上面是取消动画效果
			this.options.parentEle.unbind('mouseover mouseout').mouseover(function(e) {
				if(that.timer){
					clearInterval(that.timer);
					that.timer = null;
				}
				e.stopPropagation();
			}).mouseout(function(e) {
				auto();
				e.stopPropagation();
			});
			
			//启动自动播放功能
			auto();
		},


		/**
		 * [sliderCode description] 动画滑过效果初始化话
		 * @return {[type]} [description]
		 */
		sliderCode : function(){
			var that = this , ulBox = this.options.parentEle.find('ul');
			this.status = false
			this.timer = null;
			
			//初始化切换元素样式
			ulBox.css({'width':this.options.width * this.parentChildLen,height:this.options.height,'margin-left':-1*this.active*this.options.width});
			that.list.each(function(index, el) {
				$(this).show().css({float:'left', width:that.options.width,height:that.options.height});
			});

			//添加icon事件处理
			this.icon.find('span').unbind(this.options.iconEventTpye).bind(this.options.iconEventTpye,function() {
				var index = $(this).index();
				if(that.status || that.active  == index) return false;
				that.status = true;
				that.animate(index);	
			});

			//左右滚动按钮处理方法初始化
			this.scrollNext();


			//自动播放动画处理方法初始化
			this.autoCode();
		},

		/**
		 * [reSize description] 初始化屏幕大小发生变化事件 
		 * @return {[type]} [description]
		 */
		reSize : function(){
			var that = this;
			var timeer = null;
			$(window).bind('resize',function(e){
				if(that.timer){
					 clearTimeout(that.timer);	
					 that.timer = null;
				}
				if(timeer){
					clearTimeout(timeer);	
					timeer = null;
				} 
				timeer = setTimeout(function(){
					for( var key in that.resizeObject){
						if(typeof that.resizeObject[key] == 'function') {
							that.resizeObject[key]();
						}
					}
				},200);
			});
		},

		/**
		 * [silderUp description] 淡入淡出效果
		 * @return {[type]} [description]
		 */
		fade : function(){
			var that = this,status = false,timer = null;

			//初始化元素透明度
			that.list.each(function(index, el) {
				if(index !== that.active){
					$(this).css({opacity : 0});
				}
			});

			//添加icon事件处理
			this.icon.find('span')[this.options.iconEventTpye](function() {
				var index = $(this).index();
				if(that.active == index) return false;
				if(that.status) return false;
				that.status = true;
				that.animate(index);
			});

			//左右滚动按钮处理方法初始化
			this.scrollNext();


			//自动播放动画处理方法初始化
			this.autoCode();
		}
	}

	/**
	 * [createObjcet description] 对象初始化
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	var createObjcet = function(options){
		if(_lastObj) _lastObj = null;
		_lastObj = new slider(options);
		return _lastObj;
	}

	/**
	 * [description] 对外通过接口
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	window['CXGSlider'] = window['oasSlider'] = function(options){
		options = options == undefined ? {} : options;
		return createObjcet(options).inti();
	}
})(jQuery);



/**
 * [description] 图片轮播操作方法
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function($){
	var define = {
	    prevBtn : null,				
	    nextBtn : null,
	    operand : null
	};
	var _lastObj = null;

	/**
	 * [slider description] 构造标签
	 * @return {[type]} [description]
	 */
	var imgMask = function(options){
		this.options = $.extend({}, define , options);
		this.isTrue = true;
		this.timeer = null;
		this.curr = 0;
		this.liLength = 0;
		this.liWidth = 0;

	}
	imgMask.prototype = {
		operate:function(){
			var that = this;

			if($(this.options.operand).length == 0) return;

			//获取当前滚动个数
			this.liLength = parseInt(that.options.operand.children().length);

			//获取当前总长度
			this.liWidth = parseInt(that.options.operand.children().outerWidth());
			that.options.operand.css({width : this.liWidth*(this.liLength+1)});
			this.actScrollLen = Math.ceil(that.options.operand.parent().width()/this.liWidth);

			//当项目个数小于等于当前显示个数的时候不显示左右滑动按钮
			if(this.liLength <= this.actScrollLen) {
				this.options.prevBtn.hide();	
				this.options.nextBtn.hide();
			}

			this.options.prevBtn.hover(function(){
				$(this).addClass('banner-btn-prev-hover');
			},function(){
				$(this).removeClass('banner-btn-prev-hover');
			}).unbind('click').click(function(){
				if(that.isTrue){
					that.isTrue=false;
					that.move();
				}	
				return false;			
			});
			this.options.nextBtn.hover(function(){
				$(this).addClass('banner-btn-next-hover');
			},function(){
				$(this).removeClass('banner-btn-next-hover');
			}).unbind('click').click(function(){
				if(that.isTrue){
					that.isTrue=false;				
					that.move();
				}
				return false;
			});
		},
		move:function(event){
			var that = this;
			var parent = that.options.operand.parent();
			var count=1;
			if(parseInt(parent.outerWidth())/this.liWidth>1){
				count=this.actScrollLen;
			}else{
				count=1;
			}
			if(this.liLength<=count)
				return;
			if(this.liLength-that.curr>count)
				that.curr++;
			else that.curr=0;
			that.options.operand.animate({'margin-left':-that.curr*this.liWidth},500);
			setTimeout(function(){
				that.isTrue=true;
			},500)
			return false;
		}
	}
	/**
	 * [createObjcet description] 对象初始化
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	var createObjcet = function(options){
		if(_lastObj) _lastObj = null;
		_lastObj = new imgMask(options);
		return _lastObj;
	}
	/**
	 * [description] 对外通过接口
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */	
	window['CXGSliderLi'] =  function(options){
		options = options == undefined ? {} : options;
		return createObjcet(options).operate();
	}
})(jQuery);	

