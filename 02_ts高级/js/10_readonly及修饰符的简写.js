/* ------------------- readonly:不能修改属性 ------------------ */
// 但是可以在构造器中修改
class Some {
    constructor(sth) {
        // 只能在构造器中修改（初始化赋值）
        this.sth = sth;
    }
    update(newSth) {
        // this.sth = newSth; //  只能在构造器之外修改（重新赋值）
    }
}
const some = new Some("something new");
console.log(some); //Some { sth: 'something new' }
// some.sth = "something old"; // 无法修改只读属性
/* -------------- 修饰符的简写：在构造器的形参中声明并赋值（初始化） ------------- */
// 所有修饰符都可以直接写进造器的形参中，从而省略掉this的赋值
class Any {
    // public anything: string; //
    // private anyone: string; //
    // protected anytime: string;
    // readonly anyday: number;
    constructor(anything, anyone, anytime, anyday) {
        this.anything = anything;
        this.anyone = anyone;
        this.anytime = anytime;
        this.anyday = anyday;
        // this.anything = anything;
        // this.anyone = anyone;
        // this.anytime = anytime;
        // this.anyday = anyday;
    }
    show() {
        console.log(this.anything, this.anyone, this.anytime, this.anyday);
    }
}
const any = new Any("123", "abc", "123abc", "abc123");
console.log(any);
/*
Any {
  anything: '123',
  anyone: 'abc',
  anytime: '123abc',
  anyday: 'abc123'
}
*/
any.show(); // 123 abc 123abc abc123
console.log(any.anything);
// console.log(any.anyone) // 无法访问私有属性
// console.log(any.anytime) // 无法访问保护性属性
console.log(any.anyday);
