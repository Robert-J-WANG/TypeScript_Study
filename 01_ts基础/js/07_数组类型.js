/* ------------------------ 数组的类型 ----------------------- */
// 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
/* -------------------- 类型 + 方括号」表示法 -------------------- */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.push(10);
// arr.push('11') // 类型“string”的参数不能赋给类型“number”的参数
console.log(arr.join("-")); // 1-2-3-4-5-6-7-8-9-10
// const arr2: number[] = [1, 2,3,4 ,'hello', 'world',]
// 不能将类型“string”分配给类型“number”
/* ---------------- 数组泛型 Array<elemType> ---------------- */
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.map((item) => item * 2)); // [ 2, 4, 6, 8, 10 ]
/* ----------------------- any 在数组中的应用 ---------------------- */
const list = ["jack", 18, "https://www.google.com", true];
list.forEach((li) => console.log(li));
const arr3 = [1, 2, 3, 4, "hello", "world"];
console.log(arr3.filter((item) => typeof item === "string"));
// [ 'hello', 'world' ]
