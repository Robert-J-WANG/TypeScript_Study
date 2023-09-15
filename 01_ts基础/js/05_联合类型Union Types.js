/* ---------- 联合类型（Union Types）表示取值可以为多种类型中的一种 ---------- */
let hisFavoriteNumber;
hisFavoriteNumber = 7;
hisFavoriteNumber = "seven";
// hisFavoriteNumber = true; // 不能将类型“boolean”分配给类型“string | number”。
/* -------------------- 访问联合类型公有的属性或方法 -------------------- */
const fn = (something) => {
    // return something.length; // undefined 类型“number”上不存在属性“length”
    return something.toString();
};
console.log(fn(111));
/* ---------- 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型： --------- */
let herFavoriteNumber;
herFavoriteNumber = 7;
// console.log(herFavoriteNumber.length); // 推论为number， 类型“number”上不存在属性“length”
herFavoriteNumber = "seven";
console.log(herFavoriteNumber.length); // 推论为string, 5
