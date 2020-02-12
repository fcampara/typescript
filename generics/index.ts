function echo<T>(object: T): T {
  return object
}

const rating: Array<number> = [10, 9, 8 , 7]
rating.push(8.4)

// function print<T>(args: T[]) {
//   args.forEach(e => console.log(e))
// }

// print([1, 2, 3])
// print<number>([1, 2, 3])
// print<string>(['bc', 'de', 'fg'])
// print<{ name: string }>([{ name: 'Felipe'}])

// type Student = { name: string, age: number }
// print<Student>([{ name: 'Felipe', age: 27 }])

// Type generics
type Echo = <T>(data: T) => T
const callEcho: Echo = echo
callEcho<string>('Something')

// Class Generics
abstract class OperationBinary<T, R> {
  constructor(public operator1: T, public operator2: T) {}
  abstract execute(): R
}

class SumBinary extends OperationBinary<number, number> {
  execute(): number {
    return this.operator1 + this.operator2
  }
}

class DifferenceDqates extends OperationBinary<DateController, string> {
  getTime (date: DateController): number {
    let { day, month, year } = date
    return new Date(`${month}/${day}/${year}`).getTime()
  }

  execute(): string {
    const time1 = this.getTime(this.operator1)
    const time2 = this.getTime(this.operator2)
    const difference = Math.abs(time1 - time2)
    const day = 1000 * 60 * 60 * 24
    return `${Math.ceil(difference / day)} days`
  }
}

class Queue<T extends number | string> {
  private queue: Array<T>

  constructor(...args: T[]) {
    this.queue = args
  }

  getIn(element: T) {
    this.queue.push(element)
  }

  next(): T {
    const [first] = this.queue
    this.queue.slice(0, 1)
    return first
  }

  printQueue() {
    console.log(this.queue)
  }
}

const queue = new Queue<string>('Gui', 'Felipe', 'João')
// const queue2 = new Queue<string>({})
