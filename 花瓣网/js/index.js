window.onload = function(){
	window.onscroll = function(){
		top_nav();
	}
	elevator_item();
	autoCreateImg();
	tab();
}

function autoCreateImg(){
		//json 存储数据
		var json = [
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/3.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/6.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/4.png'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/04.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/3.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/6.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/4.png'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/04.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/3.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/6.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/4.png'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/04.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/3.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/6.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/4.png'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/04.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/3.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/6.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/4.png'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/04.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/3.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/6.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/4.png'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/04.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/3.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/6.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/4.png'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/04.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/3.jpg'
			},
			{
				txt:'当我们正在为生活疲于奔命的时候，生活已经离我们而去。 ---约翰',
				pic:'huaban/6.jpg'
			}
		];
		var str = '';

		//遍历数组
		for (var i = 0; i < json.length; i++) {
			//取出图片的地址和文字
			var txt = json[i].txt;
			var pic = json[i].pic;

			//创建子标签
			var htmlStr = "<div class='box'>" + 
							"<div class='pic'>" + 
								"<img src="+pic+">" + 
								"<div class='cover'></div>" + 
							"</div>" + 
							"<p>"+txt+"</p>" + 
							"<div class='btn-box'>" + 
								"<a href='javascript:' class='collect'>采集</a>" + 
								"<a href='javascript:' class='like'>" + 
									"<span class='heart'></span>" + 
								"</a>" + 
							"</div>" + 
						"</div>";

				Tools.getIdElement('dom_pull').innerHTML += htmlStr;
		}
	}

function tab(){
	var tab_header = Tools.getIdElement('tab_header');
	var allLis = tab_header.getElementsByTagName('li');
	var lastOne = 0;

	for(let i = 0,len = allLis.length; i < len; i++){
		allLis[i].onmouseover = function(){
			allLis[lastOne].className = '';
			this.className = 'current';
			lastOne = i;
		}
	}
}

function elevator_item(){
	var elevator = Tools.getIdElement('elevator');
	elevator.onclick = function(){
		var documentElement = document.documentElement || document.body;
		Tools.bufferAnimation(documentElement,{scrollTop:0});
	}
}

function top_nav(){
	var top_nav = Tools.getIdElement('top_nav');
	if(150 < Tools.scroll().top){
		top_nav.style.display = 'block';
	}
	else{
		top_nav.style.display = 'none';
	}
}

// 无法实现  有 bug  暂时还没找到原因  
// function slider_banner(){
// 	var slider_banner = Tools.getIdElement('slider_banner');
// 	var banners = slider_banner.getElementsByTagName('li');

// 	var index = 0;

// 	setInterval(function(){
// 		for(var i = 0,len = banners.length; i < len; i++){
// 			var list = banners[i];
// 			Tools.bufferAnimation(list,{opacity:0});
// 		}

// 		Tools.bufferAnimation(banners[index],{opacity:1});

// 		index++;
// 		if(index === banners.length){
// 			index = 0;
// 		}
// 	},1500)
// }