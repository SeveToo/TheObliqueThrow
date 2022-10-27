// const v0x = v0 * Math.cos(ankle)
// const v0y = v0 * Math.sin(ankle)

// const t = (v0y + Math.sqrt(v0y ** 2 + 2 * g * y0)) / g
// const x = v0x * t
// const y = v0y * t - 0.5 * g * t ** 2

// const result__x = document.querySelector('.result__x')
// const result__y = document.querySelector('.result__y')
// const result__t = document.querySelector('.result__t')

// result__x.innerHTML = x
// result__y.innerHTML = y
// result__t.innerHTML = t

const toDegrees = (radians) => radians * (180 / Math.PI)
const toRadians = (degrees) => degrees * (Math.PI / 180)
const fixNumber = (number) => number.toFixed(3)

const v0 = 10 // m/s
const ankle = toRadians(30) // degrees
const g = 9.81 // m/s^2
const y0 = 10 // m

// 10 * sin(30) = 5
// 10 * cos(30) = 8.66
const vy0 = v0 * Math.sin(ankle) // m/s
console.log(fixNumber(vy0))
const vx0 = v0 * Math.cos(ankle) // m/s
console.log(fixNumber(vx0))

const Hmax = fixNumber((v0 * Math.sin(ankle)) ** 2 / (2 * g) + y0) // m
console.log(Hmax)

const Ts = fixNumber(
  Math.sqrt((2 * ((v0 * Math.sin(ankle)) ** 2 / (2 * g) + y0)) / g),
) // s
console.log(Ts)
