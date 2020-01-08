// JavaScript Document
var setCommand = function( button , command ){
 button.onclick = function(){
 command.execute();
 }
}
 
// 编写点击按钮之后的具体行为：添加政治学科、添加历史学科和添加地理学科
var add = {
 politics: function(){
var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[政治]学科\r";
 },
 history: function(){
var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[历史]学科\r";
 },
 geography: function(){
var cur_date = new Date();
 var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[地理]学科\r";
 }
}
 
//封装行为在命令类中
var PoliticsAddCommand = function( receiver ){
 this.receiver = receiver;
 
}
PoliticsAddCommand.prototype.execute = function(){
 this.receiver.politics();
}
var HistoryAddCommand = function( receiver ){
 this.receiver = receiver;
}
HistoryAddCommand.prototype.execute = function(){
 this.receiver.history();
}
var GeographyAddCommand = function( receiver ){
 this.receiver =receiver
}
GeographyAddCommand.prototype.execute = function(){
 this.receiver.geography();
}
 
//命令接收者传入到 command 对象
var politicsaddCommand = new PoliticsAddCommand( add );
var historyaddCommand = new HistoryAddCommand( add );
var geographyaddCommand = new GeographyAddCommand( add );

window.onload = function(){
 //把 command 对象安装到 button 上面
 var button1 = document.getElementById("button1");
 var button2 = document.getElementById("button2");
 var button3 = document.getElementById("button3");
 setCommand( button1, politicsaddCommand );
 setCommand( button2, historyaddCommand );
 setCommand( button3, geographyaddCommand );
}