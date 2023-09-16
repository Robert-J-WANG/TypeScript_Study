/* ------------------ 类型别名用来给一个类型起个新名字 ----------------- */

/* ------------ 我们使用 type 创建类型别名,类型别名常用于联合类型 ------------ */

type all = string | number | boolean;

const a: all = 123;
const b: all = "sfdasdfaskldf";
const c: all = false;
console.log(a, b, c);
