/* ------------------------- 枚举 ------------------------- */
/* ------------------------ 1.理解 ------------------------ */
// 使用枚举给一组数组（数字）赋予名称
// 11,22,33,44
var NumberName;
(function (NumberName) {
    NumberName[NumberName["one"] = 11] = "one";
    NumberName[NumberName["two"] = 22] = "two";
    NumberName[NumberName["three"] = 33] = "three";
    NumberName[NumberName["four"] = 44] = "four";
})(NumberName || (NumberName = {}));
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
var NumberType;
(function (NumberType) {
    NumberType[NumberType["one"] = 0] = "one";
    NumberType[NumberType["two"] = 1] = "two";
    NumberType[NumberType["three"] = 99] = "three";
    NumberType[NumberType["four"] = 100] = "four";
})(NumberType || (NumberType = {}));
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
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 15] = "green";
    Color[Color["hotpink"] = "hotpink".length] = "hotpink";
    // yellow, // 计算所得项后面不能有自动赋值
    Color[Color["black"] = 99] = "black";
})(Color || (Color = {}));
console.log(Color);
// 常数枚举在编译时会被删除(会保留元素的值);
// console.log(Directions); //报错，因为被删除
console.log(1 /* Directions.down */, 3 /* Directions.right */); // 1,3 ， 值会保留
console.log(1 /* Directions3.down */); // 1
