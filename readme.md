# PI Approximation

The formula that can be used to calculate the approximation of Pi
1. **Monte Carlo Simulation**. According to Samik Raychaudhuri, 2008, Monte Carlo simulation is a type of 
simulation by repeating the random sampling and statistical analysis to compute the results. The technique 
that will be used in this formula(4 * sum of x^2 and y^2 / total count of point)** to calculate the 
approximation of PI is random number generator.  The algorithm to generate the random number will be
```js
 let numerator = 0
 const denominator = 10000
 for(let i = 0; i < denominator; i++){
    // generate the x and y coordinate
    let x = Math.random()*2-1;
    let y = Math.random()*2-1;

    if ((x*x + y*y) < 1) {
            numerator++
    }

}
let approximation = 4.0 * numerator / denominator
```

# Performance Comparison

```txt
--------------------------------------------------------------
        Monte Carlo PI Approximation
--------------------------------------------------------------
**************************
iterations: 10,000
**************************

Time taken: 0.0031273999214172362 seconds with the approximation of 3.1368
**************************
iterations: 1,000,000
*************************

Time taken: 0.024718600034713746 seconds with the approximation of 3.140196
--------------------------------------------------------------

--------------------------------------------------------------
        Francois Viete PI Approximation
--------------------------------------------------------------
**************************
iterations: 10,000
**************************

Time taken: 0.0015998997688293458 seconds with the approximation of 3.141592653589794
**************************
iterations: 1,000,000
*************************

Time taken: 0.0073066999912261964 seconds with the approximation of 3.141592653589794
--------------------------------------------------------------

--------------------------------------------------------------
        Gregory-Leibniz PI Approximation
--------------------------------------------------------------
**************************
iterations: 10,000
**************************

Time taken: 0.0018025000095367432 seconds with the approximation of 3.1414926535900345
**************************
iterations: 1,000,000
*************************

Time taken: 0.002139899969100952 seconds with the approximation of 3.1415916535897743
--------------------------------------------------------------
```

# Conclusion
The formula that is being use in this web app will be Francois Viete PI Approximation, as it has the lowest difference to the PI value and more efficient alogrithm.

# Reference Link (Coding)
1. http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html
2. https://www.codedrome.com/estimating-pi-in-javascript/ (recommended)
3. https://ourcodeworld.com/articles/read/1598/how-to-calculate-an-approximation-of-pi-with-javascript-solution-for-programming-interview-question

# Memdb lib
1. https://www.npmjs.com/package/memory-db
2. https://www.npmjs.com/package/@outofsync/memory-cache

# Paper
1. https://www.sciencedirect.com/science/article/pii/S0021904513001159

** where x and y are coordinate with the value of between 0 and 1