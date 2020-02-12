namespace Geometric {
  export namespace Area {
    const PI = 3.14

    export function circumference (radius: number): number {
      return PI * Math.pow(radius, 2)
    }

    export function rectangle (base: number, heigth: number): number {
      return base * heigth
    }
  }
}

Geometric.Area.circumference(10)
Geometric.Area.rectangle(10, 20)
