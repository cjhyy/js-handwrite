const {myCall,myApply,myBind,instance_of,add,mini,cheng} = require('./func');
Function.prototype.myCall=myCall
Function.prototype.myApply=myApply
Function.prototype.myBind=myBind
Number.prototype.add=add
Number.prototype.mini=mini
Number.prototype.cheng=cheng
function Person() {
	this.name = 'person';
	this.age = 24;
	this.print = function(){
		console.log('hello call!');
	}
	
}

function Son(){
	// 使 son 继承 Person 的方法和属性
	Person.call(this);	
	this.study = 'study';
	this.play = function(){
		console.log('son play!');
	}	
}
function SecondSon(){
    Person.myCall(this);
	this.study = 'study';
	this.play = function(){
		console.log('son play!');
	}
}


var son = new Son();
var seSon = new SecondSon();



test('call函数继承', () => {
    expect(son.age).toBe(seSon.age);
  });

function sum(a,b){
    let that=this
    return {
        sum:a+b,
        obj:that
    }
}

var ob={
    value:'obj'
}

  test('call函数', () => {
    expect(sum.myCall(ob,1,2)).toEqual(sum.call(ob,1,2));
  });


  test('Apply函数', () => {
    expect(sum.myApply(ob,[1,2])).toEqual(sum.apply(ob,[1,2]));
  });

  test('bind函数', () => {
    expect(sum.myBind(ob)(1,2)).toEqual(sum.bind(ob)(1,2));
  });


  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  var auto = new Car('Honda', 'Accord', 1998);

  test('instensof判断', () => {
    expect(instance_of(auto,Car)).toEqual(auto instanceof Car);
  });


  test('链式调用', () => {
    expect((1).add(3)).toEqual(4);
    expect((1).mini(3)).toEqual(-2);
    expect((1).cheng(3)).toEqual(3);
  });