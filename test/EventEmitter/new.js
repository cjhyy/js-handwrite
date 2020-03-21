function newObj(fn){
    var newObj = Object.create(fn.prototype)
    var reNewObj= fn.apply(newObj,[...arguments].slice(1))
    if ((typeof reNewObj === 'function' || typeof reNewObj === 'object') && reNewObj){
        return reNewObj
    }
    return newObj
}

function newObj2(fn){

        let newObj={
            __proto__:fn.prototype
        }
        let  reNewObj =fn.apply(newObj, [...arguments].slice(1))
        if ((typeof reNewObj === 'function' || typeof reNewObj === 'object') && reNewObj){
            return reNewObj
        }
        return newObj
    

}
module.exports={newObj,newObj2}