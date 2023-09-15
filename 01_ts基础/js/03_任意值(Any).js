/* --------------- 任意值（Any）用来表示允许赋值为任意类型。 --------------- */
/* 如果是一个普通类型，在赋值过程中改变类型是不被允许的： */
let myFavoriteNumber1 = 7;
// myFavoriteNumber1 = 'seven'
/* 但如果是 any 类型，则允许被赋值为任意类型。 */
let myFavoriteNumber2 = 7;
myFavoriteNumber2 = "seven";
/* ---------------------- 任意值的属性和方法 --------------------- */
/* 在任意值上访问任何属性和方法都是允许的： */
const anyThing = "HAHHAH";
console.log("anyThing.age: " + anyThing.age); //anyThing.age: undefined
console.log("anyThing.length =" + anyThing.length); //anyThing.length =6
console.log(anyThing.split("")); // [ 'H', 'A', 'H', 'H', 'A', 'H' ]
console.log(parseInt(anyThing)); // NaN
// console.log(anyThing.setName("Jerry")); // anyThing.setName is not a function 运行时会报错，但书写时ok
/* ---------------------- 未声明类型的变量 ---------------------- */
/* 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型： */
let something;
something = 8;
something = "eight";
console.log("something is:" + something); // something is:eight
/*
//等价于
let something:any;
something = 8;
something = "eight";
console.log("something is:" + something); // something is:eight
*/
