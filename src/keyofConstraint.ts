// type PoorMan = {
//     rickshaw: string;
//     cycle : string;
//     bike: string
// };

// type prMan1 = "rickshaw" | "cycle"  | "bike";
// type prMan2 = keyof PoorMan;

// const prMan: prMan2 = "bike";


type mobileShow ={
    brand: string;
    price: string;
    model: string
};


 const mobileShows: mobileShow = {
    brand: "xiaomi",
    price: "35000",
    model:"11lite 5g"
 }

 const mobileSetCreate =<x>(obj: x , key : keyof x )=> {
    return obj[key];
 }

 const result = mobileSetCreate(mobileShows,"brand");
 console.log(result);

 const users = {
    id: 123,
    name: "jhon",
 };
 const result2 = mobileSetCreate(users,"name");
 console.log(result2);


 //

 //Problem 1
 type Users = {
    id : number;
    username : string;
    isAdmin: boolean;
 };

 const user : Users = {
  id: 1,
  username: "alex",
  isAdmin: true
};

const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const result3 = getValue(user,"id");
console.log(result3)