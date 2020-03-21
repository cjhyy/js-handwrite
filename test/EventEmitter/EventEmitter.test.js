const EventEmitter = require('./EventEmitter');
const {newObj,newObj2} = require('./new')
const event = new EventEmitter()
let Parent = function (name, age) {
  //1.创建一个新对象，赋予this，这一步是隐性的，
  // let this = {};
  //2.给this指向的对象赋予构造属性
  this.name = name;
  this.age = age;
  //3.如果没有手动返回对象，则默认返回this指向的这个对象，也是隐性的
  // return this;
};
let aa =newObj(Parent)
let aaaa = newObj2(Parent)
let aaa =new Parent()
const handle = (...pyload) => { 
  return pyload}
test('new测试', () => {
  expect(aa).toEqual(aaa);
  expect(aaaa).toEqual(aaa);
});

event.on('click', handle)
event.emit('click', 100, 200, 300, 100)

// test('订阅测试', () => {

//     expect(event.emit('click', 100, 200, 300, 100)).toEqual([100, 200, 300, 100]);
// });


event.off('click', handle)


event.once('dbclick', function() {
  console.log('click')
})

event.emit('dbclick', 100)

event.emit('dbclick')