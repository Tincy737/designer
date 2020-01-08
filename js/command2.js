// JavaScript Document
//理科选课
var setCommand = function( button , command ){
 button.onclick = function(){
 command.execute();
 }
}
 
// 编写点击按钮之后的具体行为：添加物理学科、添加化学学科和添加生物学科
var add = {
 physics: function(){
var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[物理]学科\r";
 },
 chemistry: function(){
var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[化学]学科\r";
 },
 biology: function(){
var cur_date = new Date();
 var cur_date = new Date();
 document.getElementById("textarea").value+="您已于"+cur_date.toLocaleString()+" 添加[生物]学科\r";
 }
}
 
//封装行为在命令类中
var PhysicsAddCommand = function( receiver ){
 this.receiver = receiver;
 
}
PhysicsAddCommand.prototype.execute = function(){
 this.receiver.physics();
}
var ChemistryAddCommand = function( receiver ){
 this.receiver = receiver;
}
ChemistryAddCommand.prototype.execute = function(){
 this.receiver.chemistry();
}
var BiologyAddCommand = function( receiver ){
 this.receiver =receiver
}
BiologyAddCommand.prototype.execute = function(){
 this.receiver.biology();
}
 
//命令接收者传入到 command 对象
var physicsaddCommand = new PhysicsAddCommand( add );
var chemistryaddCommand = new ChemistryAddCommand( add );
var biologyaddCommand = new BiologyAddCommand( add );
 
window.onload = function(){
 //把 command 对象安装到 button 上面
 var button1 = document.getElementById("button1");
 var button2 = document.getElementById("button2");
 var button3 = document.getElementById("button3");
 setCommand( button1, physicsaddCommand );
 setCommand( button2, chemistryaddCommand );
 setCommand( button3, biologyaddCommand );
}