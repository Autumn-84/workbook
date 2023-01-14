(function () {
	//初始化：默认的效果

	//克隆列表中的第一个到最后一个
	var list = document.querySelector('.list');
	function clonFirst() {
		var firstItem = list.children[0];
		var clonFirst = firstItem.cloneNode(true);
		list.appendChild(clonFirst);
	}
	clonFirst();

	//滚动：从第一个元素滚动到下一个元素
	var duration = 2000; //持续时间
	var itemHeight = 30; //一个元素的高度
	var curIndex = 0; //当前的元素下标
	setInterval(mouseScroll, duration); //计时器
	function mouseScroll() {
		var from = curIndex * itemHeight;
		curIndex++;
		var to = curIndex * itemHeight;
		//动画效果：让from到to的变化，一点一点的改变
		var toableDuration = 300; //变化总时间
		var duration = 10; //变化一次的时间
		var times = toableDuration / duration; //变化的次数
		var dis = (to - from) / times;
		var timerId = setInterval(function () {
			from += dis;
			if (from >= to) {
				clearInterval(timerId);
				if (curIndex === list.children.length - 1) {
					// 滚动完成后，如果是最后一项
					curIndex = 0;
				}
			}
			list.scrollTop = from;
			// console.log(from);
		}, duration);
	}

	//交互效果：用户操作后的效果
})();
