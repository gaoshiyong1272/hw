# 前端公共文件 1.0版本 接口文档


## 一、公共JS文件API文档，（cxg.common.js）


```js
alert(1);
```

## 二、图片懒加载JS功能（cxg.lazyload.js）

依赖于jQuery库文件（1.7.1版本），依赖cxg.common.js（1.0版本），引用该功能之后页面会自动完成懒加载模式

>* **src**: 指向服务器默认图片
>* **data-errorUrl** ：当图片地址存在的时容错图片地址
>* **data-selecter** : 属性选择器
>* **data-originUrl** : 图片真实地址
>* **cxg-lazyload** : 样式选择器 

html模板：

```html
 <img src="http://cdn.microaol.net/static/package/images/load-space.gif" 
 data-errorUrl="http://cdn.microaol.net/static/package/images/load_error.jpg" 
 data-selecter="true"  class="cxg-lazyload" 
 data-originUrl="http://img.navegaki.com/images/hotsite/3847868247985d713506530fed33e20c.jpg">
```

js文件加载地址：
```js
<script type="text/javascript" src="{host}/static/common/1.0/lib/jquery.min.js?ver={version}"></script>
<script type="text/javascript" src="{host}/static/common/1.0/lib/cxg.lazyload.js?ver={version}"></script>
```

## 三、AJAX模拟FORM提交上传文件JS功能（cxg.upload.js）

依赖于jQuery库文件（1.7.1版本），兼容到ie6以上的版本。

>#### 方法名称

>>* GSYUpload

>#### 参数[options] 注意：uploadType和noUploadType二选一
>>* options.element : 节点对象  [object]
>>* options.url : 上传服务器地址 [string]
>>* options.timeout : 上传文件超时处理 [number]
>>* options.data : 与后台交互需要上传为参数 [object jsonn]
>>* options.callback : 成功回调方法 [function]
>>* options.uploadType : 允许上传的文件类型（后缀名） [array]  
>>* options.noUploadType : 不允许上传的文件类型（后缀名） [array]
>>* options.dataType : 上传返回数据类型 [json或者text] 默认为text
>>* options.disabled : 自定义上传按钮不可点击样式名称 [string]
>>* options.send : 自定义上传按钮样式名称 [string]
>>* options.urlTips : 自定义当没有传入连接交互地址提示信息 [string]
>>* options.fileError : 自定义上传文件格式错误提示信息 [string]


>#### 返回值

```js
{
	code : 1,  		//状态码
	message : '', 	//操作提示
	data :  		//返回数据项
}
```

PHP代码：
```php
$callback = $_POST['callback'];

$arr = array(
	'code' => 1,
	'message' => '上传成功 ',
	'data' => array(
		'url' => 'http://www.baidu.com/1.txt'
	),
);

$res  = json_encode($arr);
echo "
<script type='text/javascript'>
if(typeof window.parent['".$callback."'] == 'function') {
	window.parent['".$callback."']('".$res."')
}
</script>";
```

HTML代码：

```html
//这里样式名称不可更改，如有需要可添加自己的特有样式
<div class="sr-upload-btn">
	<a href="#" class="lz-btn-orange-nobg" onclick="return false;"><span><em>上传文件</em></span></a>
	<input class="sr-js-upload-box" type="file" name="[fileKey]" value="" hidefocus="true"/>
</div>
```

JS代码：

```js
```



## 四、纵向自定义滚动条功能（cxg.scroll.js）

自定义滚动条支持纵向模式，依赖于jQuery库文件（1.7.1以上版本），兼容到ie7以上浏览器。

>#### 方法名称

>>* CXGResetScroll

>#### 参数[options]
>>* options.element : 节点对象  [object]
>>* options.scrollWrapWidth : 滚动条边框宽度 [number]
>>* options.scrollWidth : 滚动条宽度 [number]
>>* options.scrollCallback : 滚动条发生变化的时候处理回调事件 [function]
>>* options.scrollToBottomNum : 距离底部高度 [number]
>>* options.scrollToBottomCallback : 离底部多少触发回调事件 [function]

>#### 返回值

>>* 无值


全屏模式必须加以下样式，需要设置100%之后 里面的样式heihgt属性才能生效

```css
<style type="text/css">
html,body { height:100%;}
</style>
```

局部自定义滚动条模板：

```html
<div id="test" class="cxg-scroll-box" style="height:100%; width: 100%; z-index:100; ">
	<div class="" style="width: 300px; height:3000px;">
		<div id="test2" class="cxg-scroll-box"  style="width: 300px; height:300px; margin:50px;">
			<div style="height:1000px; width:500px;"></div>
		</div>
	</div>
</div>

```

js文件加载地址：

```js
<script type="text/javascript" src="{host}/static/common/1.0/lib/jquery.min.js?ver={version}"></script>
<script type="text/javascript" src="{host}/static/common/1.0/lib/cxg.scroll.js?ver={version}"></script>
<script type="text/javascript">

/**
 * [element description] 全屏模式调用
 * @type {[type]}
 */
CXGResetScroll({
	element : $('#test'),
	scrollWrapWidth : 21,  //滚动条边框宽度
	scrollWidth : 17,	//滚动条宽度
	scrollCallback : function(opt){},  //滚动条发生变化的时候处理回调事件
	scrollToBottomNum : 100,  //距离底部高度
	scrollToBottomCallback : function(opt,disabled){  } //离底部多少触发回调事件
});

/**
 * [element description] 局部自定义滚动条功能调用
 * @type {[type]}
 */
CXGResetScroll({
	element : $('#test2'),
	scrollWrapWidth : 15,
	scrollWidth : 12
});


</script>
```


## 五、轮播图功能（cxg.slider.js）


## 六、图片大小自适应（cxg.loadimg.js）


## 七、上报日志SDK功能 （md.js）


## 八、广告自动定位（cxg.ad.js）



