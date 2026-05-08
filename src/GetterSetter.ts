//Getter
//Setter

class BankAccount {
    public readonly userId : number;
    public userName : string;
    private userBalance : number; 

    constructor(userId:number,userName : string,
        userBalance : number){
            this.userId = userId;
            this.userName = userName;
            this.userBalance = userBalance;
    }
    //balance k set kortase 

    // addBalance(balance: number){
    //    return this.userBalance = this.userBalance + balance;
    // }

    // setter use kore add korta chai 
    set addBalance(amount : number){
         this.userBalance = this.userBalance + amount;
    }
    // get korbo
    // getBalance(){
    //     return this.userBalance;
    // }
    //getter use korbo get korta 
    get getBalance(){
        return this.userBalance;
    }
}
const jhonBhaiAccount = new BankAccount(132,"Mr. Jhon",30);

// jhonBhaiAccount.addBalance(200);
// console.log(jhonBhaiAccount.getBalance());

jhonBhaiAccount.addBalance = 100;
console.log(jhonBhaiAccount);