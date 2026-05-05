"use strict";
//array,object,tuple
Object.defineProperty(exports, "__esModule", { value: true });
let bazaarList = ["apple", "banana", "grapes"];
// bazaarList.push(12);
let mixedArr = ["eggs", 12, "milk", 14, "sugar", 13];
//  mixedArr.push(true);
let couple = ["John", "Jane"];
//Reference type: object
const user = {
    firstName: "John",
    lastName: "Doe",
    isMarried: true
};
user.firstName = "Jane";
console.log(user);
// const user: {  readonly firstName: string; //access modifier
//      lastName: string; 
//      isMarried: boolean 
//     } = {
//     firstName: "John",
//     lastName: "Doe",
//     isMarried: true
// };
// user.firstName = "Jane";
// console.log(user);
// const user: { firstName: "John";// value type = literal type
//      lastName: string; 
//      isMarried: boolean 
//     } = {
//     firstName: "John",
//     lastName: "Doe",
//     isMarried: true
// };
// user.firstName = "Jane";
// console.log(user);
// const users: { firstName: string; middleName?: string; lastName: string } = {
//     firstName: "John",
//     lastName: "Doe"
// };
//# sourceMappingURL=nonprimitive.js.map