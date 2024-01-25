// 1 - misol
// const nuber = (n) =>{
//     if(n % 2 == 0){
//         return n;
//     }else {
//         return n*2;
//     }
// }
// console.log(nuber(8));

//-----------------------------------------------

// 2 - misol 

// const nuber = (n) => {
//     let x = n.split("").reverse().join("");
//     console.log(n);
//     console.log(x);
//     if(x == n){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// nuber("1234321")

//-----------------------------------

// 3-misol

// let s =[];
// let n = 123400;
// let b = n.toString().split("").reverse();
// for(i =0 ; i<=b.length; i++){
//     if(b[i]==0){
//         // s.pop(b[i]);
//     }else{
//         s.push(b[i]);
//     }
// }
// console.log(s.join(""));

//-------------------------------------

// 4-misol

let arr = [];

function addElement(a) {
    arr.push(a);
    return arr;
}

addElement(21);