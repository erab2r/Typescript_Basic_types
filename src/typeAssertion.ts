
const kgToGMConverter = (input: string | number) : 
string | number | undefined => {

    if(typeof input === "number"){
        return input * 1000;
    } else if(typeof input === "string"){
        const [value] = input.split(" ")
        return `Converted output is: ${Number(value) * 1000}`
    }
}

const result1 = kgToGMConverter(2) as number;
console.log(result1);
const result2 = kgToGMConverter('3 kg') as string;
console.log(result2);


// const typesOFUsers = (User: string | number): string | number | undefined =>{
//     if(typeof User === "string"){
//         const [value] = User.split(" ");
//         return `Output is ${Number(value)* 3000}`;
//     }else if(typeof User === "number"){
//         return User*2000;
//     }
// }
// const rs1 = typesOFUsers("2 kg");
// console.log(rs1);