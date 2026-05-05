"use strict";
// ? : ternary operator: decision making 
// ?? : nullish coalescing operator: default value when null or undefined
//?. optional chaining
Object.defineProperty(exports, "__esModule", { value: true });
const biyerJonneEligible = (age) => {
    // if(age >= 21){
    //     console.log("You are eligible");
    // } else {
    //     console.log("You are not eligible");
    // }
    const result = age >= 21 ? "You are eligible" : "You are not eligible";
    console.log(result);
};
biyerJonneEligible(20);
//
const userTheme = undefined;
const selectedTheme = userTheme ?? 'Light theme';
console.log(selectedTheme);
//
const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest!";
const resultWithNulish = isAuthenticated ?? "You are guest!";
console.log({ resultWithTernary }, { resultWithNulish });
//?. optional chaining
const user = {
    address: {
        city: "Dhaka",
        town: "Banani",
    },
};
const postalcode = user?.address?.postalCode;
console.log(postalcode);
//# sourceMappingURL=questionMark.js.map