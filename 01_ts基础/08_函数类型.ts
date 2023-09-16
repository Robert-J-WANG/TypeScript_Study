/* ------------------------ 函数的类型 ----------------------- */

/* 
在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）： 
*/

/* 
// 函数声明（Function Declaration）
function sum(x, y) {
  return x + y;
}
// 函数表达式（Function Expression）
const mySum = function (x, y) {
  return x + y;
}; 
*/

/* ------------- 函数声明（Function Declaration） ------------- */
function summy(x: number, y: number): number {
  return x + y;
}
console.log(summy(1, 2)); // 3

// 实参不能多或者少
// console.log(sum(1)) //应有 2 个参数，但获得 1 个
// console.log(sum(1,2,3)) // 应有 2 个参数，但获得 3 个

/* ------------------------ 函数表达式 ----------------------- */
// 简写版：匿名函数进行了类型定义,赋值给左侧的变量mySum，通过类型推论获取左侧变量的类型
const mySum = function (x: number, y: number): number {
  return x + y;
};
// 完整版：给左侧的变量也进行类型定义
const yourSum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
/* 
注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
在 ES6 中，=> 叫做箭头函数，应用十分广泛 
*/

/* ----------------------- 接口定义函数 ----------------------- */

// 需要定义参数和返回值的类型
interface SearchFunc {
  // (参数名：参数类型，...):返回值类型
  (title: string, keyword: string): boolean;
}
const mySearchFunc: SearchFunc = function (
  title: string,
  keyword: string
): boolean {
  return false;
};

/* ------------------------ 可选参数 ------------------------ */
/* 
前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？
与接口中的可选属性类似，我们用 ? 表示可选的参数：
 */

function createName(
  firstName: string,
  lastName: string,
  middleName?: string
): string {
  return `your name is ${firstName} ${lastName}  ${middleName || ""}`;
}
console.log(createName("jack", "Green"));
console.log(createName("peter", "Green", "jj"));

/* 
需要注意:可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了
*/

/* ------------------------ 参数默认值 ----------------------- */
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
function createPet(name: string, age: number, color: string = "white"): string {
  return name + "-" + age + "-" + color;
}
console.log(createPet("KKK", 1));
console.log(createPet("PPP", 2, "black"));

/* ------------------------ 剩余参数 ------------------------ */
// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：

// function fn1(x, y, ...args) {
//   // 将传递进来的剩余未接收的实参全部收集进一个数组args中
//   return args;
// }
// console.log(fn1(1, 2, 4, 7, 6, 8, 9)); // [ 4, 7, 6, 8, 9 ]

function fn2(x: number, y: number, ...args: number[]) {
  // 将传递进来的剩余未接收的实参全部收集进一个数组args中
  return args;
}
console.log(fn2(1, 2, 4, 7, 6, 8, 9)); // [ 4, 7, 6, 8, 9 ]

/* ------------------------- 重载 ------------------------- */
/* 
// 函数重载：函数名相同，但是形参不同的多个函数之间形成重载关系
function fn3(x, y){
  return x + y;
}
function fn3(x,y,...agrs){
  return agrs
} 
*/

// 举例需求： 实参是数字时，返回相加值，参数是字符串时，则拼接字符串
function fn3(x: number, y: number): number;
function fn3(x: string, y: string): string;
function fn3(x: number | string, y: number | string): any {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x === "string" && typeof y === "string") {
    return x + y;
  }
}
console.log(fn3("1", "2"));
console.log(fn3(1, 2));
