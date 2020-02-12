interface human {
  name: string
  age?: number
  [prop: string]: any
  salute(lastName: string): void
}

function sayWithHello (person: human) {
  console.log(`Hello`, person.name.toString())
}

const person: human = {
  name: 'João',
  age: 27,
  salute (lastName: string): void {
    console.log(`Olá, meu nome é ${this.name} ${lastName}`)
  }
}

class ClientController implements human {
  name: string = ''
  salute (lastName: string): void {
    console.log(`Olá, meu nome é ${this.name} ${lastName}`)
  }
}

const myClient = new ClientController()
myClient.name = 'Han'
sayWithHello(myClient)
myClient.salute('Solo')

// Interface function

interface FunctionCalc {
  (a: number, b: number): number
}

let potency: FunctionCalc

potency = function(base: number, exp: number): number {
  return Math.pow(base, exp)
}

potency(3, 10)

// Heritage
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
  console.log(this)
}

const teste = { name: 'felipe' }
