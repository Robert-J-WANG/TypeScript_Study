/* --------- 类型断言（Type Assertion）可以用来手动指定一个值的类型 --------- */
/* ------------------------- 语法: 值 as 类型 ------------------------- */
/* ------------------- 类型断言的常见用途有以下几种： ------------------ */

/* ----------------- 1.将一个联合类型断言为其中一个类型 ----------------- */
function getLength(x: number | string): number {
  if ((x as string).length) {
    return (x as string).length;
  } else {
    return x.toString().length;
  }
}
console.log(getLength("1234"));
console.log(getLength(13423424123));

/* ------------------- 2.将任何一个类型断言为 any ------------------- */
// window.a='10' // Property 'a' does not exist on type 'Window & typeof globalThis'

// (window as any).a = "10";

/* ----------------- 3.将 any 断言为一个具体的类型 ---------------- */
function sum(a: any, b: any): any {
  return a + b;
}

const result = sum(1, 2) as number;
console.log(result); //3

const result2 = sum("1", "2") as string;
console.log(result2); //12
