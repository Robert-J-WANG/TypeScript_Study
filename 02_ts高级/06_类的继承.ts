/* ------------------------ 类的继承 ------------------------ */
// 继承是类与类之间的关系 （父类继承子类）
// 通过类的继承，能扩展现有的类（扩展子类的属性和方法）

/* ----------------------- 定义一个父类 ----------------------- */

class Animal {
  // 定义属性类型
  name: string;
  age: number;
  // 使用构造器函数初始化属性
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 定义方法
  sayHi(something: string): string {
    return `Hi, this is ${this.name} and ${this.age} old, ${something}`;
  }
}
/* ------------------ 1.定义子类并继承父类,子类未扩展 ----------------- */
class Cat extends Animal {
  constructor(catName: string, catAge: number) {
    super(catName, catAge); // 使用super关键字直接调用父类的constructor函数，初始化子类的属性
  }
}
// 实例化子类
const myCat = new Cat("Tom", 10);
console.log(myCat);

/* ----------------- 2. 定义子类并继承父类,子类进行扩展 ---------------- */
class Dog extends Animal {
  // 扩展自己的属性
  color: string;
  // 使用构造器函数初始化属性
  constructor(dogName: string, dogAge: number, dogColor: string) {
    // 使用super调用父类的构造器函数
    super(dogName, dogAge);
    // 初始化自己扩展的属性
    this.color = dogColor;
  }
  // 扩展自己的方法
  doSomething(str: string): string {
    return `i can do ${str}`;
  }
  // 重写继承父类的方法
  // sayHi(weight: string): string {
  //   return `i am ${weight} kg `;
  // }

  // 重写继承父类的方法,同时还能调用父类的方法
  sayHi(weight: string): string {
    return `i am ${weight} kg ` + super.sayHi("very good!");
  }
}

const myDog = new Dog("afu", 20, "black");
console.log(myDog); // Dog { name: 'afu', age: 20, color: 'black' }
console.log(myDog.doSomething("hahaha")); // i can do hahaha
// console.log(myDog.sayHi("18")); //i am 18 kg
console.log(myDog.sayHi("99")); // i am 99 kg Hi, this is afu and 20 old, very good!
