const myArr = [0,1,2,3,4,5,6]
const bodyBuilders = ["Ronnie", "jay", "kai", "Rammy"] 

// another method
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);
console.log(myArr);

// Array Method

myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)

console.log(myArr); 
 // nine will get added at starting of array
//  [
//     9, 0, 1, 2,
//     3, 4, 5, 6
//   ]


myArr.shift()
console.log(myArr); // delete first element

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(4));
console.log(myArr);

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr); //string

// slice or splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);








