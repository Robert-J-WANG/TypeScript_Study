/* ------------------------- 枚举 ------------------------- */
/* ------------------------ 1.理解 ------------------------ */
// 使用枚举给一组数组（数字）赋予名称
// 11,22,33,44
enum NumberName {
  one = 11,
  two = 22,
  three = 33,
  four = 44,
}
console.log(NumberName);
/* 
{
  '11': 'one',
  '22': 'two',
  '33': 'three',
  '44': 'four',
  one: 11,
  two: 22,
  three: 33,
  four: 44
} 
*/
// 枚举是个对象，命名和值双向绑定
// 可以通过命名获取值，同时，也可以通过值获取命名
console.log(NumberName.three); //33
console.log(NumberName[11]); // one

/* ----------------------- 枚举的自动赋值 ---------------------- */
// 如果枚举中元素没有赋值，则默认第一个元素值为0，后面的递增加1

enum NumberType {
  one, // 0
  two, // 1
  three = 99,
  four, //100
}
console.log(NumberType);
/* 
{
  '0': 'one',
  '1': 'two',
  '99': 'three',
  '100': 'four',
  one: 0,
  two: 1,
  three: 99,
  four: 100
}
*/

/* ---------------------- 常数项和计算所得项 --------------------- */
// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）
enum Color {
  red, // 常数项，自动赋值
  green = 15, // 常数项，手动赋值
  hotpink = "hotpink".length, // 计算所得项
  // yellow, // 计算所得项后面不能有自动赋值
  black = 99,
}
console.log(Color);
/* 
{
  '0': 'red',
  '7': 'hotpink',
  '15': 'green',
  '99': 'black',
  red: 0,
  green: 15,
  hotpink: 7,
  black: 99
}
*/
// 注意：计算所得项后面不能有自动赋值的情况

/* ------------------------ 枚举的分类 ----------------------- */
// 1.常数枚举
// 常数枚举是使用 const enum 定义的枚举类型：
const enum Directions {
  up,
  down,
  left,
  right,
  // center='center'.length // 常数枚举中不能包含计算所得项
}
// 常数枚举在编译时会被删除(会保留元素的值);
// console.log(Directions); //报错，因为被删除
console.log(Directions.down, Directions.right); // 1,3 ， 值会保留

//2. 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：

declare enum Directions2 {
  up,
  down,
  left,
  right,
  // center='center'.length // 外部枚举中不能包含计算所得项
}

// 外部枚举编译成js时也会删除，值都不会保留

// console.log(Directions2); //报错 Directions2 is not defined

// 3. 同时使用 declare 和 const 也是可以的：

declare const enum Directions3 {
  up,
  down,
  left,
  right,
  // center='center'.length // 常数枚举中不能包含计算所得项
}

console.log(Directions3.down); // 1
