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

const f40 = new Ferrari('Ferrari', 'F40', 324)
