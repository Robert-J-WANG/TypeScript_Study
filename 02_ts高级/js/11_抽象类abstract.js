/* ------------------------- 抽象类 ------------------------ */
// 首先，抽象类是不允许被实例化的, 用来规范子类继承
// 通过子类的继承来实习抽象类的实例化:相当于子类的一个模版
class Aclass {
    constructor(aName) {
        this.aName = aName;
    }
    fun() {
        console.log(this.aName + "fdasfdasdf");
    }
}
// const aclass=new Aclass('aaa'); // 无法实例化抽象类
// 通过子类继承，实例化子类来实现
class Bclass extends Aclass {
    constructor(aName) {
        super(aName);
    }
}
const bclass = new Bclass("bbbb");
console.log(bclass.aName);
bclass.fun();
/* -------------------- 抽象类的抽象属性和抽象方法 ------------------- */
class Eclass {
}
// 通过子类继承，实例化子类来实现
class Fclass extends Eclass {
    constructor(aName) {
        super();
        this.aName = aName;
    }
    fun() {
        console.log(this.aName);
    } //{
}
const fclass = new Fclass("fffff");
console.log(fclass); // Fclass { aName: 'fffff' }
fclass.fun(); // fffff
