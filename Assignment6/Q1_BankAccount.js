// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount{
    constructor(balance,owner){
        this.balance=balance
        this.owner=owner
    }
    deposit(amount){
        this.balance+=amount
        console.log("Congrats your amount is deposited")
        console.log("New Balance :" ,this.balance)
    }
    withdraw(amount){
        if(this.balance>amount){
        this.balance-=amount
        console.log("Congrats your withdraw is done")
        console.log("New Balance :" ,this.balance)
        }
        else{
            console.log("Cannot withdraw as the amount is more than balance")
        }
    }
    displayBalance(){
        console.log(`Name of owner is ${this.owner}`)
        console.log(this.balance)
    }
}

const obj=new BankAccount(100000000,"Nishint Goyal")
obj.displayBalance();
obj.deposit(800000000)
obj.withdraw(8242000)