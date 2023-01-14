//初始化

//交互
var titles = document.querySelectorAll('.menu-container h2'); //获取到所有的菜单标题元素
var itemHeight = 30;

//循环注册点击事件
for (var i = 0; i < titles.length; i++) {
	titles[i].onclick = function () {
		//关闭之前打开的
		var beforeOpened = document.querySelector('.submenu[status=opened]'); //获取之前打开状态的子菜单
		if (beforeOpened) {
			//如果之前有打开的，就关闭
			closeMenu(beforeOpened);
		}
		toggleSubmenu(this.nextElementSibling);
	};
}

//打开子菜单
function openMenu(subMenu) {
	//通过自定义属性status获取 子菜单的状态 （播放 打开 关闭） playing opened closed
	var status = subMenu.getAttribute('status');
	if (status !== 'closed' && status) {
		//不是关闭状态
		return; //啥也不干
	}
	//将子菜单的高度从 0 变化成  子项的数量*itemHeight
	subMenu.setAttribute('status', 'playing');
	createAnimation({
		from: 0,
		to: subMenu.children.length * itemHeight,
		totalMS: 500,
		onmove: function (n) {
			subMenu.style.height = n + 'px';
		},
		onend: function () {
			subMenu.setAttribute('status', 'opened');
		},
	});
}

//test
var test = document.querySelector('.submenu');
// openMenu(test);

//关闭子菜单
function closeMenu(subMenu) {
	var status = subMenu.getAttribute('status');
	if (status !== 'opened') {
		//不是打开状态
		return; //啥也不干
	}
	//将子菜单的高度从 0 变化成  子项的数量*itemHeight
	subMenu.setAttribute('status', 'playing');
	createAnimation({
		from: subMenu.children.length * itemHeight,
		to: 0,
		totalMS: 500,
		onmove: function (n) {
			subMenu.style.height = n + 'px';
		},
		onend: function () {
			subMenu.setAttribute('status', 'closed');
		},
	});
}

// 切换子菜单

function toggleSubmenu(subMenu) {
	var status = subMenu.getAttribute('status');
	if (status === 'playing') {
		//正在播放动画
		return; //啥也不干
	} else if (status === 'opened') {
		//如果时打开状态就关闭
		closeMenu(subMenu);
	} else {
		//否则打开
		openMenu(subMenu);
	}
}
