// function test() {
//     let text = "1" + 2 + "3" + 4; //4 + 3 + 2 + "1";
//     document.getElementById("result").innerHTML = text;//{}.toString();
// }

// test();


// var foo = 1;
// function bar() {
//     foo = 10;
//     return;
//     function foo() {}
// }

// bar();
// alert(foo);


// var result = "ten" * 3;
// alert(result == NaN);


// function foo(a) {
//     alert(arguments.length);
// }

// foo(1, 2, 3);


// var a1 = "wrong"
// function a() { return "1st";}
// function a(val) {this.a1 = "right"; return "2nd";}
// alert(new a().a1);

// alert(typeof NaN);





// var a1 = "wrong";

// function a() { this.a1 = "right"; return "1st"; }

// function a(val) { return "2nd"; }
// alert(new a().a1);



// function bar() {
//     return foo;
//     foo = 10;

//     function foo() {}
//     var foo = 11;
// }
// alert(typeof bar());


// function foo(a) {
//     arguments[0] = 2;
//     alert(a);
// }

// foo(1); // 2



// var arr = [];
// arr[0] = 'a';
// arr[1] = 'b';
// arr[10] = 'c';
// arr.foo = 'd';
// alert(arr.length); // 11


// var arr = [];
// arr[0] = 'a';
// arr[1] = 'b';
// arr.foo = 'c';
// alert(arr.length);


// var globalVar = "global";
// function test1() {
//     console.log(globalVar);
//     return;
//     var globalVar;
// }
// test1();

// let test = 4;

// function b(x, y, a) {
//   arguments[2] = 10;
//   alert(a);
// }
// b(1, 2, test);

// alert(test);