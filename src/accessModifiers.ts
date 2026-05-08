//
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
    addBalance(balance: number){
        this.userBalance = this.userBalance + balance;
    }
}
const jhonBhaiAccount = new BankAccount(132,"Mr. Jhon",30);

jhonBhaiAccount.addBalance(200);
console.log(jhonBhaiAccount);