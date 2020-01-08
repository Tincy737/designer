// JavaScript Document
//观察者3：离线订阅
var Event = function () {
	var clientList = {}
	var cache = {}

	this.listen = function (key, cb) {
		if(cache[key] && cache[key].length) {
			var _this = this
			cache[key].forEach(function (args) {
				cb.apply(_this, args)
			})
			cache[key] = []
		}
		clientList[key] = clientList[key] || []
		clientList[key].push(cb)
	}

	this.one = function (key, cb) {
		var fn = function () {
			cb.apply(this, arguments)
			this.remove(key, fn)
		}
		clientList[key] = clientList[key] || []
		clientList[key].push(fn)
	}

	this.remove = function (key, cb) {
		var fns = clientList[key]
		if(!cb) {
			clientList[key] = []
		}else if(fns && fns.length) {
			clientList[key] = fns.filter(fn => fn !== cb)
		}
	}

	this.trigger = function () {
		var key = Array.prototype.shift.call(arguments)
		var args = arguments
		var fns = clientList[key]
		var _this = this

		if(fns && fns.length) {
			fns.forEach(function(fn) {
				fn.apply(_this, args)
			})
		} else { // 保存没有订阅者的事件，派发给以后的订阅者
			var list = cache[key] || []
			list.push(args)
			cache[key] = list
			console.log('key', key, cache[key]);

		}
	}
}

// 使用事件模式
var event = new Event()
var appendLi = function (parent, text) {
	var li = document.createElement('li')
	li.innerText = text
	parent.appendChild(li)
}
document.getElementById('triggre').onclick = function () {
	event.trigger('event', '发送成绩单~')
}

document.getElementById('triggre-offline').onclick = function () {
	event.trigger('event-offline', '离线发送成绩单~')
}

document.getElementById('listener-offline').onclick = function () {
	event.listen('event-offline', function () {
		appendLi(document.getElementById('listener-offline'), '接收到成绩单。')
	})
}