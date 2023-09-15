/* ----------------- 对象的类型——接口 interface ----------------- */
// 使用接口
let Tom = {
    name: "Tom",
    age: 18,
};
console.log(Tom); // { name: 'Tom', age: 18 }
console.log(Tom.name); // Tom
console.log(Tom.age); // 18
const myDog = {
    name: "laifu",
    age: 4,
    color: "black", // 可选
};
const myCat = {
    name: "changwei",
    age: 5,
    // color:'white', // 可选
};
//任意属性可以不使用
const myCar = {
    name: "gaint",
    age: "2024",
};
// 使用任意属性,1个或多个
const yourCar = {
    name: "titi",
    age: "2000",
    color: "red",
};
const hisCar = {
    name: "ppp",
    age: "2022",
    weight: "2000kg",
    width: "2m",
};
const myPhone = {
    brand: "APPLE",
    price: 9999,
    isGood: true,
    // 可选属性
    color: "black",
    date: 2004,
    is5G: false,
};
const myOrange = {
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
const Jack = {
    id: 10001,
    name: "Jack",
    age: 33,
    country: "UK",
};
Jack.name = "Jackyoung";
console.log(Jack.name); // ackyoung
// Jack.id=20002; // 无法为“id”赋值，因为它是只读属性
