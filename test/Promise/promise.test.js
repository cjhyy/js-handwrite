const  myPromise=require('./promise')


//并行  all方法


//数组串行方法
var arr = [1, 2, 3, 4]
var promises = []



let tmp = new Promise(r=>{
    r()
})
for (let n in arr){
    tmp.then(()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(arr[n])
            }, 1000)
        }).then(res=>{
            console.log(res)
        })
    })
    tmp=tmp.then()
}

console.log(tmp)

// arr.reduce((p, x) => {
//     return p.then(() => {
//       return new Promise(r => {
//         setTimeout(() => r(console.log(x)), 1000)
//       })
//     })
//   }, Promise.resolve())
  

// arr.map(async (value) => {
//   promises.push(new Promise((res) => {
//     setTimeout(() => {
//       console.log(value)
//       res()
//     }, 1000)
//   }))
// })

// var promise = Promise.resolve()

// for (var i = 0; i < promises.length; i += 1) {
//   const task = promises[i]
//   promise
//     .then(() => {
//       return task
//     })
// }