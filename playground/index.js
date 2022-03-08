'use strict'
const { performance } = require('perf_hooks');
const {monte_carlo_approx,  francois_viete_approx,gregory_leibniz_approx} = require('../lib/pi')


console.log('--------------------------------------------------------------')
console.log('\tMonte Carlo PI Approximation\t')
console.log('--------------------------------------------------------------')
console.log('**************************\niterations: 10,000\n**************************\n')
let startTime = performance.now()
const foo = monte_carlo_approx(10000)
let endTime = performance.now()
let timer = (endTime - startTime) / 1000

console.log(`Time taken: ${timer} seconds with the approximation of ${foo}`)
console.log('**************************\niterations: 1,000,000\n*************************\n')
startTime = performance.now()
const bar = monte_carlo_approx(1000000)
endTime = performance.now()
timer = (endTime - startTime) / 1000
console.log(`Time taken: ${timer} seconds with the approximation of ${bar}`)
console.log('--------------------------------------------------------------')

console.log('\n--------------------------------------------------------------')
console.log('\tFrancois Viete PI Approximation\t')
console.log('--------------------------------------------------------------')
console.log('**************************\niterations: 10,000\n**************************\n')
startTime = performance.now()
const fooz = francois_viete_approx(10000)
endTime = performance.now()
timer = (endTime - startTime) / 1000
console.log(`Time taken: ${timer} seconds with the approximation of ${fooz}`)
console.log('**************************\niterations: 1,000,000\n*************************\n')
startTime = performance.now()
const barz = francois_viete_approx(1000000)
endTime = performance.now()
timer = (endTime - startTime) / 1000
console.log(`Time taken: ${timer} seconds with the approximation of ${barz}`)
console.log('--------------------------------------------------------------')

console.log('\n--------------------------------------------------------------')
console.log('\tGregory-Leibniz PI Approximation\t')
console.log('--------------------------------------------------------------')
console.log('**************************\niterations: 10,000\n**************************\n')
startTime = performance.now()
const baz = gregory_leibniz_approx(10000)
endTime = performance.now()
timer = (endTime - startTime) / 1000
console.log(`Time taken: ${timer} seconds with the approximation of ${baz}`)
console.log('**************************\niterations: 1,000,000\n*************************\n')
startTime = performance.now()
const bazz = gregory_leibniz_approx(1000000)
endTime = performance.now()
timer = (endTime - startTime) / 1000
console.log(`Time taken: ${timer} seconds with the approximation of ${bazz}`)
console.log('--------------------------------------------------------------')