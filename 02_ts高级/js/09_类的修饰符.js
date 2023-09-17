/* ------------- public private 和 protected ------------- */
/* -------------------- 用来设置类中成员的访问级别 ------------------- */
// public： 默认的，任何实例对象和继承类都能访问
// private： 只有在此类的内部访问，其实例对象不能访问，子类可以继承到，但不能访问，不管是在子类的内部，还是子类的实例对象
// protected：只有在此类的内部访问，其实例对象不能访问，子类可以继承到，但只能在子类的内部访问，子类的实例对象不能访问
class Dad {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    eat() {
        console.log("eat something");
    }
    sleep() {
        console.log("sleep some time");
    }
    run() {
        console.log("running");
    }
}
const dad = new Dad("JJ", 99, 88);
console.log(dad); // Dad { name: 'JJ', age: 99, weight: 88 }
console.log(dad.name); // JJ
// console.log(dad.age); // 实例对象无法访问私有属性
// console.log(dad.weight); // 实例对象无法访问protected属性
class Son extends Dad {
    constructor(name, age, weight) {
        super(name, age, weight);
    }
    talk() {
        console.log(this.name);
        // console.log(this.age) // 继承类内部无法访问父类的私有属性
        console.log(this.weight); // 继承类内部可以访问父类的protected属性
    }
}
const son = new Son("ll", 12, 50);
console.log(son); // Son { name: 'll', age: 12, weight: 50 }
console.log(son.name);
// console.log(son.age); // 实例对象无法访问私有属性
// console.log(son.weight); // 实例对象无法访问protected属性
son.eat(); // eat something
// son.sleep() // 实例对象无法访问私有方法
// son.run() // 实例对象无法访问protected方法
son.talk(); // 50
