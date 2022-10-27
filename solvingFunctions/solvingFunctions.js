// vertical velocity
const solveVy0 = () => fixNumber(v0 * Math.sin(ankle))

// horizontal velocity
const solveVx0 = () => fixNumber(v0 * Math.cos(ankle))

// height of the maximum
const solveHmax = () => fixNumber((v0 * Math.sin(ankle)) ** 2 / (2 * g) + y0)

// height of the maximum minus the height of the start
const solveHm = () => fixNumber((v0 * Math.sin(ankle)) ** 2 / (2 * g))

// time when the bullet is going up
const solveTw = () => fixNumber((v0 * Math.sin(ankle)) / g)

// time when the bullet is going down
const solveTs = () =>
  fixNumber(Math.sqrt((2 * ((v0 * Math.sin(ankle)) ** 2 / (2 * g) + y0)) / g))

// full time of flight
const solveTc = () =>
  fixNumber(
    (v0 * Math.sin(ankle)) / g +
      Math.sqrt((2 * ((v0 * Math.sin(ankle)) ** 2 / (2 * g) + y0)) / g),
  )

// full way x
const solveZc = () => fixNumber(solveVx0() * solveTc())

// way x
const solveZm = () => fixNumber(solveVx0() * solveTw() * 2)
