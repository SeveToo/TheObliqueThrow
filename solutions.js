const vy0_out = document.querySelector('#solution__vy0')
const vx0_out = document.querySelector('#solution__vx0')
const Hmax_out = document.querySelector('#solution__Hmax')
const Hm_out = document.querySelector('#solution__Hm')
const Tc_out = document.querySelector('#solution__Tc')
const Tw_out = document.querySelector('#solution__Tw')
const Ts_out = document.querySelector('#solution__Ts')
const Zc_out = document.querySelector('#solution__Zc')
const Zm_out = document.querySelector('#solution__Zm')

// const resolve__button = document.querySelector('.resolve__button')

const showSolutions = () => {
  console.log('showSolutions()')
  // solutions
  console.log('ankle', ankle)
  console.log('v0', v0)
  const vy0 = solveVy0()
  const vx0 = solveVx0()
  const Hmax = solveHmax()
  const Hm = solveHm()
  const Tw = solveTw()
  const Ts = solveTs()
  const Tc = solveTc()
  const Zc = solveZc()
  const Zm = solveZm()

  vy0_out.textContent = vy0
  vx0_out.textContent = vx0
  Hmax_out.textContent = Hmax
  Hm_out.textContent = Hm
  Tc_out.textContent = Tc
  Tw_out.textContent = Tw
  Ts_out.textContent = Ts
  Zc_out.textContent = Zc
  Zm_out.textContent = Zm
}
