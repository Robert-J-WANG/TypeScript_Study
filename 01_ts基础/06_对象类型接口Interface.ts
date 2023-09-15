/* ----------------- 对象的类型——接口 interface ----------------- */

/* ---------------- 扩展：java中普通类，抽象类，接口的理解 --------------- */
/* 
1》接口是对动作的抽象，抽象类是对本质的抽象。
2》抽象类表示的是，这个对象是什么。接口表示的是，这个对象能做什么。
3》比如，男人和女人，他们的抽象类是人类，而猫和狗的抽象类是宠物类。人类可以吃东西，宠物类也可以吃东西，但是两者不能混为一谈，因为有本质的区别。这个“吃东西”是一个动作，你可以把“吃东西”定义成一个接口，然后让两个类去实现它的方法。
4》所以，在高级语言上，一个类只能继承一个类或抽象类，正如人不可能同时是动物类又是植物类，但是可以实现多个接口，例如，吃饭接口、呼吸接口等。 
*/

/* ----------------------- 接口的初体验 ----------------------- */

/* 
TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
*/
// 定义一个接口（对象形状的描述）
interface Person {
  name: string;
  age: number;
}
// 使用接口
let Tom: Person = {
  name: "Tom",
  age: 18,
};
console.log(Tom); // { name: 'Tom', age: 18 }
console.log(Tom.name); // Tom
console.log(Tom.age); // 18

/* 注意：赋值的时候，变量的形状必须和接口的形状保持一致。
定义的变量比接口少了一些属性是不允许的
多一些属性也是不允许的： */

/* ------------------------ 可选属性，使用 ？号 ------------------------ */
/* 有时我们希望不要完全匹配一个形状，那么可以用可选属性： */

interface Pet {
  name: string;
  age: number;
  color?: string; // 可选属性
}
const myDog: Pet = {
  name: "laifu",
  age: 4,
  color: "black", // 可选
};
const myCat: Pet = {
  name: "changwei",
  age: 5,
  // color:'white', // 可选
};

/* ------------ 任意属性 [propName: string]: （any) ------------ */
/* 
可选属性的含义是该属性可以不存在。这时仍然不允许添加未定义的属性.有时候我们希望一个接口允许有任意的属性,允许我们添加属性 
*/

/* 
需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
 */

/* 1. 定义1个任意属性 */
interface Car {
  name: string;
  // age: number;
  // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是任意属性类型的子集， 这里age了属性类型是number，而任意属性是string，所以报错
  age: string;
  [propName: string]: string;
}
//任意属性可以不使用
const myCar: Car = {
  name: "gaint",
  age: "2024",
};
// 使用任意属性,1个或多个
const yourCar: Car = {
  name: "titi",
  age: "2000",
  color: "red",
};
const hisCar: Car = {
  name: "ppp",
  age: "2022",
  weight: "2000kg",
  width: "2m",
};
/* 2. 定义多个任意属性，使用联合类型 */
interface Phone {
  brand: string;
  price: number;
  isGood: boolean;
  [propName: string]: string | number | boolean;
}
const myPhone: Phone = {
  brand: "APPLE",
  price: 9999,
  isGood: true,
  // 可选属性
  color: "black",
  date: 2004,
  is5G: false,
};
/* 3. 定义多个任意属性，使用any任意值 */
interface Fruit {
  name: string;
  price: number;
  [propName: string]: any; //任意属性
}
const myOrange: Fruit = {
  name: "orange",
  price: 20,
  color: "yellow",
  time: 2004,
  getSmell: function () {
    console.log("smell is good");
  },
};
console.log(myOrange.color);
console.log(myOrange.time);
console.log(myOrange.getSmell());

/* -------------------- 只读属性 readonly -------------------- */

/* 
有时候我们希望对象中的一些字段只能在创建的时候被赋值，
那么可以用 readonly 定义只读属性： 
*/

interface Student {
  readonly id: number;
  name: string;
  age: number;
  gender?: string;
  [propName: string]: number | string;
}
const Jack: Student = {
  id: 10001,
  name: "Jack",
  age: 33,
  country: "UK",
};

Jack.name = "Jackyoung";
console.log(Jack.name); // ackyoung
// Jack.id=20002; // 无法为“id”赋值，因为它是只读属性
