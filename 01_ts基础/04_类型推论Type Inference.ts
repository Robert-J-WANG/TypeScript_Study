/* ------------------------ 类型推论 ------------------------ */

/* 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。 */

/* ------------ 1. 变量申明并赋值（初始化）时，根据值类型推论变量的类型 ----------- */
let myFavoriteNumber = "seven";
// myFavoriteNumber = 7; // 不能将类型“number”分配给类型“string”。

/* // 相当于
let myFavoriteNumber:string = "seven";
myFavoriteNumber=7 */

/* -------------- 2. 变量只申明，没有赋值时， 推论变量为any型 ------------- */
let yourFavoriteNumber;
yourFavoriteNumber = "seven";
yourFavoriteNumber = 7;

/* // 相当于
let myFavoriteNumber:any; 
yourFavoriteNumber = "seven";
yourFavoriteNumber = 7;
 */
