/* ------------- 字符串字面量类型用来约束取值只能是某几个字符串中的一个 ------------ */
/* ------------- 类型别名与字符串字面量类型都是使用 type 进行定义 ------------ */
function getName(n) {
    return "your name is " + n;
}
// console.log(getName('Jim')) // Argument of type '"Jim"' is not assignable to parameter of type 'NameString'.
console.log(getName("Jack")); // your name is Jack
