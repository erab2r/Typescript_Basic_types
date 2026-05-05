//dynamically generalize

type GenericArray<value> = Array<value>;

// const friends : string[] = ['Mr. X','Mr. Y','Mr. Z'];
// const friends : Array<string> = ['Mr. X','Mr. Y','Mr. Z'];
const friends : GenericArray<string> = ['Mr. X','Mr. Y','Mr. Z'];


// const rollNumber : number[] = [7,44,90];
// const rollNumber : Array<number> = [7,44,90];
const rollNumber : GenericArray<number> = [7,44,90];

// const isEligibleList : boolean[] = [true,false,true];
// const isEligibleList : Array<boolean> = [true,false,true];
const isEligibleList : GenericArray<boolean> = [true,false,true];


//
type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];