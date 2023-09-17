/* ------------------- 类的静态成员包括静态属性和方法 ------------------ */

// 理解为只属于这个类本身的属性和方法，  不能通过其实例化对象或其他想要继承此类的子类访问静态属性和方法

// 父类
class A {
  title: string;
  // 静态属性
  static content: string = "a-content";
  constructor(title: string) {
    this.title = title;
  }

  saySomething() {
    console.log("say hi");
  }
  // 静态方法
  static doSomething() {
    console.log("do something");
  }
}

// 子类
class B extends A {
  constructor(title: string) {
    super(title);
  }
}
// 实例化父类
const aa = new A("a-title");

console.log(aa); // A { title: 'a-title' }
// console.log(aa.content) //  实例对象无法访问类的静态属性
console.log(A.content); // a-content, 可以通过类自身访问

aa.saySomething(); // say hi
// aa.doSomething(); // 实例对象无法访问类的静态方法
A.doSomething(); // do something,可以通过类自身访问

// 实例化子类
const bb = new B("b-title");
console.log(bb); // B { title: 'my title' }
// console.log(bb.content) // 无法继承父类的content属性
bb.saySomething(); //say hi
// bb.doSomething(); //无法继承父类的doSomething方法
