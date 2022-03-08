'use strict'

function monte_carlo_approx(cnt){
    let numerator = 0
    const denominator = cnt
    for(let i = 0; i < denominator; i++){
       // generate the x and y coordinate
       let x = Math.random()*2-1;
       let y = Math.random()*2-1;
   
       if ((x*x + y*y) < 1) {
               numerator++
       }
   
   }
   return 4.0 * numerator / denominator
}

function francois_viete_approx(iter){
    let numerator = 0;
    let pi = 1;

    for(let i = 1; i <= iter; i++)
    {
        numerator = Math.sqrt(2 + numerator);

        pi*= (numerator / 2);
    }

    return (1 / pi) * 2;
}

function gregory_leibniz_approx(iter){
    let denominator = 1;
    let multiplier = 1;
    let pi = (4 / denominator);

    for(let i = 2; i <= iter; i++)
    {
        pi += ( (4 / (denominator += 2)) * (multiplier *= -1) );
    }
    return pi;
}

module.exports = {
    monte_carlo_approx,
    francois_viete_approx,
    gregory_leibniz_approx
}