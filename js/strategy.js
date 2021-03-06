// JavaScript Document
var registerForm = document.getElementById( 'registerForm' );
var submitBtn = document.getElementById( 'submit' );

var strategies = {
	isNonEmpty: function( value, errorMsg ){ // 不为空
		if ( value === '' ){
			return errorMsg ;
		}
	},
	minLength: function( value, length, errorMsg ){ // 限制最小长度
		if ( value.length < length ){
			return errorMsg;
		}
	},
	maxLength: function( value, length, errorMsg ){ // 限制最小长度
		if ( value.length > length ){
			return errorMsg;
		}
	},
	isMobile: function( value, errorMsg ){ // 手机号码格式
		if ( !/(^1[3|5|7|8][0-9]{9}$)/.test( value ) ){
			return errorMsg;
		}
	}
};

var rules = {
	name: [{
		strategy: 'isNonEmpty',
		msg: '用户名不能为空'
	}, {
		strategy: 'maxLength:6',
		msg: '用户名不能超过6个字'
	}],
	pwd: [{
		strategy: 'minLength:6',
		msg: '验证码长度不能少于6位'
	}],
	mobile: [{
		strategy: 'isMobile',
		msg: '手机号码格式不正确'
	}]
}

var validator = new Validator(registerForm, rules)

registerForm.onsubmit = function submit(e){
	var errorMsg = validator.valid(); // 如果errorMsg 有确切的返回值，说明未通过校验

	if ( errorMsg ){
		alert ( errorMsg );
		return false; // 阻止表单提交
	}

	window.open("single.html","scrollbars,location,status");

};

function Validator (form, rules){
	var cache = []

	this.form = form; // 表单对象
	this.rules = rules; // 保存校验规则
	this.cache = cache; // 保存校验方法

	for (var key in rules) { // 通过rules添加校验规则
		if (rules.hasOwnProperty(key)) {
			var rule = rules[key]
			rule.forEach(function (e) { // 多条规则分别添加
				var _key = key // 保存key值
				cache.push(function () {
					var dom = form[_key]
					var value = dom.value
					// 创建参数
					var ary = e.strategy.split(':')
					var strategy = ary.shift()
					ary.unshift(value)
					ary.push(e.msg)

					return strategies[strategy].apply(dom, ary)
				})
			})
		}
	}

};

Validator.prototype.valid = function(){
	for ( var i = 0, validatorFunc; validatorFunc = this.cache[ i++ ]; ){
		var msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
		if ( msg ){ // 如果有确切的返回值，说明校验没有通过
			return msg;
		}
	}
};