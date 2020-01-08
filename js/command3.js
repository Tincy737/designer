// JavaScript Document
//基础学科添加
var setCommand = function( button , command ){
 button.onclick = function(){
 command.execute();
 }
}
 
// 编写点击按钮之后的具体行为：添加语文学科、添加数学学科和添加英语学科
var add = {
 chinese: function(){
var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[语文]学科\r";
 },
 math: function(){
var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[数学]学科\r";
 },
 english: function(){
var cur_date = new Date();
 var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[英语]学科\r";
 }
}
 
//封装行为在命令类中
var ChineseAddCommand = function( receiver ){
 this.receiver = receiver;
 
}
ChineseAddCommand.prototype.execute = function(){
 this.receiver.chinese();
}
var MathAddCommand = function( receiver ){
 this.receiver = receiver;
}
MathAddCommand.prototype.execute = function(){
 this.receiver.math();
}
var EnglishAddCommand = function( receiver ){
 this.receiver =receiver
}
EnglishAddCommand.prototype.execute = function(){
 this.receiver.english();
}
 
//命令接收者传入到 command 对象
var chineseaddCommand = new ChineseAddCommand( add );
var mathaddCommand = new MathAddCommand( add );
var englishaddCommand = new EnglishAddCommand( add );
 
window.onload = function(){
 //把 command 对象安装到 button 上面
 var button1 = document.getElementById("button1");
 var button2 = document.getElementById("button2");
 var button3 = document.getElementById("button3");
 setCommand( button1, chineseaddCommand );
 setCommand( button2, mathaddCommand );
 setCommand( button3, englishaddCommand );
}