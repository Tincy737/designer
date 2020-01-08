// JavaScript Document
//工厂模式
//选课工厂类
    var SubjectFactory = function(name){
        switch(name){
            case 'like':
              return new Like();
            case 'wenke':
              return new Wenke();
        }
	}
//理科基类
    var Like = function(){
        this.info = '除去语数外三门基础学科外，理科包含物理、化学、生物三门学科';
    }
    Like.prototype = {
        getA:function(){
            document.getElementById('text2').innerHTML='物理：研究自然界的物质结构、相互作用和运动规律的自然科学。';
        },
        getB:function(){
            document.getElementById('text3').innerHTML='化学：研究物质的组成、结构、性质、以及变化规律的科学。';
        },
		getC:function(){
            document.getElementById('text4').innerHTML='生物：自然科学的一个门类，是研究生物的结构、功能、发生和发展的规律，以及生物与周围环境的关系等的科学。';
        }
    }
    //文科基类
    var Wenke = function(){
        this.info = '除去语数外三门基础学科外，文科包含政治、历史、地理三门学科';
    }
    Wenke.prototype = {
        getA:function(){
            document.getElementById('text2').innerHTML='政治：一门以研究政治行为、政治体制以及政治相关领域为主的社会科学学科。';
        },
        getB:function(){
            document.getElementById('text3').innerHTML='历史：对人类社会过去的事件和行动，以及对这些事件行为有系统的记录、诠释和研究。';
        },
		getC:function(){
            document.getElementById('text4').innerHTML='地理：是关于地球及其特征、居民和现象的学问。';
        }
    }
    //测试用例
	function Wen(){
		var wenke = SubjectFactory('wenke');
		document.getElementById('text1').innerHTML=wenke.info;
		wenke.getA();
		wenke.getB();
		wenke.getC();
	}
	function Li(){
		var like = SubjectFactory('like');
		document.getElementById('text1').innerHTML=like.info;
		like.getA();
		like.getB();
		like.getC();
	}