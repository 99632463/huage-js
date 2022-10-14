(function(w){
	var Tools = {
		getIdElement:function(id){
			return typeof id === 'string' && document.all(id);
		},
		client:function(){
			if(window.innerWidth){   //最新版本浏览器
				return {
					width:window.innerWidth,
					height:window.innerHeight
				}
			}
			if(document.compatMode === 'CSS1Compat'){  //遵循 W3C 标准
				return {
					width:document.documentElement.clientWidth,
					height:document.documentElement.clientHeight
				}
			}
			// 怪异模式 主要解决 ie 但是现在ie好像有点不支持这种写法了
			else{
				return {
					width:document.body.clientWidth,
					height:document.body.clientHeight
				}
			}
		},
		scroll:function(){
			if(window.pageYOffset){   //最新版本浏览器
				return {
					top:window.pageYOffset,
					left:window.pageXOffset
				}
			}
			if(document.compatMode === 'CSS1Compat'){  //遵循 W3C 标准
				return {
					top:document.documentElement.scrollTop,
					left:document.documentElement.scrollLeft
				}
			}
			// 怪异模式 主要解决 ie 但是现在ie好像有点不支持这种写法了
			else{
				return {
					top:document.body.scrollTop,
					left:document.body.scrollLeft
				}
			}
		},
		addEvent:function(dom,event,fn){
			if(dom.addEventListener){
				dom.addEventListener(event,fn);
			}
			else{
				//ie 现在好像不支持
				dom.attachEvent('on'+event,function(){
					fn.call(dom);
				});
			}
		},
		getStyle:function(obj,attr){
			if(window.getComputedStyle){
				return window.getComputedStyle(obj)[attr];
			}
			else{
				return obj.currentStyle(attr);
			}
		},
		linearAnimation:function(obj,attr,target = 0,speed,fn){
			var begin = parseInt(this.getStyle(obj,attr)) || 0;
			var step = 50;

			clearInterval(obj.timer);

			obj.timer = setInterval(function(){
				begin += step;
				obj.style[attr] = begin + 'px';
				
				if(begin >= parseInt(target)){
					begin = target;
					clearInterval(obj.timer);

					fn && fn();
				}
			},20)
		},
		constant:function (obj,target,speed){
			clearInterval(obj.timer);
			var dir = obj.offsetLeft < target ? speed : -speed;

			obj.timer = setInterval(function(){
				obj.style.left = obj.offsetLeft + dir + 'px';

				if(Math.abs(target-obj.offsetLeft) < Math.abs(dir)){
					clearInterval(obj.timer);
					obj.style.left = target + 'px';
				}
			},20)
		},
		bufferAnimation:function(obj,json,time = 30,fn){
			var begin = 0,target = 0,flag = false;

			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				flag = true;

				for(var key in json){
					if(key === 'opacity'){
						begin = Tools.getStyle(obj,key) * 100 || 100;
						target = json[key] * 100;
					}
					else if(key === 'scrollTop'){
						begin = parseInt(obj[key]);
						target = parseInt(json[key]);
					}
					else{
						begin = parseInt(Tools.getStyle(obj,key));
						target = json[key];
					}

					speed = (target - begin) * 0.2;
					speed = begin < target ? Math.ceil(speed) : Math.floor(speed);

					if(key === 'opacity'){
						obj.style[key] = (begin + speed) / 100;
						obj.style[key] = `alpha(opacity=${begin + speed})`;
					}
					else if(key === 'scrollTop'){
						obj[key] = begin + speed;
					}
					else if(key === 'z-index'){
						obj.style[key] = target;
					}
					else{
						obj.style[key] = begin + speed + 'px';
					}

					if(begin !== parseInt(target)){
						flag = false;
					}
				}

				if(flag){
					clearInterval(obj.timer);

					fn && fn();
				}
			},time)
		}
	}
	w.Tools = Tools;
})(window);