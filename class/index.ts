class DateController {
  constructor(public day: number = 1, public month: number = 1, public year: number = 1970) {
  }
}

const birthDay = new DateController(3)

class ProductController {
  constructor(public name: string, public price: number, public discount: number = 0){}

  get percentual(): number {
    return this.discount * 100
  }

  get priceDiscount(): number {
    const price = new Intl.NumberFormat('en-ys', { maximumSignificantDigits: 3 }).format(this.price * (1 - this.discount))
    return Number(price)
  }

  resume(): string {
    return `This product ${this.name} cost $${this.price} (${this.percentual}% off) with discout $${this.priceDiscount}`
  }

}

const pencil = new ProductController('Pencil', 4.2, 0.06)


class CarController {
  private speed: number = 0

  constructor(public brand: string, model: string, private maxSpeed: number = 200) {}

  protected changeSpeed(delta: number): number {
    const newSpeed = this.speed + delta
    const isValidSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed

    if (isValidSpeed) {
      this.speed = newSpeed
    } else {
      this.speed = delta > 0 ? this.maxSpeed : 0
    }

    return newSpeed
  }

  speedUp(): number {
    return this.changeSpeed(5)
  }

  stop(): number {
    return this.changeSpeed(-5)
  }
}

const car1 = new CarController('Ford', 'Ka', 185)

// Super
class Ferrari extends CarController {
  constructor(model: string, maxSpeed: number) {
    super('Ferrari', model, maxSpeed)
  }

  speedUp (): number {
    return this.changeSpeed(20)
  }

  stop (): number {
    return this.changeSpeed(-15)
  }
}

const f40 = new Ferrari('F40', 324)

// Static
class MathController {
  static PI: number = 3.1416

  static areaCircle(radius: number): number {
    return this.PI * Math.pow(radius, 2)
  }
}

MathController.areaCircle(4)

// Abstract, can't initialize only extends
abstract class CalcController {
  protected result: number = 0

  abstract execute(...numbers: number[]): void

  get results(): number {
    return this.result
  }
}

class Sum extends CalcController {
  execute(...numbers: number[]): void {
    this.result = numbers.reduce((current, accumulator) => current + accumulator)
  }
}

class Multiply extends CalcController {
  execute (...numbers: number[]): void {
    this.result = numbers.reduce((current, accumulator) => current * accumulator)
  }
}

let c1: CalcController = new Sum()
c1.execute(2, 3, 4, 5)

c1 = new Multiply()
c1.execute(2, 3, 4, 5)

// Singleton
class UnicController {
  private static instance: UnicController = new UnicController

  private constructor() {

  }

  static getInstance(): UnicController {
    return UnicController.instance
  }

  now() {
    return new Date()
  }
}

UnicController.getInstance().now()

// Only read
class AirplaneController {
  public readonly model: string

  constructor(model: string, public readonly prefix: string) {
    this.model = model
  }
}

const turb = new AirplaneController('TU-114', 'PT-ABC')
//turb.model = 'Boing'
