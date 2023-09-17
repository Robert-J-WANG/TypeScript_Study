/* ------------------------- 抽象类 ------------------------ */
// 首先，抽象类是不允许被实例化的, 用来规范子类继承
// 通过子类的继承来实习抽象类的实例化:相当于子类的一个模版

abstract class Aclass {
  aName: string;
  constructor(aName: string) {
    this.aName = aName;
  }
  fun() {
    console.log(this.aName + "fdasfdasdf");
  }
}
// const aclass=new Aclass('aaa'); // 无法实例化抽象类

// 通过子类继承，实例化子类来实现
class Bclass extends Aclass {
  constructor(aName: string) {
    super(aName);
  }
}
const bclass = new Bclass("bbbb");
console.log(bclass.aName);
bclass.fun();

/* -------------------- 抽象类的抽象属性和抽象方法 ------------------- */

abstract class Eclass {
  abstract aName: string; // 抽象属性

  // 不能再构造器值初始化抽象属性
  // constructor(aName: string) {
  //   this.aName = aName;
  // }

  abstract fun(): void; // 抽象方法

  // 不能在抽象方法中有具体实现
  // abstract fun() {
  //   console.log(1111);
  // }
}

// 通过子类继承，实例化子类来实现
class Fclass extends Eclass {
  aName: string;
  constructor(aName: string) {
    super();
    this.aName = aName;
  }

  fun(): void {
    console.log(this.aName);
  } //{
}

const fclass = new Fclass("fffff");
console.log(fclass); // Fclass { aName: 'fffff' }
fclass.fun(); // fffff
