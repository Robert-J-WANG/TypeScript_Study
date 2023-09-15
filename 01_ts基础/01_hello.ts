(() => {
  function sayHi(str: string) {
    console.log("hello" + str);
  }
  sayHi("123");
  let num: number = 5;
  num++;
  num = Math.floor(num * 10);
  console.log(num);
})();
