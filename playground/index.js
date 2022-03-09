'use strict'
const { performance } = require('perf_hooks');
const {monte_carlo_approx,  francois_viete_approx,gregory_leibniz_approx} = require('../lib/pi')

let consolidate = []

console.log('--------------------------------------------------------------')
console.log('\tMonte Carlo PI Approximation\t')
console.log('--------------------------------------------------------------')

console.log('**************************\niterations: 10,000\n**************************\n')
let startTime = performance.now()
const foo = monte_carlo_approx(10000)
let endTime = performance.now()
let timer = (endTime - startTime) / 1000
let monte_carlo_1 = {"name":"monte_carlo_1"}
monte_carlo_1.time_taken = timer
monte_carlo_1.result = foo
monte_carlo_1.differ = Math.PI - foo
consolidate.push(monte_carlo_1)
console.log(`Time taken: ${timer} seconds with the approximation of ${foo}`)

console.log('**************************\niterations: 1,000,000\n*************************\n')
startTime = performance.now()
const bar = monte_carlo_approx(1000000)
endTime = performance.now()
timer = (endTime - startTime) / 1000
let monte_carlo_2 = {"name":"monte_carlo_2"}
monte_carlo_2.time_taken = timer
monte_carlo_2.result = bar
monte_carlo_2.differ = Math.PI - bar
consolidate.push(monte_carlo_2)
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
let francois_viete_1 = {"name":"francois_viete_1"}
francois_viete_1.time_taken = timer
francois_viete_1.result = fooz
francois_viete_1.differ = Math.PI - fooz
consolidate.push(francois_viete_1)
console.log(`Time taken: ${timer} seconds with the approximation of ${fooz}`)
console.log('**************************\niterations: 1,000,000\n*************************\n')
startTime = performance.now()
const barz = francois_viete_approx(1000000)
endTime = performance.now()
timer = (endTime - startTime) / 1000

let francois_viete_2 = {"name":"francois_viete_2"}
francois_viete_2.time_taken = timer
francois_viete_2.result = barz
francois_viete_2.differ = Math.PI - barz
consolidate.push(francois_viete_2)
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
let gregory_leibniz_1 = {"name" : "gregory_leibniz_1"}
gregory_leibniz_1.time_taken = timer
gregory_leibniz_1.result = barz
gregory_leibniz_1.differ = Math.PI - barz
consolidate.push(gregory_leibniz_1)
console.log(`Time taken: ${timer} seconds with the approximation of ${baz}`)
console.log('**************************\niterations: 1,000,000\n*************************\n')
startTime = performance.now()
const bazz = gregory_leibniz_approx(1000000)
endTime = performance.now()
timer = (endTime - startTime) / 1000
let gregory_leibniz_2 = {"name" : "gregory_leibniz_2"}
gregory_leibniz_2.time_taken = timer;
gregory_leibniz_2.result = bazz;
gregory_leibniz_2.differ = Math.PI - bazz;
consolidate.push(gregory_leibniz_2)
console.log(`Time taken: ${timer} seconds with the approximation of ${bazz}`)
console.log('--------------------------------------------------------------')
console.log(`\n\nResult: ${JSON.stringify(consolidate)}`);