/**
 * const,let等の変数宣言
 */
// var val1 = "var変数"
// console.log(val1);

// // var変数は上書き可能

// val1 = "var変数を上書き"
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// console.log(func3(10, 20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "じゃけぇ",
//    age:28,
//  };

// const message1 = '名前は${myProfile.name}です。年齢は${myProfile.age}歳です。';
// console.log(message1);

// const { name, age} = myProfile
// const message2 = '名前は${name}です。年齢は${age}歳です。';
// console.log(message2);

// const myProfile = ['じゃけぇ' , 28];

// const message3 = '名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。'
// console.log(message3);

// const [name, age] = myProfile
// constt message4 = '名前は${name}です。年齢は${age}です。'
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("じゃけぇ");

// /**
//  * スペレッド構文 ...
//  */
// //配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

//まとめる

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
