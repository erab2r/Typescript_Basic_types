type User = {
    id: number,
    name: {
        first: string;
        last: string;
    },
    gender: 'male' | 'female',
    contactNo:string,
    address: {
        city: string;
        division: string;
    }
}


const user1: User = {
    id:123,
    name: {
        first: "john",
        last: "doe"
    },
    gender: "male",
    contactNo: "1234567890",
    address: {
        city: "new york",
        division: "manhattan"
    }
}
const user2: User = {
    id:124,
    name: {
        first: "Emily",
        last: "doe"
    },
    gender: "female",
    contactNo: "1234567899",
    address: {
        city: "Dhaka",
        division: "Gulshan"
    }
}

// function 

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;