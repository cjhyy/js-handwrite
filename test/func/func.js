function myCall(object){
    let obj=object || window
    obj.fn=this
    let arg=[...arguments].slice(1)
    let result = obj.fn(...arg)
    return result
 }

 function myApply(object,args){
       let obj = object || window
       obj.fn=this
       let result=obj.fn(...args)
       return result
 }
 
 function myBind(object){
    let obj = object || window,
     that=this,
     bound=function(){
         return that.apply(obj,[...arguments])
     }
     var fNOP =  function(){};
     fNOP.prototype= that.prototype;   
     bound.prototype= new fNOP(); 
     return bound
}

function instance_of(L,R){
   var O=R.prototype
   L=L.__proto__
   while (true) {    
    if (L === null)      
         return false;   
    if (O === L)  // 当 O 显式原型 严格等于  L隐式原型 时，返回true
         return true;   
    L = L.__proto__;  
}
}

function curry(fn,...arg1){
     return function(...arg2){
           return fn.call()
     }
}

function add(num){
    num = +num;//隐式转换
    if(num !== num) return Number(this);
    return Number(this+num)
}

function mini(num){
    num = +num;//隐式转换
    if(num !== num) return Number(this);
    return Number(this-num)
}

function cheng(num){
    num = +num;//隐式转换
    if(num !== num) return Number(this);
    return Number(this*num)
}

 module.exports = {myCall,myApply,myBind,instance_of,add,mini,cheng};