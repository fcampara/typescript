@loginObject
class Equipament {
  constructor () {
    console.log('Novo...')
  }
}


type Constructor = { new(...args: any[]): {} }

function loginObject(constructor: Constructor) {
  console.log('Carregando...')
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Antes...')
      super(...args)
      console.log('Depois...')
    }
  }
}

new Equipament()

interface Equipament2 {
  print?(): void
}

class Equipament2 {
  constructor () {
    console.log('Equipament 2')
  }
}

function printable(constructor: Function) {
  constructor.prototype.print = function() {
    console.log(this)
  }
}

const equipament2 = new Equipament2()
equipament2.print && equipament2.print()

class Account {
  @notNegative
  private balance: number

  constructor(balance: number) {
    this.balance = balance
  }

  @freeze
  withdraw(value: number) {
    // if (value > this.balance) return false
    this.balance -= value
    // return true
  }

  @freeze
  getBalance() {
    return this.balance
  }
}

function freeze(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false
}

const account = new Account(1230.43)
// account.withdraw(1230.43)
// account.withdraw(1)
// console.log(account.getBalance())

// This make error in console
// account.getBalance = function() {
//   return this['balance'] + 700
// }

function notNegative (target: any, propertyName: string) {
  delete target[propertyName]
  Object.defineProperty(target, propertyName, {
    get: function(): any {
      return target[`_${propertyName}`]
    },
    set: function(value: any): void {
      if (value < 0) throw new Error('Invalid balance')
      target[`_${propertyName}`] = value
    }
  })
}
