/* --------- 原始数据类型包括：布尔值、数值、字符串、null、undefined --------- */
/* -------------- 1.布尔值:使用 boolean 定义布尔值类型 -------------- */
let flag = true;
flag = false;
console.log(flag);
/* --------------- 2.数值:使用 number 定义数值类型： --------------- */
const decLiteral = 15; // 十进制的15
const binaryLiteral = 0b1111; // 二进制的15
const octalLiteral = 0o17; //  八进制的15
const hexLiteral = 0xf; // 十六进制的15
const notANumber = NaN; //
const infinityNumber = Infinity;
/* -------------- 3: 字符串:使用 string 定义字符串类型 -------------- */
const myName = "Tom";
const myAge = 15;
const sentence = `My name is ${myName}, i am ${myAge} years old`;
console.log(sentence);
/* --------- 4. 空值:void, 可以用 void 表示没有任何返回值的函数： --------- */
function alertName() {
    console.log("my name is jimmy");
}
alertName();
/* 声明一个 void 类型的变量没有什么用，
因为你只能将它赋值为 undefined 和 null（只在 --strictNullChecks 未指定时）： */
const voidValue = null;
const voidValue2 = undefined;
// const voidValue3: void = 123;  // 不能将类型“number”分配给类型“void”
// const voidValue4: void = 'abc';  // 不能将类型“string”分配给类型“void”
// const voidValue5: void = false; // 不能将类型“boolean”分配给类型“void”
/* ----------------- 5.Null 和 Undefined; ---------------- */
/* --------- 可以使用 null 和 undefined 来定义这两个原始数据类型： -------- */
const n = null;
const u = undefined;
/* 与 void 的区别是，undefined 和 null 是所有类型的子类型。
也就是说 undefined 类型的变量，可以赋值给 number 类型的变量： */
const n1 = null;
const number1 = n1;
console.log(n1, number1);
const u1 = undefined;
const str1 = u1;
console.log(u1, str1);
/* 而 void 类型的变量不能赋值给 number 类型的变量： */
let v1;
// const number2: number=v1 //不能将类型“void”分配给类型“number”
console.log(v1);
