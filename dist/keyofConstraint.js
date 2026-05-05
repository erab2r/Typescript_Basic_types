"use strict";
// type PoorMan = {
//     rickshaw: string;
//     cycle : string;
//     bike: string
// };
Object.defineProperty(exports, "__esModule", { value: true });
const mobileShows = {
    brand: "xiaomi",
    price: "35000",
    model: "11lite 5g"
};
const mobileSetCreate = (obj, key) => {
    return obj[key];
};
const result = mobileSetCreate(mobileShows, "brand");
console.log(result);
const user = {
    id: 123,
    name: "jhon",
};
const result2 = mobileSetCreate(user, "name");
console.log(result2);
//# sourceMappingURL=keyofConstraint.js.map