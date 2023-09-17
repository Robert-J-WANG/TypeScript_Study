/* ---------- 使用 getter 和 setter 可以改变属性的赋值和读取行为 --------- */
// 设置 get 和 set ，重新封装一个方法，获取和设置类的属性值
class UserName {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    // 功能类似如下封装的2个方法
    getFname() {
        return this.fname;
    }
    setFname(value) {
        this.fname = value;
    }
    // ts实际使用的方式,使用关键字get和set
    get Fname() {
        return this.fname;
    }
    set Fname(value) {
        this.fname = value;
    }
}
const u = new UserName("jack", "chen");
console.log(u); // UserName { fname: 'jack', lname: 'chen' }
/* --------------------- 获取属性值的3种方式 --------------------- */
// 1.直接通过属性名(属性为公共属性public)
console.log(u.fname); // jack
// 2.通过自己封装的方法，当属性设为private时
console.log(u.getFname()); // jack
// 3.使用get 存取器, 当属性设为private时
console.log(u.Fname); // jack
/* --------------------- 设置属性值的3种方式 --------------------- */
// 1.直接通过属性名(属性为公共属性public)
// u.fname = "peter";
// console.log(u.fname);
// 2.通过自己封装的方法，当属性设为private时
u.setFname("peter");
console.log(u.getFname()); // jack
// 3.使用 set 存取器, 当属性设为private时
u.Fname = "peter";
console.log(u.Fname); // jack
console.log(u);
/*
总结：在一个类中我们将其中一个属性用private修饰，那么，在类的外部就无法访问到该属性，这个时候我们可以通过getters/setters来封装一下，以便在类的外部去访问该属性。需要注意的是，只带有 get不带有set的存取器自动被推断为readonly。也就是说，如果只写get但没有set的话，我们是不能更改值的
*/
