// ====== 02 ======
// function merge(arr1, arr2) {
//     const sortarr = arr1.concat(arr2)
//     return sortarr.sort()
// };

// let sorted = merge([1, 3, 5], [2, 4, 6])
// console.log(sorted);

// // ====== 04 ======
// function flat(f) {
//     return f.flat()
// }
// let f = flat([[1, 2], [3, 4], [5, 6]])
// console.log(f);

// // ======= 06 ======
// function a6(e) {
//     return e.includes("123456");
// }
// let e = a6("123456");
// console.log(e);

// // ======= 07 =======
// function a7(a) {
//     return a.join("_").toLowerCase();
// }
// let a = a7(['Hello', 'World']);
// console.log(a);

// // ======= 08 =====
// function a8(b) {
//     return b.some(Array.isArray);
// }
// let b = a8([1, 2, 3, [4, 5]]);
// console.log(b);

// // ====== 09 ======
// function a9(str1, str2) {
//     let add = str1 + ' ' + str2;
//     return add.toUpperCase();
// }
// let c = a9('hello', 'world');
// console.log(c);

// // ======= 10 ======
// function a10(d) {
//     return d.includes("HELLO")
// }
// let d = a10("HELLO");
// console.log(d);



// ============ 12-03-24============


// // ====== 13 ======
function n13(a) {
    return a.includes("12321");
}
let a = n13("12321");
console.log(a);


// ====== 20 ======
// function n20(b) {
//     return b.filter((b) => b <= 50)
// }
// let b = n20(["100", "200", "50", "300"])
// console.log(b);

// function str(b){
//     return min21.filter((b) => 50 <=b);
// }
// let b = str["100", "200", "50", "300"];
// console.log(b);

// =============1===========

// function que1(arr){
//     return arr.reduce((a,b) => (a+b))/arr.length; 
// }
// let arr = que1([10,20,30,40,50])
// console.log(arr);



// <---------------que2--------------->
// function que2(arr){
//     return arr.reduce((a,b) => (a+b))/arr.length; 
// }
// let arr = que2([5,10,15,20,25])
// console.log(arr);

// function arr(arr1){
//     return arr1.reduce((a,b) => (a+b))/arr1.length;
// }
// let arr1 = arr [5, 10, 15, 20, 25];
// console.log(arr1);



// <---------------que5--------------->
// let num = 12345;
// let str = num.toString();
// let sum = 0;
// let i = 0;
// for ( i ;i < str.length; i++){
//     sum += Number(str[i]);
// }
// console.log(sum);


// const test = "4111 1111 1111 1111";
// const testt = /^[0-9]+ [0-9]+ [0-9]+ [0-9]{4,}/g;
// console.log(testt.test(test));

// const sleep = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   };
  
//   const log = async (s, delay) => {
//     for (const c of s) {
//       process.stdout.write(c);
//       await sleep(delay);
//     }
//     process.stdout.write('\n');
//   }

function arr(arr1){
    return arr1.min(arr)
}
