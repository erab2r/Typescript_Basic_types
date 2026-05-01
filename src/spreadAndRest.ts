//spread operators

const friends = ["michael", "steven", "peter"];

const newFriends = ["david", "john","jason"];

friends.push(...newFriends);

console.log(friends);

const user = {
    name: "john",
    age: "30",
    city: "new york"
};

const newUser ={
    hobby: "football",
    profession: "developer"
};
const updatedUser = {...user, ...newUser};

console.log(updatedUser);

//rest operators

// const sendInvite = (friend1:string,friend2:string,friend3:string) => {
//     console.log(`inviting ${friend1}, ${friend2} and ${friend3}`);
// }
// sendInvite("michael", "steven", "peter");
const sendInviteRest = (...friends: string[]) => {
    friends.forEach((friend: string) => 
         console.log(`inviting ${friend}`)
);
};

sendInviteRest("michael", "steven", "peter", "david", "john", "jason");