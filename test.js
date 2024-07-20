function power(base,exp) {
    let y = base;
    for (let i = 1; i < exp;i++)
        {
            base = base * y;
        }
    console.log(base);
}
power(3,4);
let power1 = function (base1,exp1) 
{
    let x = base1;
    for (let i = 1; i < exp1;i++)
        {
            base1 = base1 * x;
        }
        return base1;
}
console.log(power1(3,4));