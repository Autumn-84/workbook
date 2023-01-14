function createAnimation(options) {
	var from = options.from; //起始值
	var to = options.to; //结束值
	var totalMS = options.totalMS || 1000; //变化总时间
	var duration = options.duration || 15; //动画的时间间隔
	var times = Math.floor(totalMS / duration); //变化的次数,取整数，方便下面和curTime的值作比较
	var dis = (to - from) / times; //变化一次改变的量
	curTimes = 0; //当前的次数
	var timesId = setInterval(function () {
		from += dis;
		curTimes++; //当前变化次数增加一次
		if (curTimes >= times) {
			// 变化次数达到了
			from = to; //变化完成
			clearInterval(timesId); //停止变化
			options.onend && options.onend();
		}
		options.onmove && options.onmove(from);
	}, duration);
}
