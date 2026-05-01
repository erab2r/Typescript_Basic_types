//Function
// arrow function,normal funtion.

function add(num1: number, num2: number): number {
    return num1 + num2;
}
// add(12, "13");

const sub = (num1: number, num2: number): number => num1-num2;
// sub(12, "13");

//Object with function = method

const poorUser ={
    name: "John",
    balance: 90,
    addBalance(money:number):number{
        return this.balance + money;
    }
}

const arr: number[] = [1, 2, 3];
const sqrArr = arr.map((num:number):number => num*num);

const array : number[] = [1, 2, 3];
const subArr = array.map((num:number):number => num-1);