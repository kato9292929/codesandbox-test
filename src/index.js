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

/**
 * mapやlitterを使った配列の処理
 */

const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index +1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(`${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時: 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formatttedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formatttedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

//&& は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
