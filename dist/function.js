"use strict";
//Function
// arrow function,normal funtion.
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
// add(12, "13");
const sub = (num1, num2) => num1 - num2;
// sub(12, "13");
//Object with function = method
const poorUser = {
    name: "John",
    balance: 90,
    addBalance(money) {
        return this.balance + money;
    }
};
const arr = [1, 2, 3];
const sqrArr = arr.map((num) => num * num);
const array = [1, 2, 3];
const subArr = array.map((num) => num - 1);
//# sourceMappingURL=function.js.map