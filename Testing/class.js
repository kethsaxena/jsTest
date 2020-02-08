class customers{
    constructor(fname,lname,amt){
        this.firstName=fname
        this.lastName=lname
        this.transAmount=amt 
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} is my Full Name`
    }
}

const cust1 = new customers("Britney","Spear",20)
const cust2 = new customers("Iron","Man",10)

//cust1
console.log(cust1)
console.log(cust1.getFullName())

console.log('\n')
//cust2
console.log(cust2)
console.log(cust2.getFullName())
