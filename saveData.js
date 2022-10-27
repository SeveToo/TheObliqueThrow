const data__ankle = document.querySelector('#data__ankle')
const data__v0 = document.querySelector('#data__v0')
const data__y0 = document.querySelector('#data__h0')
const data__g = document.querySelector('#data__g')

const resolve__button = document.querySelector('.resolve__button')

let ankle, v0, y0, g

resolve__button.addEventListener('click', (e) => {
  e.preventDefault()
  // get data from input
  const ankle_inp = parseFloat(document.querySelector('#ankle').value)
  const v0_inp = parseFloat(document.querySelector('#v0').value)
  const y0_inp = parseFloat(document.querySelector('#y0').value)
  const g_inp = parseFloat(document.querySelector('#g').value)

  data__ankle.textContent = ankle_inp
  data__v0.textContent = v0_inp
  data__y0.textContent = y0_inp
  data__g.textContent = g_inp

  // save data to global variables
  ankle = toRadians(ankle_inp)
  v0 = v0_inp
  y0 = y0_inp
  g = g_inp

  // solutions
  showSolutions()
})
