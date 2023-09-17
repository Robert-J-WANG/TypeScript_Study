/* ------------------------ 类的概念 ------------------------ */
// 用来描述需要创建对象们的共同的属性和方法
// 是一个模版，用于实例化一个具体的对象

// 类的创建
class Person {
  // 定义属性类型
  name: string;
  age: number;
  // 使用构造器方法,初始化属性值，同时可以用来使用new关键字实例化一个对象
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    // this指向实例化的对象
    console.log(" this 指向的是" + this);
    console.log(" this 的属性指向的是" + this.name, this.age);
    console.log(" this 的方法指向的是" + this.sayHi);
    console.log(" ---------------------------------");
  }
  // 定义方法
  sayHi(student: string): string {
    return `Hi ${student}, my name is ${this.name},  and I am ${this.age} old`;
  }
}
// 类的使用
const teacher = new Person("Peter", 40);
console.log(teacher); //{ name: 'Peter', age: 40 }
console.log(teacher.sayHi("Jack")); //Hi Jack, my name is Peter,  and I am 40 old
