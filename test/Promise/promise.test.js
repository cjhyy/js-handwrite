const  myPromise=require('./promise')


//并行  all方法


//数组串行方法
var arr = [1, 2, 3, 4]
var promises = []



// arr.reduce((p, x) => {
//     return p.then(() => {
//       return new Promise(r => {
//         setTimeout(() => r(console.log(x)), 1000)
//       })
//     })
//   }, Promise.resolve())
  
function p(i){
  return new Promise(r=>{
        setTimeout(()=>{
            r(i)
        },1000)
    })
}

function loop(i){
    if (i>=arr.length) return
  p(arr[i]).then(res=>{
      console.log(res)
      loop(++i)
  })
}
loop(0)


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