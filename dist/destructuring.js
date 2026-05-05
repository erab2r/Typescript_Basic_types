"use strict";
// object destructuring
// array destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: {
        first: "john",
        last: "doe"
    },
    gender: "male",
    city: "new york"
};
const { gender, city: thisismycity, name: { first } } = user;
// console.log(gender, thisismycity, first);
const friends = ["michael", "steven", "peter"];
const [friend1, friend2, friend3] = friends;
console.log(friend1);
//# sourceMappingURL=destructuring.js.map