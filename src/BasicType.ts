// Boolean
const isDown: boolean = false

console.log(isDown)

// Number
const decimal: number = 6
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744

console.log(decimal, hex, binary, octal)

// String
let color: string = 'blue'
color = 'red'

console.log(color)

const fullName: string = 'Tom'
const age: number = 37
const sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`

console.log(sentence)

// Array
const list: number[] = [1, 2, 3]
// const list: Array<number> = [1, 2, 3]

console.log(list)

// Tuple
const x: [string, number, boolean] = ['hello', 10, true] // OK

// x = [10, 'hello'] // Error

console.log(x)

console.log(x[0].substring(1)) // OK
// console.log(x[1].substring(1)) // Error, 'number' does not have 'substring'

// Enum
enum Color {Red = 1, Green = 2, Blue = 4}
const c: Color = Color.Green

console.log(c)

const colorName: string = Color[2]

console.log(colorName)

// Any
let notSure: any = 4
console.log(notSure)

notSure = 'maybe a string instead'
console.log(notSure)

notSure = false
console.log(notSure)

const anyList: any[] = [1, true, 'free']
console.log(anyList)

// Void
function warnUser (): void {
  console.log('This is my warning message')
}

const unusable: void = undefined

// Null & Undefined
const u: undefined = undefined
const n: null = null

let num: number | undefined = undefined

// Never

