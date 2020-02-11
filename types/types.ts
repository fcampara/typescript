const username: string = 'João'
const age: number = 27
const hasUser: boolean = true
const dynamicType: any = {}
const arrayTypeString: string[] = ['1']
const arrayTypeNumber: number[] = [1]

// Tuplas, é um array de tipos pré definidos [1, 2, 'abc']
const arrayTupla: [string, number] = ['1', 1]

// enums, valores pré definidos
enum Color {
  Gray = 0,
  Green = 1,
  Blue = 2
}

const myColor: Color = Color.Gray

function getUsername (): string {
  return username
}

function sayHello (): void {
  console.log("Don`t need return value")
}

function multiply (numA: number, numB: number): number {
  return numA * numB
}

// Type function

let calc: (numA: number, numB: number) => number
calc = multiply

let user: { name: string, age: number } = {
  name: 'Felipe',
  age: 27
}

// Alias
type Employer = {
  supervisor: string[],
  punchTheClock: (hours: number) => string
}

let employer: Employer = {
  supervisor: ['Ana', 'Fernando'],
  punchTheClock (hours: number): string {
    return hours <= 8 ? `It's ok` : `out time`
  }
}

// Union Types
let value: string | number = 10

// Type Never, never return value
function showError (msg: string): never {
  throw new Error(msg)
  // while (true)
}

type Product = {
  name: String,
  price: number,
  checkProduct: () => void
}

const product: Product = {
  name: 'Sabão',
  price: 15,
  checkProduct(): void {
    if (!this.name || !this.name.trim()) {
      showError('Need has name')
    }
    if (this.price <= 0) {
      showError('Wrong price')
    }
  }
}

product.checkProduct()

let height: null | number = null

function deposit (value: number, balance: number): number {
  return balance + value
}

type AccountBank = {
  balance: number,
  deposit: (value: number) => void
}

type AccountHolder = {
  name: string,
  accountBank: AccountBank,
  contacts: string[]
}

const accountHolder: AccountHolder = {
  name: 'Felipe',
  accountBank: {
    balance: 1500,
    deposit (value: number): void {
      this.balance = deposit(value, this.balance)
    }
  },
  contacts: ['873459823']
}

accountHolder.accountBank.deposit(500)
