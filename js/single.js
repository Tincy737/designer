// JavaScript Document
//单例模式具体表现
var ModalSingle = function () {
	var div
	return function (title) {
		if(div) {
			div.style.display = 'none'
			div.children[0].innerText = title
		} else {
			div = document.createElement('div')
			div.className = 'modal'
			div.innerHTML = '<div>'+title+'</div><input id="k" placeholder="格式为：长期&一次&离线"/>'
			div.style.display = 'none'
			document.body.appendChild(div)
		}
		return div
	}
}

var modal = ModalSingle()
document.getElementsByTagName('button')[0].onclick = function () {
	var modalEle = modal('输入您想要订阅的方式：')
	modalEle.style.display = 'block'
}
document.getElementsByTagName('button')[1].onclick = function () {
	var modalEle = modal('您当前的订阅状态为：')
	modalEle.style.display = 'block'
}